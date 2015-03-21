var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	database = require('./config/utils'),
	bodyParser = require('body-parser'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development', //dev or prod,
	port = process.env.PORT || 3030,
	db;

//setting up
app.set('port', port);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser()); //To extract params from the body of the requests
app.use(bodyParser());

app.listen(port, function(){
	console.log('Listening on port ' + port);
});


//connecting database
mongoose.connect(database.CONNECTION_URL);
mongoose.set('debug', true);
db = mongoose.connection;

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
	});

	//FIND ALL
	app.get('/contacts', function(req, res){
		Contact.find(function (error, contacts){
			console.log("Finding all Contacts");

			if (error) {
				return res.send(error);
			}
			res.json(contacts);
		})
	});

	//FIND BY ID
	app.get('/contacts/:id', function(req, res){
		Contact.findById(req.params.id, function (error, contact){
  			console.log("Finding contact id:" + req.params.id);

			if (error) {
				return res.send(error);
			}
			res.json(contact);
		})
	});

	//CREATE
	app.post('/contacts', function (req, res) {
		Contact.create({
			name : req.body.name,
			address : req.body.address,
			phone: req.body.phone
		}, function(error, contact) {

			if (error) {
				res.send(error);
			}
			Contact.find(function(error, contacts) {

				if (error) {
					res.send(error);
				}

				res.json(contacts);
			});
		});
	});

	//UPDATE
	app.put('/contacts/:id', function (req, res){
  		Contact.findById(req.params.id, function (err, contact) {
		    contact.name = req.body.name;
		    contact.address = req.body.address;
		    contact.phone = req.body.phone;

		    contact.save(function(error) {

				if (error) {
					console.log(error);
				} else {
					console.log('updated');
					Contact.find(function(error, contacts) {

						if (error) {
							res.send(error);
					  	}
						res.json(contacts);
				  	});
				}
		    });
  		});
	});

	//DELETE
	app.delete('/contacts/:id', function (req, res) {
		Contact.findById(req.params.id, function (err, contact) {
    		contact.remove(function (error) {

				if (error) {
					console.log(error);
					res.json(error);
      			}
				console.log("Contact removed");
				Contact.find(function(error, contacts) {

					if (error) {
						res.send(error);
					}
					res.json(contacts);
				});
			});
    	});
    });
});
