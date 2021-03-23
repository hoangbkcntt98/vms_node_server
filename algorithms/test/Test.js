import RiskNet from '../impl/RiskNet.js'
import riskList from './DataSample.js'
import Array2d from 'array-2d'
// Test Risk Net
let riskNet = new RiskNet('riskNet',riskList)
riskNet.init()
riskNet.updateProb()
let risks = riskNet.getRiskList()
risks.forEach(element => {
    console.log(element.prob)
});