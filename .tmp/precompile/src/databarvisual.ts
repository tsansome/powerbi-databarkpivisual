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
        public data: BarData;
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
        public value: Field;
        public target: Field;
        public max: Field;

        public tooltipsData : Field[];

        public constructor() {
            this.tooltipsData = [];
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

    export class Area {
        x_min:number;
        x_max:number;
        y_min:number;
        y_max:number;
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
        
        var values = options.dataViews[0].table.rows[0];

        //now set up my data
        //loop through the data set and set up a value mapping table
        var valueArray = []
        valueArray["tooltips"] = [];
        for (var i = 0; i < options.dataViews[0].table.columns.length; i++) {
            var columnRole = options.dataViews[0].table.columns[i].roles;
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
            bdf.data = null;
            bdf.statusMessage = "The value field must be supplied";
            return bdf;
        } 
        
        //collect the data
        var data = new BarData();

        var columnsRef = options.dataViews[0].table.columns;
        
        var value = null;
        if (values[valueArray["value"]] != null) {
            var value_string = values[valueArray["value"]].toString()
            value = Number(value_string)
        }
        data.value = new Field(value,
                            columnsRef[valueArray["value"]].format,
                            columnsRef[valueArray["value"]].displayName);
        
        if (valueArray["target"] != undefined && values[valueArray["target"]] != null) {
            data.target = new Field(Number(values[valueArray["target"]].toString()),
                                columnsRef[valueArray["target"]].format,
                                columnsRef[valueArray["target"]].displayName); 
        } else {
            data.target = null;
        }

        if (valueArray["max"] != undefined && values[valueArray["max"]] != null) {
            data.max = new Field(Number(values[valueArray["max"]].toString()),
                                columnsRef[valueArray["max"]].format,
                                columnsRef[valueArray["max"]].displayName);
        }
        else {
            data.max = null;
        }

        if ((data.target != null && data.max != null) && data.target.value > data.max.value) {
            bdf.data = null;
            bdf.statusMessage = "Target (" + data.target.value + ") is greater than max (" + data.max.value + "). This is not allowed";
            return bdf;
        }

        // now process the tooltips
        for (var i = 0; i < valueArray["tooltips"].length; i++) {
            var toolTipIndex = valueArray["tooltips"][i];
            if (values[toolTipIndex] == null) {
                var tooltipF = new Field(
                    null,
                    columnsRef[toolTipIndex].format,
                    columnsRef[toolTipIndex].displayName,
                    0
                );
            } 
            else {
                var tooltipF = new Field(
                    Number(values[toolTipIndex].toString()),
                    columnsRef[toolTipIndex].format,
                    columnsRef[toolTipIndex].displayName,
                    0
                );
            }
            
            data.tooltipsData.push(tooltipF);
        }

        bdf.data = data;
        bdf.statusMessage = null;

        return bdf;
    }

    export class databarvisual implements IVisual {
        private target: HTMLElement;
        private settings: VisualSettings;

        private overrideBlanksWithValue: number;

        //svg elements
        private host: IVisualHost;
        // private percentageBarElement;
        private barsContainerElement;
        // private ActualTxtElement;
        // private GoalTxtElement;
        // private mainBarElement;
        // private dashedLineElement;
        // private bottomPaddingElement;
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

            if (transform.data == null) {
                //print out the error message
            }        
            else {  
                var SquareArea = new Area(0, parseInt(this.svg.style("width")), 0, parseInt(this.svg.style("height")));
                this.draw_one_data_bar(SquareArea, transform.data);   
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
        private draw_one_data_bar(area : Area, data: BarData) {
            //Let's derive some of the sizing
            //set the bar area to take up 100% of the space
            var bar_area = area;
            
            //set up the main visual
            var barElement = this.barsContainerElement.append("g").classed("barVisual", true);
            //attach the data to the visual element so that it can be used in the tooltip
            barElement.data([data]);

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
            if (this.settings.textSettings.showValueText == true) {
                //get the formatted value string
                this.add_text(barElement, "valueTxt", bar_area.y_max - margin_between_bar_and_text, data.value, stColor.barColor);
            }  

            if (data.max != null && this.settings.textSettings.showMaxText == true) {
                this.add_text(barElement, "goalTxt", bar_area.y_max - margin_between_bar_and_text, data.max, "#000000")                
                    .attr("x", bar_area.x_max - barElement.select(".goalTxt").node().getBBox().width)
            }                                               

            //now do the bar placement 

            //derive the bar attributes using the overall text height
            var goal_txt_height = this.settings.textSettings.showMaxText == false ? 0 : barElement.select(".goalTxt").node().getBBox().height;
            var value_txt_height = this.settings.textSettings.showValueText == false ? 0 : barElement.select(".valueTxt").node().getBBox().height;
            var max_txt_height = goal_txt_height > value_txt_height ? goal_txt_height : value_txt_height;
            bar_area.y_max = (bar_area.y_max - margin_between_bar_and_text) - max_txt_height;
            
            //okay now make the dashed line area and readjust the bar's area
            var dashed_line_area = new Area(bar_area.x_min, bar_area.x_max, 
                                            bar_area.y_min, bar_area.y_max);
            
            var margin = (dashed_line_area.height() * 0.15)
            bar_area.y_min += margin;
            bar_area.y_max -= margin;

            if (data.target == null && data.max == null) {
                //just draw the main bar as we just want to show the value     
                barElement.append("rect")
                          .classed("mabar", true);                    

            } 
            else {
                // draw the complete visual

                barElement.append("rect")
                          .classed("mabar",true)
                
                barElement.append("rect")
                          .classed("pebar",true)
                          .attr("x",bar_area.x_min)
                          .attr("y", bar_area.y_min)
                          .attr("height", bar_area.height())
                          .attr("fill", stColor.barColor)                                        
                          .attr("width",position_percent_bar_in_percent + "%")                     
                    
            }
            
            var mainBarFill = null;
            if ((data.target == null && data.max == null) && this.settings.outerBarSettings.fillWhenNoTarget) {
                mainBarFill = this.settings.colorSettings.defaultColorNoTargetFill;
            } else {
                mainBarFill = this.settings.outerBarSettings.fill;
            }

            //add the extra styling to the main outer bar
            barElement              .select(".mabar")
                                    .attr("width","100%")
                                    .attr("fill",mainBarFill)
                                    .attr("stroke",this.settings.outerBarSettings.outlineColor)
                                    .attr("height", bar_area.height())
                                    .attr("x", bar_area.x_min)
                                    .attr("y", bar_area.y_min)                                        

            // now if a target was specified we need to draw the dashed line
            if (data.target != null) {
                //determine where the dashed line should end
                barElement  .append("line")
                            .classed("tline",true)
                            .attr("y1",dashed_line_area.y_min)
                            .attr("x1",position_dashed_line_in_percent + "%")
                            .attr("x2",position_dashed_line_in_percent + "%")
                            .attr("y2", dashed_line_area.y_max)
                            .style("stroke",this.settings.targetLineSettings.color)
                            .style("stroke-width",this.settings.targetLineSettings.strokeWidth)                  
            
                if (this.settings.targetLineSettings.lineStyle == "dashed") {
                    barElement.select(".tline").style("stroke-dasharray","2,2");
                }
            } 

            this.tooltipServiceWrapper.addTooltip(
                    barElement,
                    (tooltipEvent: TooltipEventArgs<number>) => databarvisual.getToolTipDataForBar(tooltipEvent.data,this.settings),
                    (tooltipEvent: TooltipEventArgs<number>) => null); 
        }

        private add_text(element: any, cssClass:string, yPos: number, field: Field, fill: string) {
            var tmp = element.append("text")
                             .attr("y", yPos)
                             .classed(cssClass,true)
                             .text(field.toString(true, true, this.overrideBlanksWithValue))
                             .style("font-size",this.settings.textSettings.fontSize + "px")
                             .style("font-family", this.font_family)
                             .style("fill", fill)
            return(tmp)
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