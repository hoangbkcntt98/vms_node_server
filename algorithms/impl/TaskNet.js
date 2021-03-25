import BayesianNet from '../BayesianNetwork.js'
import product from 'cartesian-product'
import { Node, Table } from 'bayes-server';
class TaskNet extends BayesianNet{
    constructor(name,probList){ // probList = [[Duration_Prob],RiskNode_Prob,TaskNode_Prob]
        this.name = name
        this.probList = probList// contain task prob and risk prob
    }
    init(){
        const DURATION =0
        const TASKNODE =2
        const RISKNODE =1
        let nodes  = []
        this.addNode("Duration")// child node
        this.addNode("RiskNode")// bayesian network
        this.addNode("TaskNode")// task node
       
        
        // add Link
        this.addLink(this.getNode("TaskNode"),this.getNode("Duration"))
        this.addLink(this.getNode("RiskNode"),this.getNode("Duration"))
        nodes = [...nodes,this.getNode("TaskNode")]
        nodes = [...nodes,this.getNode("RiskNode")]
        nodes = [...nodes,this.getNode("Duration")]
        this.nodes = nodes
        // add cpt table
        this.addCptTable([this.getNode("RiskNode")],[probList[RISKNODE],1-probList[RISKNODE]])
        this.addCptTable([this.getNode("TaskNode")],[probList[TASKNODE],1-probList[TASKNODE]])
        this.addCptTable(nodes,probList[DURATION])

    }
    generateTFMatrix(){
        this.TRUE = 'True'
        this.FALSE = 'False'
        for(let node of this.nodes){
            let states = []       
            states = [...states,this.getNodeState(node,this.TRUE)]
            states = [...states,this.getNodeState(node,this.FALSE)]
            stateIter = [...stateIter,states]
        }
        this.TFMatrix = product(stateIter)
    }
    calcProb(){

    }
}