//NODE CONFIGUTARION FILE
var express = require('express'),
	app = express();



// configuration
var mongoose = require('mongoose');
var db = mongoose.createConnection(
	'mongodb://diegofss1@gmail.com:d7f7s7s7@novus.modulusmongo.net:27017/dy5qebUn'
); //admin - admin 

db.on('error', console.error);
db.once('open', function() {
  	// Creating schema
	var contactSchema = new mongoose.Schema({
	  	name: String,
		address: String,
		phone: String
	});

    //defining model
	var Contact = mongoose.model('Contact', {
		name: 'string',
		address: 'string',
		phone: 'string'
	}, contactSchema);

	//db initial values
	var contact = new Contact({
		name: 'Diego',
		address: 'Rua Rio Hudson',
		phone: '558877444'
	});	
});



//express ROUTERS - REST
//GET ALL
app.get('/contacts', function(req, rest){

	//using mongoose to get all contacts in the database
	Contact.find(function( err, contacts){
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)		
		res.json(contacts); // return all contacts in JSON format		
	});
});


app.listen(3000, function(){
	console.log('Listening on port 3000');
});