const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MeasureSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    value: {
        type: Number,
        required: true
    },
    sensor: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Sensor'
    },

})

module.exports = mongoose.model('Measure', MeasureSchema)