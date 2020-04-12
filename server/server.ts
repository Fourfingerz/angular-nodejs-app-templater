const express = require('express');
const routes = express.Router(); // This is where we pull in the Angular routes

const app = express(); // Allow any method from any host and log requests

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
}); // Handle POST requests that come in formatted as JSON

app.use(express.json());// A default hello word route

app.use('/', routes);

app.listen(4201, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});