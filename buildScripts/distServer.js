import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// local API
// app.get('/users', function (req, res) {
//     res.json([
//         {"id": 1,"firstName":"John","lastName":"Doe","email":"bob@gmail.com"},
//         {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
//         {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
//     ])
// });

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
