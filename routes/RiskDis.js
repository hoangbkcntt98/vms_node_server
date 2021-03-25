const express = require('express')
const RiskDis = require('../models/RiskDis')
// import express from 'express';
// import RiskDis from '../models/RiskDis.js'
const router = express.Router();

router.get('/',async(req,res) => {
    
    const riskDisList = await RiskDis.find()
    res.json(riskDisList)
})
module.exports = router
// export default router;