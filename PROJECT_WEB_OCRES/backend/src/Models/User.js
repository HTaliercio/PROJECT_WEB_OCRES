const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    personsInHouse: {
        type: Number,
        required: true,
        trim: true
    },
    houseSize: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)