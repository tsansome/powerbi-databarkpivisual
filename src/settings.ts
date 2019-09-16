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

"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class VisualSettings extends DataViewObjectsParser {
  public itemsSettings: ItemsSettings = new ItemsSettings();
  public sectionSettings: SectionSettings = new SectionSettings();
  public textSettings: TextSettings = new TextSettings();
  public colorSettings: ColorSettings = new ColorSettings();
  public targetLineSettings: TargetLineSettings = new TargetLineSettings();
  public outerBarSettings: OuterBarSettings = new OuterBarSettings();
  public headerSettings: HeaderSettings = new HeaderSettings();
}

export class ItemsSettings {
  public orientation: string = "vertical";
  public padding: number = 5;
  public minWidth: number = 20;
  public minHeight: number = 20;
}

export class SectionSettings {
  public position: string = "left";
  public fontSize: number = 8;
  public fontColor: string = "#00000";
  public margin_between: number = 10;
}

export class TextSettings {
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

export class ColorSettings {
  public defaultColorNoTargetText: string = "#00000";
  public defaultColorNoTargetFill: string = "#000000";
  public lessThanColor: string = "#f44336";
  public equalToColor: string = "#4caf50";
  public greaterThanColor: string = "#4caf50";
}

export class TargetLineSettings {
  public color: string = "grey";
  public strokeWidth: number = 1;
  public lineStyle: string = "dashed";
}

export class OuterBarSettings {
  public fillWhenNoTarget: boolean = true;
  public fill: string = "white";
  public outlineColor: string = "grey";
}

export class HeaderSettings {
  public show: boolean = false;
  public position: string = "left";
  public value: string = "";
  public fontSize: number = 18;
  public margin_between: number = 5;
}

