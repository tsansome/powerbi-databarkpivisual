/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import * as d3 from "d3";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;

import {
    ITooltipServiceWrapper,
    createTooltipServiceWrapper,
    TooltipEventArgs
} from 'powerbi-visuals-utils-tooltiputils';
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;

import ISelectionManager = powerbi.extensibility.ISelectionManager;
import ISelectionId = powerbi.extensibility.ISelectionId;

import { VisualSettings } from "./settings";

import { valueFormatter } from "powerbi-visuals-utils-formattingutils";

export class Area {
    x_min: number;
    x_max: number;
    y_min: number;
    y_max: number;
    public constructor(x_min, x_max, y_min, y_max) {
        this.x_min = x_min;
        this.x_max = x_max;
        this.y_min = y_min;
        this.y_max = y_max;
    }
    public width(): number {
        return this.x_max - this.x_min;
    }
    public height(): number {
        return this.y_max - this.y_min;
    }
}

export class Label {

    content: string;
    font_size: string;
    font_family: string;

    class_name: string;

    private _container: any;
    private _width: number;
    private _height: number;

    public constructor(defaultSVGContainer: any, content: string, font_size: string, font_family: string) {
        this.content = content;
        this.font_size = font_size;
        this.font_family = font_family;

        this._container = defaultSVGContainer;

        // now set everything to null
        this.class_name = null;
        this._height = null;
        this._width = null;
    }

    public paint(class_name: string, container: any, x: number, y: number) {
        this._container = container;
        this.class_name = class_name;
        // now let's paint it
        this._container.append("text")
            .attr("y", y)
            .attr("x", x)
            .classed(this.class_name, true)
            .text(this.content)
            .style("font-size", this.font_size)
            .style("font-family", this.font_family);
    }

    public width() {
        const sample_class = "sampleText";
        if (this.class_name === null) {
            // draw this with a sample class then remove it
            this.paint(sample_class, this._container, 0, 0);
        }
        let tmp = this._container.select("." + this.class_name).node().getBBox().width;
        if (this.class_name === sample_class) {
            this.remove();
        }
        return tmp;
    }

    public height() {
        const sample_class = "sampleText";
        if (this.class_name === null) {
            // draw this with a sample class then remove it
            this.paint(sample_class, this._container, 0, 0);
        }
        let tmp = this._container.select("." + this.class_name).node().getBBox().height;
        if (this.class_name === sample_class) {
            this.remove();
        }
        return tmp;
    }

    public remove() {
        // unpaint it
        if (this.class_name !== null) {
            this._container.select("." + this.class_name).remove();
        }
        // now unset the attributes set when drawn
        this.class_name = null;
        this._height = null;
        this._width = null;
    }
}

export class BarDataTransform {
    public bars: BarData[];
    public statusMessage: string;
}

export class Field {
    public value: number;
    public format: string;
    public displayName: string;
    public displayUnits: number;

    public constructor(value: number, format: string, displayName: string, displayUnits?: number) {
        this.value = value;
        this.format = format;
        this.displayName = displayName;
        this.displayUnits = displayUnits ? displayUnits : 0;
    }

    public toString(withFormatting?: boolean, withDisplayUnits?: boolean, overrideBlankWithNumber?: number) {
        let valueToFormat = this.value;
        const displayUnits = withDisplayUnits ? this.displayUnits : 0;

        if (valueToFormat === null) {
            if (overrideBlankWithNumber !== null) {
                valueToFormat = overrideBlankWithNumber;
            } else {
                return "blank";
            }
        }

        if (withFormatting) {
            return valueFormatter.create({ format: this.format, value: displayUnits })
                .format(valueToFormat);
        }
        else {
            if (withDisplayUnits) {
                return valueFormatter.create({ value: displayUnits })
                    .format(valueToFormat);
            } else {
                return valueToFormat.toString();
            }
        }
    }
}

export class BarData {
    public category: string;
    public value: Field;
    public target: Field;
    public max: Field;

    public selectionId: any;

    public tooltipsData: Field[];

    public global_svg_ref: any;

    // status is generally used if the program throws an error
    public status_message: any;

    public constructor(category?: string) {
        this.value = new Field(null, "", "", 0);
        this.tooltipsData = [];
        this.target = null;
        this.max = null;
        this.category = category;
        this.status_message = null;
    }

