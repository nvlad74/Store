
const
    db = require('./knex');


module.exports =
{
    async CreateUser(name, login, password) { return db('Players').insert({ user_name: name, user_login: login, hash_password: password }); },
    //async CreateGame() { return db('Games').insert({  }); },
    //async CreateMoves() { return db('Moves').insert({  }); },
    CloseDaBase() { db.destroy().then(() => console.log('Соединение закрыто.')).catch(err => console.error('Ошибка: ', err)); }
};