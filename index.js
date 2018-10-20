const request= require("request")
const imaging = require("./lib/imaging.js")
const DATA_URL = 'http://localhost:5000/api/prices';
const IMG_REFRESH_INTERVAL = 3*60*1000; //testing
const IMG_WIDTH = 138
const IMG_HEIGHT = 26
function getLatestData() {
    request(DATA_URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log("data refreshed, regenerating chart images")
        console.log(JSON.stringify(body));
        generateImages(body); //pass the latest history data to the image generator
    });
}
function generateImages(historicalPrices) {
    for (var i=0; i<historicalPrices.length; i++) {
        render(historicalPrices[i].coin, historicalPrices[i].priceHistory.Data, "close");
    }
}
function render(name, timeseries, fieldName) {
    let t= timeseries.slice(0, 98);
    var sparklineData = t.map(x => x.close)
    imaging.drawChart(sparklineData, name.toLowerCase(), 600, 600)
}
module.exports={
    startRenderingJob: function() {
        getLatestData();
        renderInterval=setInterval(getLatestData, IMG_REFRESH_INTERVAL)
    }
}
