
5. Start the service via npm start. Chart images will be rendered, uploaded to a public HTTPS bucket on Google Cloud, and will be available on the URL https://storage.googleapis.com/bct-images/charts/[coin name].png 


---
Prerequisites:
1. A running instance of the sprite service (it provides cached, near-real-time short term OHLC data to bct-imaging). If the sprite service is running on the same machine as you will be running the imaging service, you do not need to change any settings. If it is on a separate host, please update DATA_URL in index.js to match.



Running the sprite service:

1. Install .net core runtime on your server (download and instructions for Debian 9 are at https://www.microsoft.com/net/download/linux-package-manager/debian9/runtime-2.1.5 - if using another OS, use the dropdown on this page to show the proper instructions, if using Debian 9 follow the instructions at this link PRECISELY.

2. git clone https://github.com/samrahimi/bct-imaging.git && cd ./bct-imaging/binaries

3. nohup sudo dotnet bct-sprite-service.dll

(to build the sprite service: dotnet publish --configuration Release on the server, your workstation, or any other system that has .net core runtime and build tools installed. The resulting output folder should be copied to the server, then proceed to step 3 above)


Starting the Sprite Service

sudo pm2 start "dotnet bct-sprite-service.dll" data_service -f
curl "http://localhost:5000/api/admin/config?batchSize=10&candleSize=2&numCandles=50&quoteCurrency=USD"
curl http://localhost:5000/api/admin/start
curl http://localhost:5000/api/admin/status


Installing 
1. Install node and npm properly
2. Clone this repo onto your server
3. Make sure sprite service is started and working

Then paste the following into your command line

sudo apt install pkg-config              #the dependencies require it
sudo apt-get install build-essential 
npm install --save                       #  may need sudo

TESTING
sudo PORT=80 nohup node app.js           #  unsafe! use a real web server.

Production
#pm2 keeps the app running after you logout and restarts it if it dies.
#like a standard linux service but much more usable
sudo npm install -g pm2
sudo pm2 start "node app.js" image_service -f


#IF NECESSARY
sudo apt-get install libcairo2-dev libjpeg-dev libgif-dev
sudo apt install gcc make
#ENDIF

