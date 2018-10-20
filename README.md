Installation and configuration:

1. The price history service (https://gitlab.com/samrahimi/bct-sprite-service) must be running and appropriately configured. Take note of it's base URL and port (e.g. http://localhost:5000)

2. Set the environment variable PRICE_HISTORY_JSON_ENDPOINT to the fully qualified URL of the price history service you wish to use as a data source.

3. Install dependencies: npm install

4. Install platform-specific binaries required by the anychart node.js wrapper. 

OSX: brew install imagemagick librsvg

Windows: see anychart docs, https://www.anychart.com/technical-integrations/samples/nodejs-charts/

5. Start the service via npm start. Chart images will be rendered, saved to the charts folder, and will be available on the URL http://host:port/charts/[coin name].png 