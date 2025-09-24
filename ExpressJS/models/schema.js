const schema = require('mongoose').Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum :["admin","user","guest"]
    },
    password: {
        type: String,
        required: true,
    }
});
module.exports = require('mongoose').model('User', userSchema);