const Measure = require('../Models/Measure')

exports.addMeasure = async (req, res) => {
    try {
        const data = req.body
        const newMeasure = await Measure.create(data)
        return res.status(200).send(newMeasure)

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.getMeasures = async (req, res) => {
    try {
        const measures = await Measure.find()
        return res.status(200).send(measures)

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.getMeasure = async (req, res) => {
    try {
        const id = req.params.id
        const measure = await Measure.findById(id)
        if(!Measure) {
            return res.status(404).send('Measure does not exist')
        }
        return res.status(200).send(measure)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.updateMeasure = async (req, res) => {
    try {
        const update = req.body
        const id = req.params.id

        await Measure.findByIdAndUpdate(id, update)
        const measure = await Measure.findById(id)

        return res.status(200).send(measure)

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.deleteMeasure = async (req, res) => {
    try {
        const id = req.params.id
        await Measure.findByIdAndRemove(id)

        return res.status(200).json('Measure has been deleted')

    } catch (e) {
        return res.status(500).send('Server error')
    }
}