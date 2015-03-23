var mongoose = require('mongoose'),
    utils = require('../../config/utils'),
    db;

mongoose.connect(utils.CONNECTION_URL);
mongoose.set('debug', true);

db = mongoose.connection;

db.on('error', function(error){
    console.log('Connection ERROR: ', error)
});

db.on('connected', function(error){
    console.log('CONNECTED')
});

db.on('disconnected', function(error){
    console.log('DISCONNECTED')
});

module.exports = db;