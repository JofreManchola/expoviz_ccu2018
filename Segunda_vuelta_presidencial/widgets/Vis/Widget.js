define([
    "dojo/_base/declare",
    "jimu/BaseWidget"
], function (b, c) {
    return b([c], {
        baseClass: "jimu-widget-demo",
        postCreate: function () {
            this.inherited(arguments); console.log("postCreate")
        },
        startup: function () {

            // ,
            // "https://cdn.jsdelivr.net/npm/vega@4.0.0-rc.3/build/vega.js",
            // "https://cdn.jsdelivr.net/npm/vega-lite@2.6.0/build/vega-lite.js",
            // "https://cdn.jsdelivr.net/npm/vega-embed@3.16.0/build/vega-embed.js"

            // , vega, vegaLite, vegaEmbed

            this.inherited(arguments);
            this.mapIdNode.innerHTML = "map id:" + this.map.id; console.log("startup")
        },
        onOpen: function () {
            console.log("onOpen")
            // Assign the specification to a local variable vlSpec.
            const vlSpec = "widgets/Vis/json/distribucionTotalVotantes.json";


            // Embed the visualization in the container with id `vis`
            // vegaEmbed("#vis", vlSpec);


        },
        onClose: function () {
            console.log("onClose")
        },
        onMinimize: function () {
            console.log("onMinimize")
        },
        onMaximize: function () {
            console.log("onMaximize")
        },
        onSignIn: function (a) { console.log("onSignIn") },

        onSignOut: function () {
            console.log("onSignOut")
        }
    })
});