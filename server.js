var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	Contact = require('./server/models/Contact'),
	db = require('./server/database/Database'),
	app = express(),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development', //dev or prod,
	port = process.env.PORT || 3030;

//setting up
app.set('port', port);

app.use(express.static(__dirname + '/public/'));
app.use(bodyParser()); //To extract params from the body of the requests

app.listen(port, function(){
	console.log('Listening on port ' + port);
});

db.once('open', function callback () {
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
		});
	});

	//FIND BY ID
	app.get('/contacts/:id', function(req, res){
		var id = req.params.id;

		Contact.findById(id, function (error, contact){
  			console.log("Finding contact id: " + id);
			if (error) {
				return res.send(error);
			}

			res.json(contact);
		})
	});

	//CREATE
	app.post('/contacts', function (req, res) {
		var contactToSave = {
			name : req.body.name,
			address : req.body.address,
			phone: req.body.phone
		};

		Contact.create(contactToSave, function(error) {
			if (error) {
				res.send(error);
			}

			console.log('saved');
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
		var id = req.params.id,
			contactUpdated = {
				name: req.body.name,
				address: req.body.address,
				phone: req.body.phone
			};

  		Contact.findByIdAndUpdate(id, contactUpdated, function (error, contact) {
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

	//DELETE
	app.delete('/contacts/:id', function (req, res) {
		var id = req.params.id;
		Contact.findByIdAndRemove(id, function (error) {
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
