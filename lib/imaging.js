const storage = require("./storage")

function getMin(arr) {
    let min=arr[0]
    for (var i=0; i<arr.length; i++)
    {
        if (arr[i] < min)
            min=arr[i]
    }
    return min;
}
function getMax(arr) {
    let max=arr[0]
    for (var i=0; i<arr.length; i++)
    {
        if (arr[i] > max)
            max=arr[i]
    }
    return max;
}
module.exports = {
    drawChart: function(timeSeries, coinName, width, height) {
        try {
        console.log("Begin render process for symbol "+coinName);
        let startTime = Date.now();

        const ChartjsNode = require('chartjs-node');
                var chartJsOptions = {
                    type: 'line',
                    data: {
                        labels: timeSeries.map(x => ''),
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
                            pointRadius: 0,
                            fill: true,
                            borderWidth: 1,
                            data: timeSeries
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
                var chartNode = new ChartjsNode(width, height);
                return chartNode.drawChart(chartJsOptions)
                .then(() => {
                    // chart is created
                
                    // get image as png buffer
                    return chartNode.getImageBuffer('image/png');
                })
                .then(buffer => {
                    Array.isArray(buffer) // => true
                    // as a stream
                    return chartNode.getImageStream('image/png');
                })
                .then(streamResult => {
                    // using the length property you can do things like
                    // directly upload the image to s3 by using the
                    // stream and length properties
                    streamResult.stream // => Stream object
                    streamResult.length // => Integer length of stream
                    // write to a file
                    return chartNode.writeImageToFile('image/png', "./charts/"+coinName+".png");
                })
                .then(() => {
                    // chart is now written to the file path
                    // ./testimage.png
                    var endTime = Date.now();
                    console.log("Finished rendering "+coinName+" chart in "+(endTime-startTime).toString()+"ms");
                    storage.uploadToCloudAsync("./charts/"+coinName+".png")
                });
            } catch(ex) {
                console.log("Error, could not render chart. Details:")
                console.log(ex.toString())
            }
    }
}
