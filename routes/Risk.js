import express from 'express';
import Risk from '../models/Risk.js'
import RiskDis from '../models/RiskDis.js'
const router = express.Router();

// const router = express.Router();
// const Risk = require('../models/Risk')
//fetRiskDis if risk has not riskDis
router.get('/riskUpdate',async(req,res)=>{
    try{
       
    const risks = await Risk.find();
    risks.forEach(async(risk)=>{
        console.log('update risk '+ risk.id)
        risk.riskDis = await RiskDis.findOne({id:risk.id}); 
        let parents = risk.parents
        if(parents!=''&& parents!=undefined){
            parents = parents.split(' ')
            console.log(parents)
            for(const par of parents){
                var parent = await Risk.findOne({id:par})
                if(risk.parentList.length<parents.length)
                risk.parentList = [...risk.parentList,parent]
            }
        }
        await risk.save()
    })
    res.json(risks)
}catch(err){
    res.json(err)
}
    // risks.save()
})
//get all
router.get('/',async(req,res)=>{
    console.log('all risk')
    const risks = await Risk.find().populate("riskDis").populate("parentList");
    console.log(risks)
    // console.log(risks)
    res.json({
        object: risks
    })
})

// specific risk
router.get('/:id',async(req,res)=>{// id must be number chu y mongodb luc import
    // console.log(req.params.id)
    try{
        const risk = await Risk.findOne({id:req.params.id})
        res.json({
            object : risk
        })
    }catch(err){
        res.json({
            message: "cannot find"
        })
    }
    
})
// update a risk
router.patch('/:riskId',async(req,res)=>{
    try{
       
        console.log(req.body.updateRisk)
        const updatedRisk = await Risk.updateOne({
            id:req.params.riskId
        },
            req.body.updateRisk
        );
        res.json({
            object: updatedRisk
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})
// submit a risk
router.post('/',async(req,res)=>{
    const risk = new Risk({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        parents: req.body.parents,
        task: req.body.task,
        riskDis : req.body.riskDis
    })
    await risk.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        if(err.code==11000){
            res.json({
                message:"ID duplicated"
            })
        }else{
            res.json({
                message:"validation Error"
            })
        }
    })
})
export default router;