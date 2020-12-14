const Sensor = require('../Models/Sensor')

exports.addSensor = async (req, res) => {
    try {
        const data = req.body
        const newSensor = await Sensor.create(data)
        return res.status(200).send(newSensor)

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.getSensors = async (req, res) => {
    try {
        const Sensors = await Sensor.find()
        return res.status(200).send(Sensors)

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.getSensor = async (req, res) => {
    try {
        const id = req.params.id
        const sensor = await Sensor.findById(id)
        if(!sensor) {
            return res.status(404).send('Sensor does not exist')
        }
        return res.status(200).send(sensor)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.updateSensor = async (req, res) => {
    try {
        const update = req.body
        const id = req.params.id

        await Sensor.findByIdAndUpdate(id, update)
        const sensor = await Sensor.findById(id)

        return res.status(200).send(sensor)

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.deleteSensor = async (req, res) => {
    try {
        const id = req.params.id
        await Sensor.findByIdAndRemove(id)

        return res.status(200).json('Sensor has been deleted')

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

