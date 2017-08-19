/// <reference path="D3Utility.ts" />

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

module powerbi.extensibility.visual.databarKPIB8060E2B144244C5A38807466893C9F5  {
    "use strict";

    import tooltip = powerbi.extensibility.utils.tooltip;
    import IValueFormatter = powerbi.extensibility.utils.formatting.IValueFormatter;
    import TooltipEventArgs = powerbi.extensibility.utils.tooltip.TooltipEventArgs;
    import ValueFormatter = powerbi.extensibility.utils.formatting.valueFormatter;

    export class BarDataTransform {
        public bars: BarData[];
        public statusMessage: string;
    }

    export class Field {
        public value: number;
        public format: string;
        public displayName: string;
        public displayUnits: number;

        public constructor(value: number, format:string, displayName: string, displayUnits? : number) {
            this.value = value;
            this.format = format;
            this.displayName = displayName;
            this.displayUnits = displayUnits ? displayUnits : 0;
        }

        public toString(withFormatting?: boolean, withDisplayUnits?: boolean, overrideBlankWithNumber?: number) {
            var valueToFormat = this.value;
            var displayUnits = withDisplayUnits ? this.displayUnits : 0; 

            if(valueToFormat == null) {
                if (overrideBlankWithNumber != null) {
                    valueToFormat = overrideBlankWithNumber;
                } else {
                    return "blank"   
                }                
            }            
                       
            if (withFormatting) {
                return ValueFormatter.create({ format: this.format, value: displayUnits })
                                     .format(valueToFormat)    
            }
            else {
                if (withDisplayUnits) {
                    return ValueFormatter.create({ value: displayUnits })
                                     .format(valueToFormat)    
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

        public tooltipsData : Field[];

        public constructor(category?: string) {
            this.value = new Field(null, "", "", 0);
            this.tooltipsData = [];
            this.target = null;
            this.max = null;
            this.category = category;
        }

        public largest() {
            var base: Field = null;
            if (this.value != null) base = this.value;
            if (this.target != null) {
                if (base == null) {
                    base = this.target;
                } else {
                    if (this.target.value != null && base.value < this.target.value) {
                        base = this.target;
                    }
                }
            }
            if (this.max != null) {
                if (base == null) {
                    base = this.max;
                } else {
                    if (this.max.value != null && base.value < this.max.value) {
                        base = this.max;
                    }
                }
            }
            return base;
        }

        public gapBetweenValueAndTarget(): Field {
            var ff = new Field(this.target.value - this.value.value, 
                               this.value.format,
                               "Gap - " + this.value.displayName + " & " + this.target.displayName)

            return ff;
        }

        public gapBetweenValueAndMax(): Field {
            var ff = new Field(this.max.value - this.value.value, 
                               this.value.format,
                               "Gap - " + this.value.displayName + " & " + this.max.displayName)

            return ff;
        }
    }

    

    export class StatusColor {
        public barColor: string;
        public fontColor: string;
    }

    /**
     * Function that converts queried data into a view model that will be used by the visual
     *
     * @function
     * @param {VisualUpdateOptions} options - Contains references to the size of the container
     *                                        and the dataView which contains all the data
     *                                        the visual had queried.
     * @param {IVisualHost} host            - Contains references to the host which contains services
     */
    function visualTransform(options: VisualUpdateOptions, host: IVisualHost): BarDataTransform {
        /*Convert dataView to your viewModel*/
        var bdf = new BarDataTransform();

        var categorical_data = options.dataViews[0].categorical;

        //now set up my data
        //loop through the data set and set up a value mapping table
        var valueArray = []
        var valueSets = options.dataViews[0].categorical.values;
        valueArray["tooltips"] = [];
        for (var i = 0; i < valueSets.length; i++) {
            var columnRole = valueSets[i].source.roles;
            if (columnRole["value"] == true) {
                valueArray["value"] = i;
            }
            if (columnRole["target"] == true) {
                valueArray["target"] = i;
            }
            if (columnRole["max"] == true) {
                valueArray["max"] = i;
            }
            if (columnRole["tooltips"] == true) {
                valueArray["tooltips"].push(i)
            }
        }   
        
        if (valueArray["value"] == undefined) {
            bdf.bars = null;
            bdf.statusMessage = "The value field must be supplied";
            return bdf;
        } 

        //collect the data
        //setup the bars
        
        var arrays_of_bars: BarData[] = [];
        var cats: PrimitiveValue[] = null;
        if (categorical_data.categories == null) {
            arrays_of_bars.push(new BarData());
        } 
        else {
            cats = categorical_data.categories[0].values;

            if (cats.length == 0) {
                arrays_of_bars.push(new BarData());
            } else {
                cats.forEach(function(cate) { arrays_of_bars.push(new BarData(cate.toString())); });
            }
        }
        
        // okay so let's first handle the value
        if (valueArray["value"] != undefined) {
            var valueColumn = valueSets[valueArray["value"]];
            for(var i = 0; i < valueColumn.values.length; i++) {
                var value = null;
                if (valueColumn.values[i] != null) {
                    var value_string = valueColumn.values[i].toString();
                    value = Number(value_string)
                }
                var category = cats != null ? cats[i] : null;
                arrays_of_bars[i].value = new Field(value,
                                                    valueColumn.source.format,
                                                    valueColumn.source.displayName);
            }
        } 
        else {
            //set value to null for all of the bars
            for (var i = 0; i < arrays_of_bars.length; i++) {
                arrays_of_bars[i].value = null;
            }
        }

        //now let's handle the target column
        if (valueArray["target"] != undefined) {
            var targetColumn = valueSets[valueArray["target"]];
            for(var i = 0; i < targetColumn.values.length; i++) {
                var target = null;
                if (targetColumn.values[i] != null) {
                    var target_string = targetColumn.values[i].toString();
                    var category = cats != null ? cats[i] : null;
                    arrays_of_bars[i].target = new Field(Number(target_string),
                                                    targetColumn.source.format,
                                                    targetColumn.source.displayName);
                }                
            }
        }

        //finally the max column
        if (valueArray["max"] != undefined) {
            var maxColumn = valueSets[valueArray["max"]];
            for(var i = 0; i < maxColumn.values.length; i++) {
                var max = null;
                if (maxColumn.values[i] != null) {
                    var max_string = maxColumn.values[i].toString();
                    var category = cats != null ? cats[i] : null;
                    arrays_of_bars[i].max = new Field(Number(max_string),
                                                      maxColumn.source.format,
                                                      maxColumn.source.displayName);
                }                
            }
        }

        //now lastly the tooltips
        if (valueArray["tooltips"] != undefined) {
            for(var i = 0; i < valueArray["tooltips"].length; i++) {
                var index = valueArray["tooltips"][i];
                var tooltipColumn = valueSets[index];
                for(var i = 0; i < tooltipColumn.values.length; i++) {
                    var max = null;
                    if (tooltipColumn.values[i] != null) {
                        var max_string = tooltipColumn.values[i].toString();
                        max = Number(max_string)
                        var category = cats != null ? cats[i] : null;
                        arrays_of_bars[i].max = new Field(
                                                    max,
                                                    tooltipColumn.source.format,
                                                    tooltipColumn.source.displayName);
                    }                
                }
            }            
        }

        //and now we can pass it on        
        bdf.bars = arrays_of_bars;
        bdf.statusMessage = null;

        return bdf;
    }

    export class databarvisual implements IVisual {
        private target: HTMLElement;
        private settings: VisualSettings;

        private overrideBlanksWithValue: number;

        //svg elements
        private host: IVisualHost;
        private barsContainerElement;
        private svg: d3.Selection<any>;

        private font_family:string = "'Segoe UI', 'wf_segoe-ui_normal', helvetica, arial, sans-serif;";

        private selectionManager : ISelectionManager;

        private tooltipServiceWrapper: tooltip.ITooltipServiceWrapper;

        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
            this.target = options.element;
            this.host = options.host;
            this.selectionManager = options.host.createSelectionManager();

            this.tooltipServiceWrapper = tooltip.createTooltipServiceWrapper(
                                                options.host.tooltipService,
                                                options.element);
            
            this.canvas_setup();

        }

        public update(options: VisualUpdateOptions) {
            this.settings =  databarvisual.parseSettings(options && options.dataViews && options.dataViews[0]);
            console.log('Visual update', options);
           
            this.canvas_clear();
            
            var transform = visualTransform(options,this.host);

            if (transform.bars == null) {
                //print out the error message
            }        
            else {  
                
                if (transform.bars.length > 1) {
                    //okay we need to determine the max
                    var maxFound = transform.bars.map(function(value: BarData) { return value.largest(); })
                                                 .reduce(function(cV: Field, pV: Field) {
                                                    return pV.value < cV.value ? cV : pV;
                                                 });
                    //now we need to draw the max and find the maximum height and width it could be
                    var max_text_string = maxFound.toString(true, true, this.overrideBlanksWithValue);
                    var max_text = new Label(this.svg, max_text_string, this.settings.textSettings.fontSize + "px", this.font_family);
                    var max_text_height = max_text.height();
                    var max_text_width = max_text.width();
                    
                    //and now we need to work out the maximum category size
                    //just need to be careful because the category may not be set
                    var maxCategory = transform.bars.reduce(function(pV:BarData, cV:BarData) {
                        if (pV == null && cV == null) return null;
                        if (pV.category == null && cV.category == null) return null;
                        if ((pV == null || pV.category == null) && (cV != null && cV.category != null)) return(cV);
                        if ((cV == null || cV.category == null) && (pV != null && pV.category != null)) return(cV);
                        return pV.category.length < cV.category.length ? cV : pV;
                    })
                    var max_category_height = null;
                    var max_category_width = null;
                    if (maxCategory != null) {
                        var max_category_label = new Label(this.svg, maxCategory.category, this.settings.headerSettings.fontSize + "px", this.font_family);
                        max_category_height = max_category_label.height();
                        max_category_width = max_category_label.width();
                    }

                    //now let's handle drawing them
                    //we need to see if we can fit them in the space first
                    var one_visual_height = (max_text_height + this.settings.itemsSettings.minHeight);
                    var one_visual_width = (max_text_width * 2);
                    var min_height_needed = one_visual_height;
                    var min_width_needed = one_visual_width;
                    var padding_total = (this.settings.itemsSettings.padding * (transform.bars.length - 1));
                    
                    if (this.settings.itemsSettings.orientation == "vertical") {
                        min_height_needed = (one_visual_height * transform.bars.length) + padding_total;
                    } 
                    else {
                        min_width_needed = (one_visual_width * transform.bars.length) + padding_total;
                    }
                    
                    //now we're going to either try and squeeze it in or just make it overflow if the minimum does not meet
                    var svgWidth = parseInt(this.svg.style("width"));
                    var svgHeight = parseInt(this.svg.style("height"));
                    
                    var master_height_of_visual = min_height_needed < svgHeight ? svgHeight : min_height_needed;
                    var master_width_of_visual = min_width_needed < svgWidth ? svgWidth : min_width_needed;
                    
                    if (this.settings.itemsSettings.orientation == "vertical") {
                        master_height_of_visual = (master_height_of_visual - padding_total) / transform.bars.length;
                    } else {
                        master_width_of_visual = (master_width_of_visual - padding_total) / transform.bars.length;
                    }

                    //now do the others with padding
                    for (var i = 0; i < transform.bars.length; i++) {
                        var barData = transform.bars[i];
                        var x_min = 0;
                        var y_min = 0;
                        if (this.settings.itemsSettings.orientation == "vertical") {
                            y_min = (this.settings.itemsSettings.padding * i) + (master_height_of_visual * i);
                        } 
                        else {
                            x_min = (this.settings.itemsSettings.padding * i) + (master_width_of_visual * i);
                        }                        
                        var square = new Area(
                            x_min,
                            x_min + master_width_of_visual,
                            y_min,
                            y_min + master_height_of_visual                            
                        );
                        var barElement = this.barsContainerElement.append("g").classed("barVisual", true);
                        
                        this.add_one_data_bar(barElement, square, barData);
                    }

                }
                else {
                    //set up the main visual
                    var barData = transform.bars[0];
                    var barElement = this.barsContainerElement.append("g").classed("barVisual", true);
                    var SquareArea = new Area(0, parseInt(this.svg.style("width")), 0, parseInt(this.svg.style("height")));
                    
                    this.add_one_data_bar(barElement, SquareArea, barData); 
                }  
            }
        }

        public static getToolTipDataForBar(dataNonCasted: any, settings :VisualSettings) : VisualTooltipDataItem[] {
            var useDisplayUnits = !settings.textSettings.ignoreFormattingForTooltips;
            var data:BarData = dataNonCasted;
            var overrideBlanksWithValue = settings.textSettings.treatBlanksAsZeros == true ? 0 : null;
            
            if (data != null) {

                var toolTipDataBegin = [data.value];
                if (data.target != null) { toolTipDataBegin.push(data.target); }
                if (data.max != null) { toolTipDataBegin.push(data.max); }
                

                var tooltipDataFieldList = toolTipDataBegin.map(function(f) {
                    return { displayName: f.displayName, value: f.toString(true,useDisplayUnits, overrideBlanksWithValue) }
                })

                var percentageFormatter = ValueFormatter.create({ format: "0.00 %;-0.00 %;0.00 %", value: 1, allowFormatBeautification: true });

                if (data.target != null) {
                    var formattedGapValueTarget = "";

                    var gapTargetField = data.gapBetweenValueAndTarget();
                    gapTargetField.displayUnits = useDisplayUnits ? settings.textSettings.displayUnits : 0;
                    
                    gapTargetField.value = settings.textSettings.repPositiveGapAsNegativeNumber == true ? gapTargetField.value * -1 : gapTargetField.value;

                    formattedGapValueTarget = gapTargetField.toString(true, useDisplayUnits, overrideBlanksWithValue);

                    if (settings.textSettings.showPercentagesOnGaps == true) {
                        var formattedPercent = percentageFormatter.format(Math.abs(gapTargetField.value) / data.target.value)
                        formattedGapValueTarget += "(" + formattedPercent + ")";
                    }

                    tooltipDataFieldList.push(
                        {
                            displayName: gapTargetField.displayName,
                            value: formattedGapValueTarget
                        }
                    );

                }
                
                if (data.max != null) {
                    var formattedGapValueMax = "";

                    var gapMaxField = data.gapBetweenValueAndMax();
                    gapMaxField.displayUnits = useDisplayUnits ? settings.textSettings.displayUnits : 0;

                    gapMaxField.value = settings.textSettings.repPositiveGapAsNegativeNumber == true ? gapMaxField.value * -1 : gapMaxField.value;

                    formattedGapValueMax = gapMaxField.toString(true, useDisplayUnits, overrideBlanksWithValue);

                    if (settings.textSettings.showPercentagesOnGaps == true) {
                        var formattedPercent = percentageFormatter.format(Math.abs(gapMaxField.value) / data.max.value)
                        formattedGapValueMax += "(" + formattedPercent + ")";
                    }

                    tooltipDataFieldList.push(
                        {
                            displayName: gapMaxField.displayName,
                            value: formattedGapValueMax
                        }
                    );
                }

                //now let's push the tooltips
                for (var i = 0; i < data.tooltipsData.length; i++) {
                    var ttData = data.tooltipsData[i];
                    tooltipDataFieldList.push(
                        {
                            displayName: ttData.displayName,
                            value: ttData.toString(true, useDisplayUnits, overrideBlanksWithValue)
                        }
                    )
                }

                //now return the tooltip data
                return tooltipDataFieldList;
            } else {
                return null;
            }
        }

        /** Draws a single data bar within the area passed in to the function for the data passed in. */
        private add_one_data_bar(container : any, area : Area, data: BarData) {
            //Let's derive some of the sizing
            //set the bar area to take up 100% of the space
            var bar_area = area;
            
            //attach the data to the visual element so that it can be used in the tooltip
            container.data([data]);

            if (data.category != null) {
                var margin_between_items = this.settings.headerSettings.margin_between;
                var font_size = this.settings.headerSettings.fontSize;  

                var header = new Label(container, data.category, font_size + "px", this.font_family);

                //now position it taking in the position that was set in settings
                var position = this.settings.headerSettings.position;
                var headerArea = this.position_category_label(position, header.width(), header.height(), bar_area);
                header.paint("headerText", container, headerArea.x_min, headerArea.y_max);

                //now we need to adjust the actual visual based on the position
                switch(position) {
                    case "left": bar_area.x_min = headerArea.x_max + margin_between_items;
                                    break;
                    case "right": bar_area.x_max = bar_area.width() - (headerArea.width() + margin_between_items);
                                    break;
                    case "top":  bar_area.y_min = margin_between_items + headerArea.height() + margin_between_items;
                                    break;
                    case "bottom": bar_area.y_max = bar_area.height() - (margin_between_items + headerArea.height());
                                    break;   
                    default:
                        throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                }     

            }

            if (this.settings.textSettings.treatBlanksAsZeros == true) {
                this.overrideBlanksWithValue = 0;
            } else {
                this.overrideBlanksWithValue = null;
            }

            //add the display units from settings
            var tS = this.settings.textSettings;
            data.value.displayUnits = tS.displayUnitsForValue != 0 ? tS.displayUnitsForValue : tS.displayUnits;
            if (data.max != null) {
                data.max.displayUnits = tS.displayUnitsForMax != 0 ? tS.displayUnitsForMax : tS.displayUnits;
            }

            for (var i = 0; i < data.tooltipsData.length; i++) {
                data.tooltipsData[i].displayUnits = this.settings.textSettings.displayUnits;
            }

            var position_percent_bar_in_percent = 0;
            var position_dashed_line_in_percent = 0;

            //first we need to determine how much to fill the bar and where the dashed
            //line should be positioned
            if (data.target == null) {
                position_dashed_line_in_percent = 0;
                position_percent_bar_in_percent = data.max == null ? 0 : (data.value.value / data.max.value) * 100;
            } 
            else {                    
                if (data.max == null) {
                    // so we have a target and a value but no max   
                    position_percent_bar_in_percent = (data.value.value / (data.target.value * 2)) * 100;
                    position_dashed_line_in_percent = 50                  
                }
                else {
                    //we have a target and a max
                    position_percent_bar_in_percent = (data.value.value / data.max.value) * 100
                    position_dashed_line_in_percent = (data.target.value / data.max.value) * 100
                }
            } 
        
            //we need to derive the status bar color
            var stColor = this.derive_status_color(data.value, data.target, data.max);

            var margin_between_bar_and_text = 2;

            if (this.settings.textSettings.position != "onbar") {

                var text_y_location = null;
                switch(this.settings.textSettings.position) {
                    case "below": text_y_location = bar_area.y_max - margin_between_bar_and_text; break;
                }

                if (this.settings.textSettings.showValueText == true) {
                    //get the formatted value string
                    this.add_text(container, "valueTxt", this.settings.textSettings.fontSize, text_y_location, data.value, stColor.barColor)
                        .attr("x", bar_area.x_min + 3);
                }  

                if (data.max != null && this.settings.textSettings.showMaxText == true) {
                    this.add_text(container, "goalTxt", this.settings.textSettings.fontSize, text_y_location, data.max, "#000000")                
                        .attr("x", bar_area.x_max - container.select(".goalTxt").node().getBBox().width)
                }                                               

                //now do the bar placement 

                //derive the bar attributes using the overall text height
                var goal_txt_height = this.settings.textSettings.showMaxText == false || data.max == null ? 0 : container.select(".goalTxt").node().getBBox().height;
                var value_txt_height = this.settings.textSettings.showValueText == false || data.value == null ? 0 : container.select(".valueTxt").node().getBBox().height;
                var max_txt_height = goal_txt_height > value_txt_height ? goal_txt_height : value_txt_height;
                
                switch(this.settings.textSettings.position) {
                    case "below": bar_area.y_max = (bar_area.y_max - margin_between_bar_and_text) - max_txt_height; 
                                break;
                }

            }
            
            //okay now make the dashed line area and readjust the bar's area
            var dashed_line_area = new Area(bar_area.x_min, bar_area.x_max, 
                                            bar_area.y_min, bar_area.y_max);
            
            var margin = (dashed_line_area.height() * 0.15)
            bar_area.y_min += margin;
            bar_area.y_max -= margin;
            
            if (data.target == null && data.max == null) {
                //just draw the main bar as we just want to show the value     
                container.append("rect")
                          .classed("mabar", true);  
            } 
            else {
                // draw the complete visual

                container.append("rect")
                          .classed("mabar",true)
                
                container.append("rect")
                          .classed("pebar",true)
                          .attr("x",bar_area.x_min)
                          .attr("y", bar_area.y_min)
                          .attr("height", bar_area.height())
                          .attr("fill", stColor.barColor)                                        
                          .attr("width", bar_area.width() * (position_percent_bar_in_percent / 100))                     
                    
            }
            
            var mainBarFill = null;
            if ((data.target == null && data.max == null) && this.settings.outerBarSettings.fillWhenNoTarget) {
                mainBarFill = this.settings.colorSettings.defaultColorNoTargetFill;
            } else {
                mainBarFill = this.settings.outerBarSettings.fill;
            }

            //add the extra styling to the main outer bar
            container.select(".mabar")
                      .attr("width",bar_area.width())
                      .attr("fill",mainBarFill)
                      .attr("stroke",this.settings.outerBarSettings.outlineColor)
                      .attr("height", bar_area.height())
                      .attr("x", bar_area.x_min)
                      .attr("y", bar_area.y_min);                                        

            // now if a target was specified we need to draw the dashed line
            if (data.target != null) {
                //determine where the dashed line should end
                var x = bar_area.x_min + (bar_area.width() * (position_dashed_line_in_percent / 100))
                container  .append("line")
                            .classed("tline",true)
                            .attr("y1",dashed_line_area.y_min)
                            .attr("x1",x)
                            .attr("x2",x)
                            .attr("y2", dashed_line_area.y_max)
                            .style("stroke",this.settings.targetLineSettings.color)
                            .style("stroke-width",this.settings.targetLineSettings.strokeWidth)                  
            
                if (this.settings.targetLineSettings.lineStyle == "dashed") {
                    container.select(".tline").style("stroke-dasharray","2,2");
                }
            } 

            //if the data labels were set to onbar we draw them last
            if (this.settings.textSettings.position == "onbar") {
                if (this.settings.textSettings.showValueText == true) {
                    var yOffset = (bar_area.y_min + (bar_area.height() / 2))
                    //get the formatted value string
                    this.add_text(container, "valueTxt", this.settings.textSettings.fontSize, 0, data.value, "#000000")
                        .attr("x", bar_area.x_min + 3)
                        .attr("y", yOffset + (container.select(".valueTxt").node().getBBox().height / 4))
                }  

                if (data.max != null && this.settings.textSettings.showMaxText == true) {
                    var yOffSet = (bar_area.y_min + (bar_area.height() / 2))
                    this.add_text(container, "goalTxt", this.settings.textSettings.fontSize, 0, data.max, "#000000")                
                        .attr("x", bar_area.x_max - container.select(".goalTxt").node().getBBox().width)
                        .attr("y", yOffSet + (container.select(".goalTxt").node().getBBox().height / 4))
                        .style("stroke")
                }
            }

            this.tooltipServiceWrapper.addTooltip(
                    container,
                    (tooltipEvent: TooltipEventArgs<number>) => databarvisual.getToolTipDataForBar(tooltipEvent.data,this.settings),
                    (tooltipEvent: TooltipEventArgs<number>) => null); 
        }

        private add_text(element: any, cssClass:string, fontSize: number, yPos: number, field: Field, fill: string) {
            var tmp = element.append("text")
                             .attr("y", yPos)
                             .classed(cssClass,true)
                             .text(field.toString(true, true, this.overrideBlanksWithValue))
                             .style("font-size",fontSize + "px")
                             .style("font-family", this.font_family)
                             .style("fill", fill)
            return(tmp)
        }

        private position_category_label(position, headerElemWidth, headerElemHeight, area: Area) {
            var svgWidth = area.width();
            var svgHeight = area.height();
                        
            var headerTxtArea = new Area(0, headerElemWidth, 0, headerElemHeight);
            var headerXPx = null;
            var headerYPx = null;
            if (position == "left") {                        
                //align the y to be the center in terms of the
                headerXPx = 0;
                headerTxtArea.y_max = area.y_min + ((area.height() / 2));
                headerTxtArea.y_min = headerTxtArea.y_max - headerElemHeight;
                //only need to set x_min for the square area
                                     
            } else if (position == "top") {
                //horizontal x needs to be at center
                headerTxtArea.x_min = (svgWidth / 2) - (headerElemWidth / 2)
                headerTxtArea.x_max = headerTxtArea.x_min + headerElemWidth;
                //only need to set y_min for the square area
                
            } else if (position == "right") {
                //align the y to be the center in terms of the
                headerTxtArea.x_min = svgWidth - headerTxtArea.width();
                headerTxtArea.x_max = svgWidth;
                headerTxtArea.y_max = (svgHeight / 2) + (headerTxtArea.height() / 4);
                headerTxtArea.y_min = headerTxtArea.y_max - headerElemHeight;
                //now we need to set x_max for the square area
                
            }
            else if (position == "bottom") {
                //horizontal x needs to be at center
                headerTxtArea.x_min = (svgWidth / 2) - (headerTxtArea.width() / 2);
                headerTxtArea.x_max = headerTxtArea.x_min + headerElemWidth;
                headerTxtArea.y_max = svgHeight - 5;
                headerTxtArea.y_min = headerTxtArea.y_max - headerElemHeight;
                //only need to set y_min for the square
                
            }

            return headerTxtArea;
        }

        private position_header(position, headerElemWidth, headerElemHeight) : Area {                       
            var svgWidth = parseInt(this.svg.style("width"));
            var svgHeight = parseInt(this.svg.style("height"));
                        
            var headerTxtArea = new Area(0, headerElemWidth, 0, headerElemHeight);
            var headerXPx = null;
            var headerYPx = null;
            if (position == "left") {                        
                //align the y to be the center in terms of the
                headerXPx = 0;
                headerTxtArea.y_max = (svgHeight / 2) + (headerElemHeight / 4);
                headerTxtArea.y_min = headerTxtArea.y_max - headerElemHeight;
                //only need to set x_min for the square area
                                     
            } else if (position == "top") {
                //horizontal x needs to be at center
                headerTxtArea.x_min = (svgWidth / 2) - (headerElemWidth / 2)
                headerTxtArea.x_max = headerTxtArea.x_min + headerElemWidth;
                //only need to set y_min for the square area
                
            } else if (position == "right") {
                //align the y to be the center in terms of the
                headerTxtArea.x_min = svgWidth - headerTxtArea.width();
                headerTxtArea.x_max = svgWidth;
                headerTxtArea.y_max = (svgHeight / 2) + (headerTxtArea.height() / 4);
                headerTxtArea.y_min = headerTxtArea.y_max - headerElemHeight;
                //now we need to set x_max for the square area
                
            }
            else if (position == "bottom") {
                //horizontal x needs to be at center
                headerTxtArea.x_min = (svgWidth / 2) - (headerTxtArea.width() / 2);
                headerTxtArea.x_max = headerTxtArea.x_min + headerElemWidth;
                headerTxtArea.y_max = svgHeight - 5;
                headerTxtArea.y_min = headerTxtArea.y_max - headerElemHeight;
                //only need to set y_min for the square
                
            }

            return headerTxtArea;
        }

        private derive_status_color(value, target?, max?): StatusColor {
            var stColor = new StatusColor();
            var statusBarColor = this.settings.colorSettings.equalToColor;
            var textColor = this.settings.colorSettings.equalToColor;
            
            if (target != null) {
                if (value.value > target.value) {
                    stColor.barColor = this.settings.colorSettings.greaterThanColor;
                    stColor.fontColor = this.settings.colorSettings.greaterThanColor;
                } 
                else if (value.value < target.value) {
                    stColor.barColor = this.settings.colorSettings.lessThanColor;
                    stColor.fontColor = this.settings.colorSettings.lessThanColor;
                }
            } else {
                if (max != null) {
                    if (value.value > max.value) {
                        stColor.barColor = this.settings.colorSettings.greaterThanColor;
                        stColor.fontColor = this.settings.colorSettings.greaterThanColor;
                    }
                    else if (value.value < max.value) {
                        stColor.barColor = this.settings.colorSettings.lessThanColor;
                        stColor.fontColor = this.settings.colorSettings.lessThanColor;
                    }
                }
            }

            if (target == null && max == null) {
                stColor.barColor = this.settings.colorSettings.defaultColorNoTargetFill;
                stColor.fontColor = this.settings.colorSettings.defaultColorNoTargetText;
            }

            return stColor;
        }

        private canvas_setup() {

            var container = d3.select(this.target)

            this.svg = container.append("svg")
                                .attr("width", "100%")
                                .attr("height", "100%")

            this.barsContainerElement = this.svg.append("g").classed("bars_container", true);

        }

        private canvas_clear() {
            this.barsContainerElement.selectAll(".barVisual").remove();
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
    }
}