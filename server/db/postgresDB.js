const db = require("../pgDB.js"); // importing the db config


const updates = {
    "price": 4286,
    "feature_one": "hand sanitizer"
}

const getCarPostgres = (id) => {
    
    return db.select('*')
    .from('cars')
    .where({id: 1})

}

const updatePg = (id, updates) => {
    
    return db('cars')
    .where({id: 1})
    // .update(updates)
    .then(car => console.log(car))
    .catch(err => console.log(err))

}
updatePg(1, updates)
// getCarPostgres()

module.exports = { updatePg, getCarPostgres }