// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import dotenv from 'dotenv'
const risksRoute = require('./routes/Risk.js')
const riskDisRoute = require('./routes/RiskDis.js')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')
console.log(process.env.DB_CONNECTION)
const app = express();
app.use(bodyParser.json())
app.use(cors())

app.use('/risks',risksRoute)
app.use('/riskDis',riskDisRoute)
// Connect to DB
console.log(process.env.DB_CONNECTION)
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true}
)
const schema = new mongoose.Schema({
  name: String
}, {
  capped: { size: 1024 },
  bufferCommands: false,
  autoCreate: false // disable `autoCreate` since `bufferCommands` is false
});

app.listen(5000)