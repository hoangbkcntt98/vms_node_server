import RiskNet from '../impl/RiskNet.js'
import riskList from './DataSample.js'
import  taskList from './TaskDataSample.js'
import Pert from '../Pert.js'
console.log('start PERT test')
let pert = new Pert(taskList)
pert.updateChildParent()
pert.updatePertProb()
console.log(taskList)