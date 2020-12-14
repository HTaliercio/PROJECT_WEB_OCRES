const express = require('express')
const router = express.Router()

const {signUp, getUsers, getUser, updateUser, deleteUser} = require('../src/Controllers/UserController')
const {addSensor, getSensors, getSensor, updateSensor, deleteSensor} = require('../src/Controllers/SensorController')
const {addMeasure, getMeasures, getMeasure, updateMeasure, deleteMeasure} = require('../src/Controllers/MeasureController')

// User
router.post('/users', signUp)
router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

// Sensor
router.post('/sensors', addSensor)
router.get('/sensors', getSensors)
router.get('/sensors/:id', getSensor)
router.put('/sensors/:id', updateSensor)
router.delete('/sensors/:id', deleteSensor)

// Measure
router.post('/measures', addMeasure)
router.get('/measures', getMeasures)
router.get('/measures/:id', getMeasure)
router.put('/measures/:id', updateMeasure)
router.delete('/measures/:id', deleteMeasure)

module.exports = router