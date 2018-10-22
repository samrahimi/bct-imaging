import request from "request";
import { drawChart } from "./lib/imaging.js";
const uuid = require('uuid')
const DATA_URL = 'http://localhost:5000/api/prices?xyz123';

const IMG_REFRESH_INTERVAL = 30*60*1000; //production
const RENDER_THROTTLE_MS = 1000;         //save your server
const IMG_WIDTH = 138
const IMG_HEIGHT = 26

const GLOBAL_CACHE = {}
function newFunction() {
    var id;
}

function getLatestData() {
    try{ 
    request(DATA_URL, { json: true }, (err, _res, body) => {
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

function render(name, timeseries, _fieldName) {
    let t= timeseries.slice(0, 98);
    var sparklineData = t.map(x => x.close)
    drawChart(sparklineData, name.toLowerCase(), 600, 600)
}

async function dispatchRenderingThread(dataSeries) {
    return thread(

    )

    return new Promise((resolve, reject) => {
        let startDate= Date.now();
        try {
            render(dataSeries.coin, dataSeries.priceHistory.Data, "close");
            let endDate = Date.now();
            resolve({
                    thread_id: threadId,
                    status: "done", 
                    coin: dataSeries.coin,
                    render_time_ms:(endDate - startDate)
            })
        } 
        catch(ex)
        {
            console.log(ex.toString())
            reject({
                thread_id: threadId,
                status: "error", 
                coin: dataSeries.coin || "?",
                render_time_ms:(endDate - startDate)
            });
        }        

    })
}



function generateImages(historicalPrices) {
    for (var i=0; i<historicalPrices.length; i++) {
        dispatchRenderingThread(historicalPrices[i])
    }
}


export function startRenderingJob() {
    getLatestData();
    renderInterval = setInterval(getLatestData, IMG_REFRESH_INTERVAL);
}













