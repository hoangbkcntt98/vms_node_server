import { Network, Node, Variable, State, Link, TableIterator, Table, RelevanceTreeInferenceFactory } from 'bayes-server';
function BayesianNet(name){
    //init
    this.name = name
    this.bayesianNet = new Network(name)
    this.node = []
    this.matTF = [] // 2 D array
    this.addNode = (name) =>{
        this.bayesianNet.nodes.push(new Node(name,[new State("True"),new State("False")]))
    }
    this.generateTFMatrix = () =>{

    }
    this.addLink = (parent,child) =>{
        this.bayesianNet.links.push(new Link(parent,child))
    }
    this.addCptTable = (nodes,problist) =>{
        // console.log(nodes)
        let tableChildNode = nodes[nodes.length-1].newDistribution().table; 
        let iterChildNode = new TableIterator(tableChildNode,nodes)
        iterChildNode.copyFrom(problist)
        nodes[nodes.length-1].distribution = tableChildNode
    }
    this.getNode = (name) =>{
        return this.bayesianNet.nodes.get(name)
    }
    this.getNodeState = (node,state) =>{
        // console.log(node.variables())
        return node.variables.get(0).states.get(state)
    }
    this.getNet = ()=>{
        return this.bayesianNet
    }


}
export default BayesianNet
// let net = new BayesianNet("test Net")
// let nodes = []
// let problist = []
// net.addNode("A");
// net.addNode("B");
// net.addNode("C");
// net.addNode("D");
// net.addLink(net.getNode("A"), net.getNode("B"));
// net.addLink(net.getNode("A"), net.getNode("C"));
// net.addLink(net.getNode("B"), net.getNode("D"));
// net.addLink(net.getNode("C"), net.getNode("D"));
// // console.log(net.getNode("A"))
// nodes.push(net.getNode("A"));
// let probList = [0.1, 0.9];

// net.addCptTable(nodes, probList);
// nodes =[]
// nodes.push(net.getNode("A"));
// nodes.push(net.getNode("B"));
// probList = [0.2, 0.8, 0.15, 0.85];
// net.addCptTable(nodes, probList);
// nodes =[]
// nodes.push(net.getNode("A"));
// nodes.push(net.getNode("C"));
// probList =[0.3, 0.7, 0.4, 0.6];
// net.addCptTable(nodes, probList);
// nodes =[]
// nodes.push(net.getNode("B"));
// nodes.push(net.getNode("C"));
// nodes.push(net.getNode("D"));
// probList =[0.4, 0.6, 0.55, 0.45, 0.32, 0.68, 0.01, 0.99];
// net.addCptTable(nodes, probList);
// nodes =[]
// let factory = new RelevanceTreeInferenceFactory();
// let inference = factory.createInferenceEngine(net.bayesianNet);
// let queryOptions = factory.createQueryOptions();
// let queryOutput = factory.createQueryOutput();
// // case 1 
// let queryNode = []
// queryNode.push(net.getNode("A"))
// inference.evidence.setState(net.getNodeState(net.getNode("D"),"True"))
// let queryA = new Table(net.getNode("A"))
// inference.queryDistributions.pushDistribution(queryA);
// inference.query(queryOptions, queryOutput); // note that this can raise an exception (see help for details)

// console.log("P(A|D=True) = {" + queryA.get([net.getNodeState(net.getNode("A"),"True")]) + "," + queryA.get([net.getNodeState(net.getNode("A"),"False")]) + "}.");