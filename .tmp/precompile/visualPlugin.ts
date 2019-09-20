import { Visual } from "../../src/visual";
var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];

var databarKPIB8060E2B144244C5A38807466893C9F6 = {
    name: 'databarKPIB8060E2B144244C5A38807466893C9F6',
    displayName: 'Data bar KPI',
    class: 'Visual',
    version: '2.0.0',
    apiVersion: '2.6.0',
    create: (options) => {
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