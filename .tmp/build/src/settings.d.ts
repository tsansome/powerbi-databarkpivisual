import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class VisualSettings extends DataViewObjectsParser {
    itemsSettings: ItemsSettings;
    sectionSettings: SectionSettings;
    textSettings: TextSettings;
    colorSettings: ColorSettings;
    targetLineSettings: TargetLineSettings;
    outerBarSettings: OuterBarSettings;
    headerSettings: HeaderSettings;
}
export declare class ItemsSettings {
    orientation: string;
    padding: number;
    minWidth: number;
    minHeight: number;
}
export declare class SectionSettings {
    position: string;
    fontSize: number;
    fontColor: string;
    margin_between: number;
}
export declare class TextSettings {
    position: string;
    fontSize: number;
    displayUnits: number;
    showValueText: boolean;
    displayUnitsForValue: number;
    showMaxText: boolean;
    displayUnitsForMax: number;
    repPositiveGapAsNegativeNumber: boolean;
    showPercentagesOnGaps: boolean;
    ignoreFormattingForTooltips: boolean;
    treatBlanksAsZeros: boolean;
}
export declare class ColorSettings {
    defaultColorNoTargetText: string;
    defaultColorNoTargetFill: string;
    lessThanColor: string;
    equalToColor: string;
    greaterThanColor: string;
}
export declare class TargetLineSettings {
    color: string;
    strokeWidth: number;
    lineStyle: string;
}
export declare class OuterBarSettings {
    fillWhenNoTarget: boolean;
    fill: string;
    outlineColor: string;
}
export declare class HeaderSettings {
    show: boolean;
    position: string;
    value: string;
    fontSize: number;
    margin_between: number;
}
