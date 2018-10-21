// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
const storage = new Storage({
    projectId: 'root-matrix-218400',
    keyFilename: 'cloud_storage_credentials.json'
  });

  const bucketName = 'bct-images';

module.exports = {
    // Uploads a local file to the publicly accessible bucket.
    // endpoint =- 
    uploadToCloudAsync: async function(img) {
        await storage.bucket(bucketName).upload(img, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        metadata: {
                // Enable long-lived HTTP caching headers
                // Use only if the contents of the file will never change
                // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=1800',
            },
        });
        console.log(`${img} uploaded to ${bucketName}.`);
    }
}

