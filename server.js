const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const toyRoutes = require('./server/routes/toyRoutes')
const errorHandler = require('./server/middleware/errorHandler')

require('dotenv').config();

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

// middleware 
app.use(bodyParser.json())
app.use(express.static('public'))

// routes 
app.use('/api', toyRoutes)

// error handling middleware
app.use(errorHandler)

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})