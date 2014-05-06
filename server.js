
//NODE CONFIGURATION FILE
'use strict';
var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	database = require('./config/utils');

//connecting database	
mongoose.connect(database.CONNECTION_URL); 
mongoose.set('debug', true);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function callback () {
  	//defining schema
	var contactSchema = mongoose.Schema({
		name: String,
		address: String,
		phone: String
	}, {collection: 'contactList_db'});
	//defining model
	var Contact = mongoose.model('Contact', contactSchema);

	// ********************** express ROUTERS - REST
	//GET ALL
	app.get('/contacts', function(req, res){
		//using mongoose to get all contacts in the database
		Contact.find(function (err, contacts){
			console.log("Finding all Contacts");
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err) return res.send(err)		
			res.json(contacts); // return all contacts in JSON format		
		})
	});	

	app.get('/contacts:contactId', function(req, res){
		Contact.findById(req.contactId, function (err, contact){
  			console.log("Finding contact id:" + req.contactId);
  			if (err) return res.send(err)		
			res.json(contacts); // return all contacts in JSON format	
		})		
	});	
	

});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});