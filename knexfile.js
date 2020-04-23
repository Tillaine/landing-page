module.exports = {
    development: {
        client: "postgresql", 
        connection: {
            host: 'ec2-3-15-208-167.us-east-2.compute.amazonaws.com',
            database: `cars`, 
            user: 'davide',
            password: 'jw8s0F4'
        },
        migrations: {
            directory: "./server/db/migrations"
        },
        seeds: {
            directory: "./server/db/seeds"
        },
        pool: {min:5, max: 100},
        useNullAsDefault: true
    }
}
