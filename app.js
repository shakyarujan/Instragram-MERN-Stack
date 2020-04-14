const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

const PORT = 3000
//joqHlHm2mFqg8l3r

require('./models/user')

// Connecting to the mongoose database 
mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// DB Sucess Status
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Mongo Database")
})

// DB Error Status
mongoose.connection.on('error', (err)=>{
    console.log("Error connecting to the Mongo Database", err)
})

app.get('/', (req,res)=>{
    res.send('Hello World')
})


// Listining to the server port
app.listen(PORT, ()=>{
    console.log("Server is running on", PORT)
})