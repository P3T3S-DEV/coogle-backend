'use strict';

const express = require("express");
require("express-async-errors");

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
const socketIO = require("socket.io");


const routes = require('./src/routes');
const {PORT, MONGO_URI} = require('./src/config')

const app = express();
const appRoutes = express.Router();

appRoutes
    .use(morgan('dev'))
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(express.static('public'));

appRoutes.use('/api', routes);

app.use(appRoutes);

mongoose.set("useCreateIndex", true);
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});

const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Database conected");
    });

const server = app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
});

const io = socketIO(server);

io.on('connection', (socket)=>{
    console.log('new connection');

    socket.emit('test event', "some data loaded");
});




