module.exports = {
    development: {
        client: "postgresql", 
        connection: `postgres://localhost:5432/cars`, 
        migrations: {
            directory: "./server/db/migrations"
        },
        seeds: {
            directory: "./server/db/seeds"
        },
        useNullAsDefault: true
    }
}
