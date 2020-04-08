const db = require("../pgDB.js"); // importing the db config


const getCarPostgres = (id) => {
    
    return db.select('*')
    .from('cars')
    .where({id})

}

const updatePg = (id, updates) => {
    
    return db('cars')
    .where({id: id})
    .update(updates)


}



module.exports = { updatePg, getCarPostgres }