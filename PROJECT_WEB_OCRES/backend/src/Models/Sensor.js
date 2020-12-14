const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SensorSchema = new Schema({
    creationDate: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    location: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Sensor', SensorSchema)