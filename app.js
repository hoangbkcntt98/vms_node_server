
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

app.listen(5000)