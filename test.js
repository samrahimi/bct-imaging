module.exports= {}

const ChartjsNode = require('chartjs-node');

var chartJsOptions = {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Data",
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            borderWidth: 1,
            data: [100, 120, 150, 170, 180, 170, 160]
        }]
    },
    options: {
        legend: {
            display:false
        },
        elements: {
            line: {
                borderColor: '#CCCCC',
                borderWidth: 1
            },
            point: {
                radius: 0
            }
        },
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [
            {
                display: false,
                ticks: {
                    beginAtZero:false
                }

            }
            ],
            xAxes: [
            {
                display: false
            }
            ]
        }
}
}

var chartNode = new ChartjsNode(130, 130);
return chartNode.drawChart(chartJsOptions)
.then(() => {
    // chart is created
 
    // get image as png buffer
    return chartNode.getImageBuffer('image/jpg');
})
.then(buffer => {
    Array.isArray(buffer) // => true
    // as a stream
    return chartNode.getImageStream('image/jpg');
})
.then(streamResult => {
    // using the length property you can do things like
    // directly upload the image to s3 by using the
    // stream and length properties
    streamResult.stream // => Stream object
    streamResult.length // => Integer length of stream
    // write to a file
    return chartNode.writeImageToFile('image/png', './gerbil2.png');
})
.then(() => {
    // chart is now written to the file path
    // ./testimage.png
});
