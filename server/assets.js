const Bundler = require('parcel-bundler');
// Pass an absolute path to the entrypoint here
const file = './client/index.html';
// See options section of api docs, for the possibilities
const options = {};

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
module.exports = bundler.middleware();
