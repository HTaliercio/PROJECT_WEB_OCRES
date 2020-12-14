const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require('colors')
const morgan = require('morgan')

const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './.env'})

// Cors options
let corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

// Connect DB
connectDB()

const app = express()

// Cors
app.use(cors(corsOptions))

// Body parser
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Morgan
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Routes
app.use('/api/v1', require('./start/routes'))

const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold)
)