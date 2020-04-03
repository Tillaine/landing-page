module.exports = {
    development: {
        client: "postgresql", 
        connection: `postgress://localhost:5432/${database}`, 
        migrations: {
            directory: _dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        }
    }

}