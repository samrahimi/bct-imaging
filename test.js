module.exports= {}

const ChartjsNode = require('chartjs-node');
let ts = [{"time":1539698400,"close":0.9577,"high":0.9577,"low":0.956,"open":0.9568,"volumefrom":119460.84,"volumeto":114231.76},{"time":1539702000,"close":0.9577,"high":0.9581,"low":0.9558,"open":0.9558,"volumefrom":143463.34,"volumeto":137799.83},{"time":1539705600,"close":0.9598,"high":0.9601,"low":0.9575,"open":0.9577,"volumefrom":147263.05,"volumeto":142015.69},{"time":1539709200,"close":0.9584,"high":0.9598,"low":0.9584,"open":0.9598,"volumefrom":132504.14,"volumeto":127573.94},{"time":1539712800,"close":0.956,"high":0.9589,"low":0.956,"open":0.9584,"volumefrom":363144.02,"volumeto":348067.63},{"time":1539716400,"close":0.9554,"high":0.9582,"low":0.9554,"open":0.956,"volumefrom":79918.86,"volumeto":76593.78},{"time":1539720000,"close":0.9601,"high":0.9604,"low":0.9554,"open":0.9554,"volumefrom":250787.98,"volumeto":240630.98},{"time":1539723600,"close":0.959,"high":0.9603,"low":0.9549,"open":0.9601,"volumefrom":508817.37,"volumeto":487997.68},{"time":1539727200,"close":0.9591,"high":0.9599,"low":0.9589,"open":0.959,"volumefrom":294089.66,"volumeto":282277.92},{"time":1539730800,"close":0.9538,"high":0.9597,"low":0.9533,"open":0.9591,"volumefrom":425702.6,"volumeto":407054.7},{"time":1539734400,"close":0.9551,"high":0.9551,"low":0.9534,"open":0.9538,"volumefrom":66496.97,"volumeto":63493.33},{"time":1539738000,"close":0.9531,"high":0.9559,"low":0.953,"open":0.9551,"volumefrom":89340.4,"volumeto":85652.35},{"time":1539741600,"close":0.9527,"high":0.9541,"low":0.9527,"open":0.9531,"volumefrom":65511.74,"volumeto":62573.57},{"time":1539745200,"close":0.9526,"high":0.9529,"low":0.9512,"open":0.9527,"volumefrom":210125.12,"volumeto":201072.22},{"time":1539748800,"close":0.9516,"high":0.9529,"low":0.9513,"open":0.9526,"volumefrom":137798.12,"volumeto":131182.61},{"time":1539752400,"close":0.9534,"high":0.9534,"low":0.9511,"open":0.9516,"volumefrom":190461.99,"volumeto":181369.62},{"time":1539756000,"close":0.9519,"high":0.9535,"low":0.951,"open":0.9534,"volumefrom":76741.72,"volumeto":74762.78},{"time":1539759600,"close":0.9537,"high":0.9551,"low":0.9519,"open":0.9519,"volumefrom":348989.45,"volumeto":333349.72},{"time":1539763200,"close":0.9545,"high":0.9553,"low":0.9513,"open":0.9537,"volumefrom":350449.87,"volumeto":334453.79},{"time":1539766800,"close":0.955,"high":0.9553,"low":0.9537,"open":0.9545,"volumefrom":304023.31,"volumeto":290348.82},{"time":1539770400,"close":0.9582,"high":0.9583,"low":0.9548,"open":0.955,"volumefrom":522444.54,"volumeto":499211.08},{"time":1539774000,"close":0.9592,"high":0.9602,"low":0.9581,"open":0.9583,"volumefrom":538279.68,"volumeto":518224.55},{"time":1539777600,"close":0.9584,"high":0.9593,"low":0.9573,"open":0.9592,"volumefrom":90284.42,"volumeto":86766.43},{"time":1539781200,"close":0.9564,"high":0.9705,"low":0.9564,"open":0.9584,"volumefrom":13287.69,"volumeto":18125.18},{"time":1539784800,"close":0.9558,"high":0.9583,"low":0.9548,"open":0.9564,"volumefrom":243023.11,"volumeto":237503.88},{"time":1539788400,"close":0.956,"high":0.9568,"low":0.9551,"open":0.9558,"volumefrom":251746.63,"volumeto":240956.92},{"time":1539792000,"close":0.9572,"high":0.9574,"low":0.956,"open":0.956,"volumefrom":126694.76,"volumeto":121853.96},{"time":1539795600,"close":0.9563,"high":0.9572,"low":0.9557,"open":0.9572,"volumefrom":123022.4,"volumeto":118413.2},{"time":1539799200,"close":0.9551,"high":0.9564,"low":0.9546,"open":0.9563,"volumefrom":160538.92,"volumeto":153075.47},{"time":1539802800,"close":0.9566,"high":0.9567,"low":0.9546,"open":0.9551,"volumefrom":152179.34,"volumeto":145453.14},{"time":1539806400,"close":0.9568,"high":0.9574,"low":0.955,"open":0.9566,"volumefrom":163323.64,"volumeto":156262.43},{"time":1539810000,"close":0.9579,"high":0.9582,"low":0.9565,"open":0.9568,"volumefrom":175484.61,"volumeto":169067.04},{"time":1539813600,"close":0.9566,"high":0.9581,"low":0.9559,"open":0.9579,"volumefrom":233336.18,"volumeto":225629.71},{"time":1539817200,"close":0.9574,"high":0.9577,"low":0.956,"open":0.9566,"volumefrom":40305.57,"volumeto":38518.59},{"time":1539820800,"close":0.9561,"high":0.9575,"low":0.9555,"open":0.9574,"volumefrom":175082.75,"volumeto":167386.54},{"time":1539824400,"close":0.957,"high":0.9588,"low":0.9554,"open":0.9561,"volumefrom":835296.96,"volumeto":803093.55},{"time":1539828000,"close":0.9559,"high":0.9577,"low":0.9556,"open":0.957,"volumefrom":98378.28,"volumeto":94068.69},{"time":1539831600,"close":0.9542,"high":0.9562,"low":0.9542,"open":0.9559,"volumefrom":89424.31,"volumeto":85740.63},{"time":1539835200,"close":0.9564,"high":0.9567,"low":0.9538,"open":0.9542,"volumefrom":134819.02,"volumeto":128911.24},{"time":1539838800,"close":0.9573,"high":0.9576,"low":0.9557,"open":0.9564,"volumefrom":431915.85,"volumeto":413188.37},{"time":1539842400,"close":0.9559,"high":0.9574,"low":0.9551,"open":0.9573,"volumefrom":10911.33,"volumeto":12206.14},{"time":1539846000,"close":0.9562,"high":0.9573,"low":0.9559,"open":0.9559,"volumefrom":97695.77,"volumeto":103380.96},{"time":1539849600,"close":0.957,"high":0.9583,"low":0.955,"open":0.9551,"volumefrom":348815.8,"volumeto":335064.88},{"time":1539853200,"close":0.9587,"high":0.9591,"low":0.957,"open":0.957,"volumefrom":141627.21,"volumeto":135859.32},{"time":1539856800,"close":0.958,"high":0.9589,"low":0.9577,"open":0.9587,"volumefrom":63971.3,"volumeto":62256.44},{"time":1539860400,"close":0.9575,"high":0.9589,"low":0.9574,"open":0.958,"volumefrom":99292.17,"volumeto":97811.31},{"time":1539864000,"close":0.9566,"high":0.9578,"low":0.9566,"open":0.9575,"volumefrom":20477.15,"volumeto":20266.82},{"time":1539867600,"close":0.9569,"high":0.9571,"low":0.9516,"open":0.9566,"volumefrom":119131.6,"volumeto":114092.23},{"time":1539871200,"close":0.9596,"high":0.9716,"low":0.9569,"open":0.9569,"volumefrom":527312.4,"volumeto":513613.89},{"time":1539874800,"close":0.9591,"high":0.9622,"low":0.959,"open":0.9596,"volumefrom":425761.03,"volumeto":408845.7},{"time":1539878400,"close":0.9569,"high":0.9593,"low":0.9547,"open":0.9591,"volumefrom":362874.3,"volumeto":349665.44},{"time":1539882000,"close":0.9625,"high":0.9625,"low":0.9568,"open":0.9571,"volumefrom":1293927.67,"volumeto":1242260.34},{"time":1539885600,"close":0.9626,"high":0.963,"low":0.962,"open":0.9625,"volumefrom":87746.32,"volumeto":84608.45},{"time":1539889200,"close":0.9628,"high":0.9654,"low":0.9623,"open":0.9626,"volumefrom":117152.36,"volumeto":112876.99},{"time":1539892800,"close":0.9631,"high":0.9639,"low":0.9625,"open":0.9628,"volumefrom":105487.75,"volumeto":105280.82},{"time":1539896400,"close":0.964,"high":0.9657,"low":0.9631,"open":0.9631,"volumefrom":96962.7,"volumeto":93260.81},{"time":1539900000,"close":0.9656,"high":0.9671,"low":0.9637,"open":0.964,"volumefrom":180488.47,"volumeto":174537.28},{"time":1539903600,"close":0.9648,"high":0.9662,"low":0.9644,"open":0.9656,"volumefrom":136194.26,"volumeto":131725.56},{"time":1539907200,"close":0.9638,"high":0.965,"low":0.9621,"open":0.9648,"volumefrom":13731.46,"volumeto":15816.03},{"time":1539910800,"close":0.966,"high":0.966,"low":0.9568,"open":0.9638,"volumefrom":47115.59,"volumeto":45319.35},{"time":1539914400,"close":0.9655,"high":0.9661,"low":0.9648,"open":0.9656,"volumefrom":42931.58,"volumeto":41490.32},{"time":1539918000,"close":0.9677,"high":0.9678,"low":0.9647,"open":0.965,"volumefrom":13627.52,"volumeto":14364.11},{"time":1539921600,"close":0.9643,"high":0.9677,"low":0.962,"open":0.9677,"volumefrom":79546.04,"volumeto":76850.16},{"time":1539925200,"close":0.9653,"high":0.9653,"low":0.9634,"open":0.9643,"volumefrom":102013.49,"volumeto":105031.71},{"time":1539928800,"close":0.9665,"high":0.9671,"low":0.9648,"open":0.9653,"volumefrom":109220.14,"volumeto":106541.38},{"time":1539932400,"close":0.9663,"high":0.9665,"low":0.9655,"open":0.9665,"volumefrom":43433.55,"volumeto":45750.28},{"time":1539936000,"close":0.9677,"high":0.9677,"low":0.966,"open":0.9663,"volumefrom":72972.76,"volumeto":71011.67},{"time":1539939600,"close":0.9673,"high":0.9684,"low":0.967,"open":0.9677,"volumefrom":77108.98,"volumeto":75075.74},{"time":1539943200,"close":0.9678,"high":0.9678,"low":0.9664,"open":0.9672,"volumefrom":84066.09,"volumeto":81803.21},{"time":1539946800,"close":0.9675,"high":0.9679,"low":0.9665,"open":0.9678,"volumefrom":51529.52,"volumeto":58767.56},{"time":1539950400,"close":0.9692,"high":0.9698,"low":0.9675,"open":0.9675,"volumefrom":64747.45,"volumeto":64067.26},{"time":1539954000,"close":0.9689,"high":0.9697,"low":0.9671,"open":0.9692,"volumefrom":254600.17,"volumeto":246452.95},{"time":1539957600,"close":0.9691,"high":0.9702,"low":0.9656,"open":0.9689,"volumefrom":165581.03,"volumeto":160160.8},{"time":1539961200,"close":0.9694,"high":0.9708,"low":0.9688,"open":0.9689,"volumefrom":189189.35,"volumeto":183528.14},{"time":1539964800,"close":0.9696,"high":0.9702,"low":0.9692,"open":0.9694,"volumefrom":211420.78,"volumeto":205022.33},{"time":1539968400,"close":0.9726,"high":0.975,"low":0.9695,"open":0.9695,"volumefrom":455469.51,"volumeto":443293.61},{"time":1539972000,"close":0.9732,"high":0.9732,"low":0.9704,"open":0.9726,"volumefrom":17992.84,"volumeto":20004.95},{"time":1539975600,"close":0.9742,"high":0.9742,"low":0.9714,"open":0.9732,"volumefrom":42141.92,"volumeto":41010.6},{"time":1539979200,"close":0.9752,"high":0.9769,"low":0.9742,"open":0.9742,"volumefrom":173512.68,"volumeto":169830.73},{"time":1539982800,"close":0.9761,"high":0.9774,"low":0.9752,"open":0.9752,"volumefrom":334366.79,"volumeto":332660.32},{"time":1539986400,"close":0.9757,"high":0.9761,"low":0.9717,"open":0.9757,"volumefrom":21019.91,"volumeto":20521.09},{"time":1539990000,"close":0.9738,"high":0.9777,"low":0.9738,"open":0.9757,"volumefrom":162816.17,"volumeto":158940.65},{"time":1539993600,"close":0.9754,"high":0.976,"low":0.9711,"open":0.9738,"volumefrom":81032.04,"volumeto":78774.09},{"time":1539997200,"close":0.9771,"high":0.9772,"low":0.9733,"open":0.9754,"volumefrom":351669.74,"volumeto":343301.56},{"time":1540000800,"close":0.9903,"high":0.9903,"low":0.9767,"open":0.9771,"volumefrom":51634.2,"volumeto":51219.72},{"time":1540004400,"close":0.9761,"high":0.9903,"low":0.9761,"open":0.9903,"volumefrom":19697.2,"volumeto":23313.7},{"time":1540008000,"close":0.976,"high":0.9776,"low":0.9759,"open":0.9761,"volumefrom":70708.86,"volumeto":71548.58},{"time":1540011600,"close":0.9756,"high":0.9762,"low":0.9753,"open":0.976,"volumefrom":24430.76,"volumeto":25246.06},{"time":1540015200,"close":0.9742,"high":0.9766,"low":0.9736,"open":0.9756,"volumefrom":140723.55,"volumeto":138296.45},{"time":1540018800,"close":0.9721,"high":0.9742,"low":0.9703,"open":0.9742,"volumefrom":149700.18,"volumeto":145510.05},{"time":1540022400,"close":0.9745,"high":0.9745,"low":0.972,"open":0.9721,"volumefrom":55461.87,"volumeto":66976.66},{"time":1540026000,"close":0.9737,"high":0.9746,"low":0.9736,"open":0.9745,"volumefrom":5582.7,"volumeto":6712.65},{"time":1540029600,"close":0.9752,"high":0.9752,"low":0.9709,"open":0.9737,"volumefrom":45027.74,"volumeto":44878},{"time":1540033200,"close":0.9733,"high":0.9851,"low":0.9726,"open":0.9752,"volumefrom":36955.21,"volumeto":36601.04},{"time":1540036800,"close":0.9732,"high":0.9735,"low":0.972,"open":0.9733,"volumefrom":76463.06,"volumeto":84772.18},{"time":1540040400,"close":0.9732,"high":0.9732,"low":0.9704,"open":0.9732,"volumefrom":66462.53,"volumeto":71787.6},{"time":1540044000,"close":0.9707,"high":0.9734,"low":0.9707,"open":0.9734,"volumefrom":59085.95,"volumeto":58075.99},{"time":1540047600,"close":0.9717,"high":0.9718,"low":0.9705,"open":0.9707,"volumefrom":53784.34,"volumeto":53057.08},{"time":1540051200,"close":0.9734,"high":0.9737,"low":0.9715,"open":0.9717,"volumefrom":160675.38,"volumeto":157424.42},{"time":1540054800,"close":0.975,"high":0.9761,"low":0.9727,"open":0.9734,"volumefrom":492437,"volumeto":479901.43},{"time":1540058400,"close":0.9756,"high":0.9761,"low":0.975,"open":0.975,"volumefrom":21650.03,"volumeto":21150.12}];
let cleaned=ts.map(x => x.close);

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
            pointRadius: 0,
            fill: true,
            borderWidth: 1,
            data: cleaned
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
