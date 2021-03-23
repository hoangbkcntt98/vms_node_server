import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import risksRoute from './routes/Risk.js'
import riskDisRoute from './routes/RiskDis.js'
dotenv.config()
// const express = require('express')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// require('dotenv/config')


const app = express();
app.use(bodyParser.json())
app.use(cors())
//Midlewares
// app.use("/",(req,res)=>{
//     res.json("Hello")
//     console.log(`app is running on locahost:5000`)
// })
// Import routes
// const risksRoute = require('./routes/Risk')

// ROUTES

app.use('/risks',risksRoute)
app.use('/riskDis',riskDisRoute)
// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    ()=>{
        console.log('connected to DB')
    }
)
app.listen(5000)