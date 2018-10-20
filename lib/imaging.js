
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
        const ChartjsNode = require('chartjs-node');

        var chartJsOptions = {
            type: 'line',
            data: {
                datasets: [
                    {
                        data: timeSeries,
                        borderColor: "#80b6f4",
                    }
                ]
            },
            options: {
            responsive: false,
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },

                margin: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            elements: {
                line: {
                    borderColor: "#80b6f4",
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
                        beginAtZero: false,
                        suggestedMin: parseInt((getMin(timeSeries) - (getMin(timeSeries)* 0.1)) * 100),
                        suggestedMin: parseInt((getMax(timeSeries) + (getMax(timeSeries)* 0.1)) * 100)
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
        });

    }
}
