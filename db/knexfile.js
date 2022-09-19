module.exports = {
        client: 'mysql',
        connection: {
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            migrations: {
                directory: __dirname + '/migrations'
            },
            seeds: {
                directory: __dirname + '/seeds'
            }
    }
}