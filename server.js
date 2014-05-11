var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	database = require('./config/utils'),
	bodyParser = require('body-parser');

app.use(bodyParser()); //To extract params from the body of the requests

// Add headers for CROSS-DOMAIN
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

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
	}, {collection: 'Contact'});
	
	//defining model
	var Contact = mongoose.model('Contact', contactSchema);

	// ********************** express ROUTERS - RESTFUL
	
	app.get('/', function(req, res) {
  		res.send('please select a collection, e.g., /contacts')
	})

	//FIND ALL
	app.get('/contacts', function(req, res){
		Contact.find(function (err, contacts){
			console.log("Finding all Contacts");
			if (err) return res.send(err)		
			res.json(contacts);		
		})
	});	

	//FIND BY ID
	app.get('/contacts/:id', function(req, res){
		Contact.findById(req.params.id, function (err, contact){
  			console.log("Finding contact id:" + req.params.id);
  			if (err) return res.send(err)		
			res.json(contact);	
		})		
	});

	//CREATE
	app.post('/contacts', function (req, res) {
		Contact.create({
			name : req.body.name,
			address : req.body.address,
			phone: req.body.phone
		}, function(err, contact) {
			debugger;
			if (err)
				res.send(err);
			// get and return all the contacts after you create another
			Contact.find(function(err, contacts) {
				if (err)
					res.send(err)
				res.json(contacts);
			});
		});
	});

	//UPDATE
	app.put('/contacts/:id', function (req, res){
  		return Contact.findById(req.params.id, function (err, contact) {
    		contact.name = req.body.name;
    		product.address = req.body.address;
    		product.phone = req.body.phone;
    		
    		return contact.save(function (err) {
      			if (!err) {
        			console.log("Contact was updated");
      			} else {
        			console.log(err);
      			}
      			return res.send(product);
    		});
  		});
	});

	//DELETE
	app.delete('contacts/:id', function (req, res) {
		return Contact.findById(req.params.id, function (err, contact) {
    		return contact.remove(function (err) {
      			if (!err) {
       				console.log("Contact removed");
        			return res.send('');
      			} else {
        			console.log(err);
      			}
    		});
    	});
    });		
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});