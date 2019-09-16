import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;
import { VisualSettings } from "./settings";
export declare class Area {
    x_min: number;
    x_max: number;
    y_min: number;
    y_max: number;
    constructor(x_min: any, x_max: any, y_min: any, y_max: any);
    width(): number;
    height(): number;
}
export declare class Label {
    content: string;
    font_size: string;
    font_family: string;
    class_name: string;
    private _container;
    private _width;
    private _height;
    constructor(defaultSVGContainer: any, content: string, font_size: string, font_family: string);
    paint(class_name: string, container: any, x: number, y: number): void;
    width(): any;
    height(): any;
    remove(): void;
}
export declare class BarDataTransform {
    bars: BarData[];
    statusMessage: string;
}
export declare class Field {
    value: number;
    format: string;
    displayName: string;
    displayUnits: number;
    constructor(value: number, format: string, displayName: string, displayUnits?: number);
    toString(withFormatting?: boolean, withDisplayUnits?: boolean, overrideBlankWithNumber?: number): string;
}
export declare class BarData {
    category: string;
    value: Field;
    target: Field;
    max: Field;
    selectionId: any;
    tooltipsData: Field[];
    global_svg_ref: any;
    status_message: any;
    constructor(category?: string);
    largest(): Field;
    gapBetweenValueAndTarget(): Field;
    gapBetweenValueAndMax(): Field;
}
export declare class StatusColor {
    barColor: string;
    fontColor: string;
}
export declare class Visual implements IVisual {
    private target;
    private settings;
    private svg;
    private host;
    private barsContainerElement;
    private overrideBlanksWithValue;
    private font_family;
    private tooltipServiceWrapper;
    private selectionManager;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private add_one_data_bar;
    private add_text;
    private derive_status_color;
    private canvas_setup;
    private canvas_clear;
    private static parseSettings;
    /**
     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
     * objects and properties you want to expose to the users in the property pane.
     *
     */
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject;
    static getToolTipDataError(dataNonCasted: any, settings: VisualSettings): VisualTooltipDataItem[];
    static getToolTipDataForBar(dataNonCasted: any, settings: VisualSettings): VisualTooltipDataItem[];
}
