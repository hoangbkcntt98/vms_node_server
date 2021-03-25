var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const seeder = require('mongoose-seed');
const async = require('async');
const Risk = require('../models/Risk');
const RiskDis = require('../models/RiskDis');
const _ = require('lodash');
var faker = require('faker');
let dataDis = new Promise(async(resolve)=>{
    mongoose.connect('mongodb://localhost:27017/wms', {
        useMongoClient: true,
        promiseLibrary: require('bluebird')
    });
    let RiskDisData = await RiskDis.find().select('_id');
    resolve(RiskDisData)
}).then((riskDisData)=>{
    console.log(riskDisData)
    let disData = riskDisData.map(data => data._id)
    console.log(disData)
    let items = [];
    for(i=0; i < 15; i++){
        
        items.push(
            {
                id: i,
                name : faker.commerce.productName(),
                descript : faker.lorem.text(),
                task: faker.random.arrayElement(["A","B","ALL"]),
                riskDis : faker.random.arrayElement(disData),
                parent: "1 2"
            }
        )
    }

    seeder.connect('mongodb://localhost:27017/wms', function() {
        let data = [{
            'model': 'Risk',
            'documents': items
        }] 
        seeder.clearModels(['Risk'], function() {
            seeder.populateModels(data, function() {
            seeder.disconnect();
            });
        });
    });
})

// const getRiskDisData = async()=>{
//     let RiskDisData = await RiskDis.find().select('_id').then(res => {return res});
//     console.log(RiskDisData)
//     return RiskDisData.map(a=> a._id)
// }
// let riskDisData = getRiskDisData()
// console.log(riskDisData)

// new Promise(async(resolve) => {
//     let result = await RiskDis.find()
//     return result
//     // mongoose.connect('mongodb://localhost:27017/wms', {
//     //     useMongoClient: true,
//     //     promiseLibrary:require('bluebird')
//     // });
//     // async.parallel([
//     //     (callback) => {
//     //         RiskDis.find({})
//     //         .exec((err, riskDisId) => {
//     //             callback(null, riskDisId);
//     //         }); 
//     //     },
       
//     // ], 
//     // (err, results) => {
//     //     resolve(results);
//     //     mongoose.connection.close();
//     // }).catch(err=>console.log(err));
// }).then((results) => {
//     console.log(results)
//     return new Promise((resolve) => {
//         let items = [];
//         let status = [1, 2]
//         for(let i=0; i< 150; i++){
//             items.push(
//                 {
//                     id: faker.random.number(),
//                     riskDis : _.sample(results[0])._id,
                    
//                 }
//             );
//         }
//         resolve(items);
//     });
// }).then((items) => {
//     seeder.connect('mongodb://localhost:27017/wms', function() {
//         let data = [{
//             'model': 'Risk',
//             'documents': items
//         }]
//         // seeder.loadModels(['/node-tutorial/models/Risk.js'])
       
//         seeder.clearModels([Risk], function() {
//             seeder.populateModels(data, function() {
//             seeder.disconnect();
//             });
//         });
//      });
// });
