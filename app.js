const express = require('express');
const app = express();
const render = require("./index")

//expose the chart images to http for the client
app.use('/charts', express.static('charts'))
app.listen(3000)
//generate charts based on recent data, then refresh them every half an hour
render.startRenderingJob();