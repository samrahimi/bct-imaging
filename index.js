const request= require("request")
const imaging = require("./lib/imaging.js")

const DATA_URL = 'http://localhost:5000/api/prices?xyz123';

const IMG_REFRESH_INTERVAL = 30*60*1000; //testing
const IMG_WIDTH = 138
const IMG_HEIGHT = 26

const GLOBAL_CACHE = {}

function getLatestData() {
    try{ 
    request(DATA_URL, { json: true }, (err, res, body) => {
        if (err) {  
            return console.log(err); 
        } else {
            GLOBAL_CACHE["price_history"] = body
        }
        console.log("data refreshed, regenerating chart images")
        console.log(JSON.stringify(body));
        generateImages(body); //pass the latest history data to the image generator
    });
    } catch(ex) {
        console.log("Failed HTTP request to data service, images served will be outdated. Retrying in "+IMG_REFRESH_INTERVAL+"ms")
    }
}

function render(name, timeseries, fieldName) {
    let t= timeseries.slice(0, 98);
    var sparklineData = t.map(x => x.close)
    imaging.drawChart(sparklineData, name.toLowerCase(), 600, 600)
}

function dispatchRenderingThread(dataSeries) {
    setTimeout(function(dataRow) {
            try {
                render(dataRow.coin, dataRow.priceHistory.Data, "close");
            } 
            catch(ex)
            {
                console.log(ex.toString())
            }        
        }, 0, dataSeries)
}

function generateImages(historicalPrices) {
    for (var i=0; i<historicalPrices.length; i++) {
        dispatchRenderingThread(historicalPrices[i])
    }
}


module.exports={
    startRenderingJob: function() {
        getLatestData();
        renderInterval=setInterval(getLatestData, IMG_REFRESH_INTERVAL)
    }
}













