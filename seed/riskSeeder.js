var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const seeder = require('mongoose-seed');
const async = require('async');
const Risk = require('../models/Risk')
const RiskDis = require('../models/RiskDis');
const _ = require('lodash');
var faker = require('faker');
new Promise(async(resolve)=>{
    let RiskDisData = await RiskDis.find().select('_id');
    resolve(RiskDisData)
}).then((riskDisData)=>{
    let disData = riskDisData.map(data => data._id)
    let items = [];
    for(i=0; i < 20; i++){
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
            'model': 'risk',
            'documents': items
        }] 
        seeder.clearModels(['risk'], function() {
            seeder.populateModels(data, function() {
            seeder.disconnect();
            });
        });
    });
}).catch(e=> console.log(e))