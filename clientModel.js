let mongoose = require('mongoose');

// Setup schema
let clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    create_at: {
        type: Date,
        default: Date.now
    }
});

let Client = module.exports = mongoose.model('client', clientSchema);

module.exports.get = function(callback, limit) {
    Client.find(callback).limit(limit);
}
