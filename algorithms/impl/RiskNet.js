const BayesianNet = require('../BayesianNetwork')
const product = require('cartesian-product')
const {Node,Table} = require('bayes-server')
class RiskNet extends BayesianNet{
    constructor(name,riskList){
        super(name)
        this.riskList = riskList
    }
    
    init(){
        for(var risk of this.riskList){
            this.addNode(risk.id.toString())
        }
        for(var risk of this.riskList){
            this.generateNodeInfo(risk)
        }
        
    }
    generateNodeInfo(risk){
        // console.log(`generating node info`)
        let nodes = []
        let childNode = this.getNode(risk.id.toString())
        if(risk.parentList.length!=0&& risk.parentList!= undefined){
            for(let par of risk.parentList){
                nodes = [...nodes,this.getNode(par.id.toString())]
                // this.addLink(par.id,risk.toString())
            }
            nodes = [...nodes,childNode]
            for(let node of nodes ){
                if(node!=childNode)
                this.addLink(node,childNode)
                
            }
        }else{
            // console.log(risk.id+"empty")
            nodes = [...nodes,childNode]
        }
        // console.log(nodes.length)
        // console.log(risk.riskDis.probs)
        this.addCptTable(nodes,risk.riskDis.probs)
    }
    generateTFMatrix(risk){
        this.TRUE = 'True'
        this.FALSE = 'False'
        // console.log(`generate matrix risk ${risk.id}`)
        let risks = []
        if(risk.parentList.length!=0){
            risk.parentList.forEach(par =>{
                risks = [...risks,par]
            })
        }
        risks = [...risks,risk]
        let stateIter = []
        for(let r of risks){
            let states = []
            let node = this.getNode(r.id.toString())
            states = [...states,this.getNodeState(node,this.TRUE)]
            states = [...states,this.getNodeState(node,this.FALSE)]
            stateIter = [...stateIter,states]
        }
        this.TFMatrix = product(stateIter)
    }
    calcProb(risk){
        if(risk.parentList.length==0){
            return risk.riskDis.probs[0]
        }
        this.generateTFMatrix(risk)
        this.initEngine()
        let childNode  = this.getNode(risk.id.toString())
        let nodes = [] // contain node and its parents
        for(let par of risk.parentList){
            nodes = [...nodes,this.getNode(par.id.toString())]
        }
        nodes = [...nodes,childNode]
        let result = 0;
        let row = this.TFMatrix.length
        let col = this.TFMatrix[0].length
        for(let rowState of this.TFMatrix){
            // console.log(this.TFMatrix[row].length)
            try{
               
                let queryRow = new Table(nodes)
                this.inference.queryDistributions.pushDistribution(queryRow) 
                this.inference.query(this.queryOptions,this.queryOutput)
                
                if(rowState[col-1]==this.getNodeState(childNode,this.TRUE)){
                    result+=queryRow.get(rowState)
                }
            }catch(err){
                console.log(err)
            }
        }
        return result;
        
    }
    updateProb(){
        for(let risk of this.riskList){
            risk.prob = this.calcProb(risk)
        }
    }
    getRiskList(){
        return this.riskList
    }

}
module.exports = RiskNet;
// export default RiskNet;
