
const
    PostgresSQl =
    {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'postgres',
            database: 'Chess_Online'
        }
    },
    MySQL =
    {
        client: 'mysql2',
        connection: {
            host: '1000',
            port: 1000,
            user: 'student14',
            password: 'zkzxm0',
            database: 'student14',
        }
    },
    connect = require('knex')(PostgresSQl);


module.exports = connect;