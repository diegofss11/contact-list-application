var mongoose = require('mongoose'),
    contactSchema = mongoose.Schema({
        name: String,
        address: String,
        phone: String
    }),
    Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;