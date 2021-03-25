// import mongoose from 'mongoose'
// const mongoose = require('mongoose')
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
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
var RiskDis  = mongoose.model('RiskDis',RiskDisSchema,'risk_dis')
module.exports = RiskDis
// export default mongoose.model('risk_dis',RiskDisSchema,'risk_dis')