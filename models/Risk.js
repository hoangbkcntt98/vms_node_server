// import mongoose from 'mongoose'
// import bluebird from 'bluebird'
// mongoose.Promise = bluebird
// const mongoose = require('mongoose')

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const RiskSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required : true
    },
    parents:{
        type: String,
        required : false
    },
    description:{
        type:String,
        default:'',
        required : false
    },
    task:{
        type: String,
        required : false
    },
    riskDis:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "risk_dis"
    },
    parentList:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "risk"
    }]
})
const Risk = mongoose.model('Risk',RiskSchema,'risk')
module.exports = Risk
// export default mongoose.model('risk',RiskSchema,'risk')