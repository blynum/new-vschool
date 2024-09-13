const mongoose = require('mongoose');

// Define the Bounty schema
const bountySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Jedi', 'Sith'], // restrict the values to either Jedi or Sith
        required: true
    }
});

// Create the Bounty model
module.exports = mongoose.model('Bounty', bountySchema);
