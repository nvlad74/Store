const
    db = require('./db/CRUD_operations'),
    { Chess } = require('chess.js'),
    body_parser = require('body-parser'),
    static_path = require('path').join(__dirname, '../frontend'),
    local_ip = require('os').networkInterfaces()['Беспроводная сеть'][1].address,
    express = require('express'),
    server = express(),
    port = 3000;



server.use('/', (me, his, next) => {
    const
        time = `[${new Date().toLocaleString()}]`,
        info = `Method:\t${me.method},\nIP:\t${me.ip},\nPath:\t${me.url}`;


    if (!me.url.includes('.'))
        console.log(`${time}\n${info}\n`);
    next();
});
server.use(body_parser.urlencoded({ extended: false }));
server.use(express.static(static_path));



server.get('/', (me, his) => {

    his.sendFile(static_path + '/html/registration.html');
});



server.post('/data/registration', async (me, his) => {
    try {
        const
            { name, login, password } = me.body;


        his.send('спасибо, ' + name);
        await db.CreateUser(name, login, password);
        //his.sendFile(static_path + '/html/settings_game.html');
    }
    catch (err) {

        console.error(err);
        his.status(500).send('Ошибка сервера.');
    }
});

//server.post('/data/settings_game', (me, his) => {
//    const
//        { login, password } = me.body;


//    his.sendFile(static_path + '/html/index.html');
//});



server.listen(port, () => {

    console.log(`\nСервер запущен на http://${local_ip}:${port}\n`);
});