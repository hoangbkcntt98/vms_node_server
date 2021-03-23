import express from 'express';
import RiskDis from '../models/RiskDis.js'
const router = express.Router();

router.get('/',async(req,res) => {
    
    const riskDisList = await RiskDis.find()
    res.json(riskDisList)
})
export default router;