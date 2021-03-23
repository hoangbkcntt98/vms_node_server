import mongoose from 'mongoose'
// const mongoose = require('mongoose')
const RiskSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required : true
    },
    parents:[{
        type: Number,
        required : false
    }],
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
export default mongoose.model('risk',RiskSchema,'risk')