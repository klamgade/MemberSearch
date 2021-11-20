const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    _id: {
		type: String,
		required: true
	},
    id: {
		type: Number,
		required: true
	},
    firstName: {
		type: String,
		required: true
	},
    lastName: {
		type: String,
		required: true
	},
    memberCardNumber: {
		type: Number
	},
    policyNumber: {
		type: Number,
        required: true
	},
    dateOfBirth: {
		type: String
	},
});

module.exports = mongoose.model('Member', memberSchema )