import mongoose from 'mongoose'
// const mongoose = require('mongoose')
const RiskDisSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    parents:{
        type: String,
        required : true
    },
    probs :[{
        type:  Number,
        required: true
    }]
})
export default mongoose.model('risk_dis',RiskDisSchema,'risk_dis')