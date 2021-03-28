const riskSeeder = require('./riskSeeder.js')
async function dbSeeder(){
    await riskSeeder()
}