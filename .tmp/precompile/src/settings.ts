/*
 *  Power BI Visualizations
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
    import DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;

    export class VisualSettings extends DataViewObjectsParser {
      public textSettings: textSettings = new textSettings();
      public colorSettings: colorSettings = new colorSettings();
      public targetLineSettings: targetLineSettings = new targetLineSettings();
      public outerBarSettings: outerBarSettings = new outerBarSettings();
    }

    export class textSettings {
      public position: string = "below";
     // Text Size
      public fontSize: number = 12;
      public displayUnits: number = 0;      
      public showValueText: boolean = true;
      public displayUnitsForValue: number = 0;
      public showMaxText: boolean = true;
      public displayUnitsForMax: number = 0;
      public repPositiveGapAsNegativeNumber: boolean = true;
      public showPercentagesOnGaps: boolean = true;
      public ignoreFormattingForTooltips: boolean = false;
      public treatBlanksAsZeros: boolean = false;
    }

    export class colorSettings {
      public defaultColorNoTargetText: string = "#00000";
      public defaultColorNoTargetFill: string = "#000000";      
      public lessThanColor: string = "#f44336";
      public equalToColor: string = "#4caf50";
      public greaterThanColor: string = "#4caf50";
    }

    export class targetLineSettings {
      public color: string = "grey";
      public strokeWidth: number = 1;
      public lineStyle: string = "dashed";
    }

    export class outerBarSettings {
      public fillWhenNoTarget: boolean = true;
      public fill: string = "white";
      public outlineColor: string = "grey";
    }

}
