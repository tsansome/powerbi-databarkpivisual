import { Visual } from "../../src/visual";
var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];

var databarkpivisualC7D9C5D48D2D42568087C64CA96ABF88_DEBUG = {
    name: 'databarkpivisualC7D9C5D48D2D42568087C64CA96ABF88_DEBUG',
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
    powerbi.visuals.plugins["databarkpivisualC7D9C5D48D2D42568087C64CA96ABF88_DEBUG"] = databarkpivisualC7D9C5D48D2D42568087C64CA96ABF88_DEBUG;
}

export default databarkpivisualC7D9C5D48D2D42568087C64CA96ABF88_DEBUG;