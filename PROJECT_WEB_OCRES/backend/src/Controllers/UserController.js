const User = require('../Models/User')

exports.signUp = async (req, res) => {
    try {
        const {location, personsInHouse, houseSize} = req.body
        let errors = []

        // Check required fields
        if (!location || !personsInHouse || !houseSize) {
            errors.push({message: 'Please fill in all fields'})
        }

        if (errors.length > 0) {
            return res.status(400).send(errors)
        } else {
            // Validation passed
            const newUser = new User({
                location,
                personsInHouse,
                houseSize
            })
            await newUser.save()
            return res.status(200).send(newUser)
        }

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).send(users)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).send('User does not exist')
        }
        return res.status(200).send(user)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.updateUser = async (req, res) => {
    try {
        const update = req.body
        const id = req.params.id

        await User.findByIdAndUpdate(id, update)
        const user = await User.findById(id)

        return res.status(200).send(user)

    } catch (e) {
        return res.status(500).send('Server error')
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await User.findByIdAndRemove(id)
        return res.status(200).json('User deleted')

    } catch (e) {
        return res.status(500).send('Server error')
    }
}