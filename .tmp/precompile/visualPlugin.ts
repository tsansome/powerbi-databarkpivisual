import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var databarKPIB8060E2B144244C5A38807466893C9F6: IVisualPlugin = {
    name: 'databarKPIB8060E2B144244C5A38807466893C9F6',
    displayName: 'Data bar KPI',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        console.error('Visual instance not found');
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["databarKPIB8060E2B144244C5A38807466893C9F6"] = databarKPIB8060E2B144244C5A38807466893C9F6;
}

export default databarKPIB8060E2B144244C5A38807466893C9F6;