    public largest() {
        let base: Field = null;
        if (this.value !== null) base = this.value;
        if (this.target !== null) {
            if (base === null) {
                base = this.target;
            } else {
                if (this.target.value !== null && base.value < this.target.value) {
                    base = this.target;
                }
            }
        }
        if (this.max !== null) {
            if (base === null) {
                base = this.max;
            } else {
                if (this.max.value !== null && base.value < this.max.value) {
                    base = this.max;
                }
            }
        }
        return base;
    }

    public gapBetweenValueAndTarget(): Field {
        const ff = new Field(this.target.value - this.value.value,
            this.value.format,
            "Gap - " + this.value.displayName + " & " + this.target.displayName);

        return ff;
    }

    public gapBetweenValueAndMax(): Field {
        const ff = new Field(this.max.value - this.value.value,
            this.value.format,
            "Gap - " + this.value.displayName + " & " + this.max.displayName);

        return ff;
    }
}

export class StatusColor {
    public barColor: string;
    public fontColor: string;
}

function visualTransform(options: VisualUpdateOptions, host: IVisualHost): BarDataTransform {
    /* Convert dataView to your viewModel*/
    const bdf = new BarDataTransform();

    const categorical_data = options.dataViews[0].categorical;

    // now set up my data
    // loop through the data set and set up a value mapping table
    const valueArray = [];
    const valueSets = options.dataViews[0].categorical.values;
    valueArray["tooltips"] = [];
    for (let i = 0; i < valueSets.length; i++) {
        let columnRole = valueSets[i].source.roles;
        if (columnRole["value"] === true) {
            valueArray["value"] = i;
        }
        if (columnRole["target"] === true) {
            valueArray["target"] = i;
        }
        if (columnRole["max"] === true) {
            valueArray["max"] = i;
        }
        if (columnRole["tooltips"] === true) {
            valueArray["tooltips"].push(i);
        }
    }

    if (valueArray["value"] === undefined) {
        bdf.bars = null;
        bdf.statusMessage = "The value field must be supplied";
        return bdf;
    }

    // collect the data
    // setup the bars
    const arrays_of_bars: BarData[] = [];
    let cats: any[] = null;
    if (categorical_data.categories === undefined) {
        arrays_of_bars.push(new BarData());
    }
    else {
        cats = categorical_data.categories[0].values;

        if (cats.length === 0) {
            arrays_of_bars.push(new BarData());
        } else {
            cats.forEach(function (cate, idx) {
                // okay let's setup a new bar data
                const bd = new BarData(cate.toString());
                // now assign the selection id
                bd.selectionId = host.createSelectionIdBuilder()
                    .withCategory(categorical_data.categories[0], idx)
                    .createSelectionId();
                arrays_of_bars.push(bd);
            });
        }
    }

    // okay so let's first handle the value
    if (valueArray["value"] !== undefined) {
        const valueColumn = valueSets[valueArray["value"]];
        for (let i = 0; i < valueColumn.values.length; i++) {
            let value = null;
            if (valueColumn.values[i] !== null) {
                let value_string = valueColumn.values[i].toString();
                value = Number(value_string);
            }
            arrays_of_bars[i].value = new Field(value,
                valueColumn.source.format,
                valueColumn.source.displayName);
        }
    }
    else {
        // set value to null for all of the bars
        for (let i = 0; i < arrays_of_bars.length; i++) {
            arrays_of_bars[i].value = null;
        }
    }

    // now let's handle the target column
    if (valueArray["target"] !== undefined) {
        let targetColumn = valueSets[valueArray["target"]];
        for (let i = 0; i < targetColumn.values.length; i++) {
            if (targetColumn.values[i] !== null) {
                const target_string = targetColumn.values[i].toString();
                arrays_of_bars[i].target = new Field(Number(target_string),
                    targetColumn.source.format,
                    targetColumn.source.displayName);
            }
        }
    }

    // finally the max column
    if (valueArray["max"] !== undefined) {
        let maxColumn = valueSets[valueArray["max"]];
        for (let i = 0; i < maxColumn.values.length; i++) {
            if (maxColumn.values[i] !== null) {
                let max_string = maxColumn.values[i].toString();
                arrays_of_bars[i].max = new Field(Number(max_string),
                    maxColumn.source.format,
                    maxColumn.source.displayName);
            }
        }
    }

    // now lastly the tooltips
    if (valueArray["tooltips"] !== undefined) {
        for (let i = 0; i < valueArray["tooltips"].length; i++) {
            let index = valueArray["tooltips"][i];
            let tooltipColumn = valueSets[index];
            for (let i = 0; i < tooltipColumn.values.length; i++) {
                let max = null;
                if (tooltipColumn.values[i] !== null) {
                    let max_string = tooltipColumn.values[i].toString();
                    max = Number(max_string);
                    arrays_of_bars[i].max = new Field(
                        max,
                        tooltipColumn.source.format,
                        tooltipColumn.source.displayName);
                }
            }
        }
    }

    // and now we can pass it on
    bdf.bars = arrays_of_bars;
    bdf.statusMessage = null;

    return bdf;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private settings: VisualSettings;

    private svg: any;
    private host: IVisualHost;
    private barsContainerElement: any;

    private overrideBlanksWithValue: number;
    private font_family: string = "'Segoe UI', 'wf_segoe-ui_normal', helvetica, arial, sans-serif;";

    private tooltipServiceWrapper: ITooltipServiceWrapper;
    private selectionManager: ISelectionManager;

    constructor(options: VisualConstructorOptions) {
        console.log('Visual constructor', options);
        this.target = options.element;
        this.host = options.host;

        this.selectionManager = options.host.createSelectionManager();

        this.tooltipServiceWrapper = createTooltipServiceWrapper(this.host.tooltipService, options.element);

        this.canvas_setup();
    }

    public update(options: VisualUpdateOptions) {
        this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
        this.canvas_clear();

        const svg_area = new Area(0, parseInt(this.svg.style("width")),
            0, parseInt(this.svg.style("height")));

        try {

            const transform = visualTransform(options, this.host);

            // now let's first add the header if they have requested it.
            if (this.settings.headerSettings.show === true) {
                const header_svg = this.svg.append("g").classed("headerTextG", true);
                const header_label = new Label(this.svg, this.settings.headerSettings.value, this.settings.headerSettings.fontSize + "px", this.font_family);
                let x = null;
                let y = null;
                switch (this.settings.headerSettings.position) {
                    case "left": svg_area.x_min = header_label.width() + this.settings.headerSettings.margin_between;
                        y = (svg_area.height() / 2) + (header_label.height() / 4);
                        header_label.paint("headerText", header_svg, 0, y);
                        break;
                    case "top": x = (svg_area.width() / 2) - (header_label.width() / 2);
                        header_label.paint("headerText", header_svg, x, header_label.height());
                        svg_area.y_min = header_label.height() + this.settings.headerSettings.margin_between;
                        break;
                    case "right": y = (svg_area.height() / 2) + (header_label.height() / 4);
                        header_label.paint("headerText", header_svg, svg_area.width() - header_label.width(), y);
                        svg_area.x_max = svg_area.x_max - header_label.width() - this.settings.headerSettings.margin_between;
                        break;
                    case "bottom": x = (svg_area.width() / 2) - (header_label.width() / 2);
                        header_label.paint("headerText", header_svg, x, svg_area.y_max - 5); // 5 for padding
                        svg_area.y_max = svg_area.height() - (header_label.height() + this.settings.headerSettings.margin_between);
                        break;
                    default:
                        throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                }
            }

            // now add the bars
            if (transform.bars === null) {
                // print out the error message
            }
            else {

                if (transform.bars.length > 1) {
                    // okay we need to determine the max
                    const maxFound = transform.bars.map(function (value: BarData) { return value.largest(); })
                        .reduce(function (cV: Field, pV: Field) {
                            return pV.value < cV.value ? cV : pV;
                        });
                    // now we need to draw the max and find the maximum height and width it could be
                    const max_text_string = maxFound.toString(true, true, this.overrideBlanksWithValue);
                    const max_text = new Label(this.svg, max_text_string, this.settings.textSettings.fontSize + "px", this.font_family);
                    const max_text_height = max_text.height();
                    const max_text_width = max_text.width();

                    // and now we need to work out the maximum category size
                    // just need to be careful because the category may not be set
                    const maxCategory = transform.bars.reduce(function (pV: BarData, cV: BarData) {
                        if (pV === null && cV === null) return null;
                        if (pV.category === null && cV.category === null) return null;
                        if ((pV === null || pV.category === null) && (cV !== null && cV.category !== null)) return (cV);
                        if ((cV === null || cV.category === null) && (pV !== null && pV.category !== null)) return (cV);
                        return pV.category.length < cV.category.length ? cV : pV;
                    });
                    let max_category_height = null;
                    let max_category_width = null;
                    if (maxCategory !== null) {
                        let max_category_label = new Label(this.svg, maxCategory.category, this.settings.sectionSettings.fontSize + "px", this.font_family);
                        max_category_height = max_category_label.height() + 5;
                        max_category_width = max_category_label.width() + 5;
                    }

                    // now let's handle drawing them
                    // we need to see if we can fit them in the space first
                    let one_visual_height = (max_text_height + this.settings.itemsSettings.minHeight);
                    let one_visual_width = (max_text_width * 2);
                    if (maxCategory !== null) {
                        switch (this.settings.sectionSettings.position) {
                            case "left": one_visual_width += max_category_width + this.settings.sectionSettings.margin_between;
                                break;
                            case "right": one_visual_width += max_category_width + this.settings.sectionSettings.margin_between;
                                break;
                            case "top": one_visual_height += max_category_height + this.settings.sectionSettings.margin_between;
                                one_visual_width = one_visual_width < max_category_width ? max_category_width : one_visual_width;
                                break;
                            case "bottom": one_visual_height += max_category_height + this.settings.sectionSettings.margin_between;
                                one_visual_width = one_visual_width < max_category_width ? max_category_width : one_visual_width;
                                break;
                            default:
                                throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                        }
                    }

                    const padding_total = (this.settings.itemsSettings.padding * (transform.bars.length - 1));

                    // now let's see
                    let min_height_needed = one_visual_height;
                    let min_width_needed = one_visual_width;
                    if (this.settings.itemsSettings.orientation === "vertical") {
                        min_height_needed = (one_visual_height * transform.bars.length) + padding_total;
                    }
                    else {
                        min_width_needed = (one_visual_width * transform.bars.length) + padding_total;
                    }

                    // now we're going to either try and squeeze it in or just make it overflow if the minimum does not meet

                    let master_height_of_visual = min_height_needed < svg_area.height() ? svg_area.height() : min_height_needed;
                    let master_width_of_visual = min_width_needed < svg_area.width() ? svg_area.width() : min_width_needed;

                    if (this.settings.itemsSettings.orientation === "vertical") {
                        master_height_of_visual = (master_height_of_visual - padding_total) / transform.bars.length;
                    } else {
                        master_width_of_visual = (master_width_of_visual - padding_total) / transform.bars.length;
                    }

                    // now do the others with padding
                    for (let i = 0; i < transform.bars.length; i++) {
                        const barData = transform.bars[i];
                        let x_min = svg_area.x_min;
                        let y_min = svg_area.y_min;
                        if (this.settings.itemsSettings.orientation === "vertical") {
                            y_min = svg_area.y_min + (this.settings.itemsSettings.padding * i) + (master_height_of_visual * i);
                        }
                        else {
                            x_min = svg_area.x_min + (this.settings.itemsSettings.padding * i) + (master_width_of_visual * i);
                        }
                        // okay now let's start drawing
                        const barElement = this.barsContainerElement.append("g").classed("barVisual", true);
                        const square = new Area(
                            x_min,
                            x_min + master_width_of_visual,
                            y_min,
                            y_min + master_height_of_visual
                        );
                        // firstly set up the area that we're going to put the data label on
                        // secondly draw the category label and adjust the bar visual
                        if (barData.category !== null) {
                            const category_label = new Label(barElement, barData.category, this.settings.sectionSettings.fontSize + "px", this.font_family);
                            let cat_x = null;
                            let cat_y = null;
                            // now we need to adjust the actual visual based on the position
                            switch (this.settings.sectionSettings.position) {
                                case "left": cat_y = (square.y_min + (square.height() / 2));
                                    category_label.paint("categoryText", barElement, square.x_min, cat_y);
                                    square.x_min = square.x_min + max_category_width + this.settings.sectionSettings.margin_between;
                                    break;
                                case "top": cat_x = (square.x_min + (square.width() / 2)) - (max_category_width / 2);
                                    cat_y = square.y_min + max_category_height;
                                    category_label.paint("categoryText", barElement, cat_x, cat_y);
                                    square.y_min = square.y_min + max_category_height + this.settings.sectionSettings.margin_between;
                                    break;
                                case "right": cat_x = square.x_max - max_category_width;
                                    cat_y = (square.y_min + (square.height() / 2));
                                    category_label.paint("categoryText", barElement, cat_x, cat_y);
                                    square.x_max = square.x_max - max_category_width - this.settings.sectionSettings.margin_between;
                                    break;
                                case "bottom": cat_x = (square.x_min + (square.width() / 2)) - (max_category_width / 2);
                                    cat_y = square.y_max - max_category_height;
                                    category_label.paint("categoryText", barElement, cat_x, cat_y);
                                    square.y_max = square.y_max - max_category_height - this.settings.sectionSettings.margin_between;
                                    break;
                                default:
                                    throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                            }
                            // global svg reference for use in the on click for transperency
                            barData.global_svg_ref = this.svg;
                            // now color the text based on what the user chose
                            barElement.select(".categoryText").style("fill", this.settings.sectionSettings.fontColor);
                        }
                        // lastly draw the bar visual
                        this.add_one_data_bar(barElement, square, barData);
                    }

                }
                else {
                    // set up the main visual
                    const barData = transform.bars[0];

                    const barElement = this.barsContainerElement.append("g").classed("barVisual", true);

                    const square = svg_area;
                    if (barData.category !== null) {
                        const category_label = new Label(barElement, barData.category, this.settings.sectionSettings.fontSize + "px", this.font_family);
                        let cat_x = null;
                        let cat_y = null;
                        // now we need to adjust the actual visual based on the position
                        switch (this.settings.sectionSettings.position) {
                            case "left": cat_y = (square.y_min + (square.height() / 2));
                                category_label.paint("categoryText", barElement, square.x_min, cat_y);
                                square.x_min = square.x_min + category_label.width() + this.settings.sectionSettings.margin_between;
                                break;
                            case "top": cat_x = (square.x_min + (square.width() / 2)) - (category_label.width() / 2);
                                cat_y = square.y_min + category_label.height();
                                category_label.paint("categoryText", barElement, cat_x, cat_y);
                                square.y_min = square.y_min + category_label.height() + this.settings.sectionSettings.margin_between;
                                break;
                            case "right": cat_x = square.x_max - category_label.width();
                                cat_y = (square.y_min + (square.height() / 2));
                                category_label.paint("categoryText", barElement, cat_x, cat_y);
                                square.x_max = square.x_max - category_label.width() - this.settings.sectionSettings.margin_between;
                                break;
                            case "bottom": cat_x = (square.x_min + (square.width() / 2)) - (category_label.width() / 2);
                                cat_y = square.y_max - category_label.height();
                                category_label.paint("categoryText", barElement, cat_x, cat_y);
                                square.y_max = square.y_max - category_label.height() - this.settings.sectionSettings.margin_between;
                                break;
                            default:
                                throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                        }
                        // now color the text based on what the user chose
                        barElement.select(".categoryText").style("fill", this.settings.sectionSettings.fontColor);
                    }

                    this.add_one_data_bar(barElement, square, barData);
                }
            }
        }
        catch (e) {
            // in the circumstance of an error just draw a blank one
            const barData = new BarData();
            barData.status_message = e.message;
            const barElement = this.barsContainerElement.append("g").classed("barVisual", true);
            this.add_one_data_bar(barElement, svg_area, barData);
            // now add the tooltip error message
            this.tooltipServiceWrapper.addTooltip(
                barElement,
                (tooltipEvent: TooltipEventArgs<number>) => Visual.getToolTipDataError(tooltipEvent.data, this.settings),
                (tooltipEvent: TooltipEventArgs<number>) => null);
        }
    }

    private add_one_data_bar(container: any, area: Area, data: BarData) {
        // Let's derive some of the sizing
        // set the bar area to take up 100% of the space
        const bar_area = area;

        const margin_between_bar_and_text = 2;

        // attach the data to the visual element so that it can be used in the tooltip
        container.data([data]);

        // now we need to check if all values are blank we just need to show a blank bar
        if ((data.value === null || data.value.value === null) && (data.target === null || data.target.value === null) && (data.max === null || data.max.value === null)) {
            // okay set up the blank label
            const text_y_location_2 = bar_area.y_max;
            const label = new Label(container, "blank", this.settings.textSettings.fontSize + "px", this.font_family);
            label.paint("valueTxt", container, bar_area.x_min + 3, text_y_location_2);
            bar_area.y_max = (bar_area.y_max - margin_between_bar_and_text) - label.height();
            // now draw the bar
            const mainBarFill_2 = this.settings.colorSettings.defaultColorNoTargetFill;
            container.select(".mabar")
                .attr("width", bar_area.width())
                .attr("fill", mainBarFill_2)
                .attr("stroke", this.settings.outerBarSettings.outlineColor)
                .attr("height", bar_area.height())
                .attr("x", bar_area.x_min)
                .attr("y", bar_area.y_min);
            // and finish
        }
        else {
            // now we can draw the actual visual
            if (this.settings.textSettings.treatBlanksAsZeros === true) {
                this.overrideBlanksWithValue = 0;
            } else {
                this.overrideBlanksWithValue = null;
            }

            // add the display units from settings
            const tS = this.settings.textSettings;
            data.value.displayUnits = tS.displayUnitsForValue !== 0 ? tS.displayUnitsForValue : tS.displayUnits;
            if (data.max !== null) {
                data.max.displayUnits = tS.displayUnitsForMax !== 0 ? tS.displayUnitsForMax : tS.displayUnits;
            }

            for (let i = 0; i < data.tooltipsData.length; i++) {
                data.tooltipsData[i].displayUnits = this.settings.textSettings.displayUnits;
            }

            let position_percent_bar_in_percent = 0;
            let position_dashed_line_in_percent = 0;

            // first we need to determine how much to fill the bar and where the dashed
            // line should be positioned
            if (data.target === null) {
                position_dashed_line_in_percent = 0;
                position_percent_bar_in_percent = data.max === null ? 0 : (data.value.value / data.max.value) * 100;
            }
            else {
                if (data.max === null) {
                    // so we have a target and a value but no max
                    position_percent_bar_in_percent = (data.value.value / (data.target.value * 2)) * 100;
                    position_dashed_line_in_percent = 50;
                }
                else {
                    // we have a target and a max
                    position_percent_bar_in_percent = (data.value.value / data.max.value) * 100;
                    position_dashed_line_in_percent = (data.target.value / data.max.value) * 100;
                }
            }

            // we need to derive the status bar color
            const stColor = this.derive_status_color(data.value, data.target, data.max);

            const margin_between_bar_and_text = 2;

            if (this.settings.textSettings.position !== "onbar") {

                let text_y_location = null;
                switch (this.settings.textSettings.position) {
                    case "below": text_y_location = bar_area.y_max - margin_between_bar_and_text; break;
                }

                if (this.settings.textSettings.showValueText === true) {
                    // get the formatted value string
                    this.add_text(container, "valueTxt", this.settings.textSettings.fontSize, text_y_location, data.value, stColor.barColor)
                        .attr("x", bar_area.x_min + 3);
                }

                if (data.max !== null && this.settings.textSettings.showMaxText === true) {
                    this.add_text(container, "goalTxt", this.settings.textSettings.fontSize, text_y_location, data.max, "#000000")
                        .attr("x", bar_area.x_max - container.select(".goalTxt").node().getBBox().width);
                }

                // now do the bar placement

                // derive the bar attributes using the overall text height
                const goal_txt_height = this.settings.textSettings.showMaxText === false || data.max === null ? 0 : container.select(".goalTxt").node().getBBox().height;
                const value_txt_height = this.settings.textSettings.showValueText === false || data.value === null ? 0 : container.select(".valueTxt").node().getBBox().height;
                const max_txt_height = goal_txt_height > value_txt_height ? goal_txt_height : value_txt_height;

                switch (this.settings.textSettings.position) {
                    case "below": bar_area.y_max = (bar_area.y_max - margin_between_bar_and_text) - max_txt_height;
                        break;
                }

            }

            // okay now make the dashed line area and readjust the bar's area
            const dashed_line_area = new Area(bar_area.x_min, bar_area.x_max,
                bar_area.y_min, bar_area.y_max);

            const margin = (dashed_line_area.height() * 0.15);
            bar_area.y_min += margin;
            bar_area.y_max -= margin;

            if (data.target === null && data.max === null) {
                // just draw the main bar as we just want to show the value
                container.append("rect")
                    .classed("mabar", true);
            }
            else {
                // draw the complete visual

                container.append("rect")
                    .classed("mabar", true);

                container.append("rect")
                    .classed("pebar", true)
                    .attr("x", bar_area.x_min)
                    .attr("y", bar_area.y_min)
                    .attr("height", bar_area.height())
                    .attr("fill", stColor.barColor)
                    .attr("width", bar_area.width() * (position_percent_bar_in_percent / 100));

            }

            let mainBarFill = null;
            if ((data.target === null && data.max === null) && this.settings.outerBarSettings.fillWhenNoTarget) {
                mainBarFill = this.settings.colorSettings.defaultColorNoTargetFill;
            } else {
                mainBarFill = this.settings.outerBarSettings.fill;
            }

            // add the extra styling to the main outer bar
            container.select(".mabar")
                .attr("width", bar_area.width())
                .attr("fill", mainBarFill)
                .attr("stroke", this.settings.outerBarSettings.outlineColor)
                .attr("height", bar_area.height())
                .attr("x", bar_area.x_min)
                .attr("y", bar_area.y_min);

            // now if a target was specified we need to draw the dashed line
            if (data.target !== null) {
                // determine where the dashed line should end
                const x = bar_area.x_min + (bar_area.width() * (position_dashed_line_in_percent / 100));
                container.append("line")
                    .classed("tline", true)
                    .attr("y1", dashed_line_area.y_min)
                    .attr("x1", x)
                    .attr("x2", x)
                    .attr("y2", dashed_line_area.y_max)
                    .style("stroke", this.settings.targetLineSettings.color)
                    .style("stroke-width", this.settings.targetLineSettings.strokeWidth);

                if (this.settings.targetLineSettings.lineStyle === "dashed") {
                    container.select(".tline").style("stroke-dasharray", "2,2");
                }
            }

            // if the data labels were set to onbar we draw them last
            if (this.settings.textSettings.position === "onbar") {
                if (this.settings.textSettings.showValueText === true) {
                    const yOffset = (bar_area.y_min + (bar_area.height() / 2));
                    // get the formatted value string
                    this.add_text(container, "valueTxt", this.settings.textSettings.fontSize, 0, data.value, "#000000")
                        .attr("x", bar_area.x_min + 3)
                        .attr("y", yOffset + (container.select(".valueTxt").node().getBBox().height / 4));
                }

                if (data.max !== null && this.settings.textSettings.showMaxText === true) {
                    const yOffSet = (bar_area.y_min + (bar_area.height() / 2));
                    this.add_text(container, "goalTxt", this.settings.textSettings.fontSize, 0, data.max, "#000000")
                        .attr("x", bar_area.x_max - container.select(".goalTxt").node().getBBox().width)
                        .attr("y", yOffSet + (container.select(".goalTxt").node().getBBox().height / 4))
                        .style("stroke");
                }
            }

            let selectionManager = this.selectionManager;

            container.on('click', function (d: BarData) {
                selectionManager.select(d.selectionId).then((ids: ISelectionId[]) => {
                    d.global_svg_ref.selectAll(".pebar")
                        .attr("fill-opacity", ids.length > 0 ? 0.2 : 1);
                    d3.select(this).select(".pebar").attr("fill-opacity", 1);
                });

                (<Event>d3.event).stopPropagation();
            });

            this.tooltipServiceWrapper.addTooltip(
                container,
                (tooltipEvent: TooltipEventArgs<number>) => Visual.getToolTipDataForBar(tooltipEvent.data, this.settings),
                (tooltipEvent: TooltipEventArgs<number>) => null);
        }


    }

    private add_text(element: any, cssClass: string, fontSize: number, yPos: number, field: Field, fill: string) {
        const tmp = element.append("text")
            .attr("y", yPos)
            .classed(cssClass, true)
            .text(field.toString(true, true, this.overrideBlanksWithValue))
            .style("font-size", fontSize + "px")
            .style("font-family", this.font_family)
            .style("fill", fill);
        return (tmp);
    }

    private derive_status_color(value, target?, max?): StatusColor {
        const stColor = new StatusColor();

        if (value.value === null || value.value === undefined) {
            return {
                barColor: this.settings.colorSettings.defaultColorNoTargetFill,
                fontColor: this.settings.colorSettings.defaultColorNoTargetText
            };
        }

        if (target !== null) {
            if (value.value > target.value) {
                stColor.barColor = this.settings.colorSettings.greaterThanColor;
                stColor.fontColor = this.settings.colorSettings.greaterThanColor;
            }
            else if (value.value < target.value) {
                stColor.barColor = this.settings.colorSettings.lessThanColor;
                stColor.fontColor = this.settings.colorSettings.lessThanColor;
            }
            else {
                stColor.barColor = this.settings.colorSettings.equalToColor;
                stColor.fontColor = this.settings.colorSettings.equalToColor;
            }
        } else {
            if (max !== null) {
                if (value.value > max.value) {
                    stColor.barColor = this.settings.colorSettings.greaterThanColor;
                    stColor.fontColor = this.settings.colorSettings.greaterThanColor;
                }
                else if (value.value < max.value) {
                    stColor.barColor = this.settings.colorSettings.lessThanColor;
                    stColor.fontColor = this.settings.colorSettings.lessThanColor;
                }
                else {
                    stColor.barColor = this.settings.colorSettings.equalToColor;
                    stColor.fontColor = this.settings.colorSettings.equalToColor;
                }
            }
        }

        if (target === null && max === null) {
            stColor.barColor = this.settings.colorSettings.defaultColorNoTargetFill;
            stColor.fontColor = this.settings.colorSettings.defaultColorNoTargetText;
        }

        return stColor;
    }

    private canvas_setup() {

        const container = d3.select(this.target);

        this.svg = container.append("svg")
            .attr("width", "100%")
            .attr("height", "100%");

        this.barsContainerElement = this.svg.append("g").classed("bars_container", true);

    }

    private canvas_clear() {
        this.barsContainerElement.selectAll(".barVisual").remove();
        this.svg.selectAll(".headerTextG").remove();
    }

    private static parseSettings(dataView: DataView): VisualSettings {
        return VisualSettings.parse(dataView) as VisualSettings;
    }

    /**
     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
     * objects and properties you want to expose to the users in the property pane.
     *
     */
    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
    }

    public static getToolTipDataError(dataNonCasted: any, settings: VisualSettings): VisualTooltipDataItem[] {
        const data: BarData = dataNonCasted;
        const tooltipDataFieldList = [{ displayName: "status", value: data.status_message }];
        return tooltipDataFieldList;
    }

    public static getToolTipDataForBar(dataNonCasted: any, settings: VisualSettings): VisualTooltipDataItem[] {
        const useDisplayUnits = !settings.textSettings.ignoreFormattingForTooltips;
        const data: BarData = dataNonCasted;
        const overrideBlanksWithValue = settings.textSettings.treatBlanksAsZeros === true ? 0 : null;

        if (data !== null) {

            const toolTipDataBegin = [data.value];
            if (data.target !== null) { toolTipDataBegin.push(data.target); }
            if (data.max !== null) { toolTipDataBegin.push(data.max); }


            const tooltipDataFieldList = toolTipDataBegin.map(function (f) {
                return { displayName: f.displayName, value: f.toString(true, useDisplayUnits, overrideBlanksWithValue) };
            });

            const percentageFormatter = valueFormatter.create({ format: "0.00 %;-0.00 %;0.00 %", value: 1, allowFormatBeautification: true });

            if (data.target !== null) {
                let formattedGapValueTarget = "";

                const gapTargetField = data.gapBetweenValueAndTarget();
                gapTargetField.displayUnits = useDisplayUnits ? settings.textSettings.displayUnits : 0;

                gapTargetField.value = settings.textSettings.repPositiveGapAsNegativeNumber === true ? gapTargetField.value * -1 : gapTargetField.value;

                formattedGapValueTarget = gapTargetField.toString(true, useDisplayUnits, overrideBlanksWithValue);

                if (settings.textSettings.showPercentagesOnGaps === true) {
                    const formattedPercent = percentageFormatter.format(Math.abs(gapTargetField.value) / data.target.value);
                    formattedGapValueTarget += "(" + formattedPercent + ")";
                }

                tooltipDataFieldList.push(
                    {
                        displayName: gapTargetField.displayName,
                        value: formattedGapValueTarget
                    }
                );

            }

            if (data.max !== null) {
                let formattedGapValueMax = "";

                const gapMaxField = data.gapBetweenValueAndMax();
                gapMaxField.displayUnits = useDisplayUnits ? settings.textSettings.displayUnits : 0;

                gapMaxField.value = settings.textSettings.repPositiveGapAsNegativeNumber === true ? gapMaxField.value * -1 : gapMaxField.value;

                formattedGapValueMax = gapMaxField.toString(true, useDisplayUnits, overrideBlanksWithValue);

                if (settings.textSettings.showPercentagesOnGaps === true) {
                    const formattedPercent = percentageFormatter.format(Math.abs(gapMaxField.value) / data.max.value);
                    formattedGapValueMax += "(" + formattedPercent + ")";
                }

                tooltipDataFieldList.push(
                    {
                        displayName: gapMaxField.displayName,
                        value: formattedGapValueMax
                    }
                );
            }

            // now let's push the tooltips
            for (let i = 0; i < data.tooltipsData.length; i++) {
                const ttData = data.tooltipsData[i];
                tooltipDataFieldList.push(
                    {
                        displayName: ttData.displayName,
                        value: ttData.toString(true, useDisplayUnits, overrideBlanksWithValue)
                    }
                );
            }

            // now return the tooltip data
            return tooltipDataFieldList;
        } else {
            return null;
        }
    }
}