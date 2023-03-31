const { Sequelize } = require("sequelize")


const sequelize = new Sequelize("db_study_app", 'postgres', 'rei12roma',{
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'

})
const testConnection = function(){
    try {
        sequelize.authenticate()
        console.log('connection con exito')
    } catch (error) {
        console.log("hay errores")
    }

}
testConnection()
module.exports = {Sequelize, sequelize}