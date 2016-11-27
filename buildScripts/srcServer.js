import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publickPath: config.output.publicPath
}))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
    res.json([
        {
            "id": "1",
            "name": "Selena Simpson",
            "gender": "female",
            "email": "selenas@xinware.com",
            "phone": "+1 (949) 491-3286",
        },
        {
            "id": "2",
            "name": "John Doe",
            "gender": "male",
            "email": "john@ware.com",
            "phone": "+1 (949) 491-5256",
        },
        {
            "id": "3",
            "name": "Jane Doe",
            "gender": "female",
            "email": "jane@ware.com",
            "phone": "+1 (949) 491-5556",
        }
    ])
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
