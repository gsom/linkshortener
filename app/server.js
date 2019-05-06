'use strict'
const express = require("express")
const process = require("process")
const config = require('./config')
const bodyParser = require('body-parser')

var shortLinkController = require('./shortLink/shortLinkController');

var app = express()
var router = express.Router();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/*', function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

router.route('/link')
    .post(function (req, res) {
        shortLinkController.createShortLink(req.body, (err, response) => {
            if (err != null) {
                res.status(400)
                res.send()
                return
            }
            res.json(response)
        })
    })

app.use('/api', router);
app.listen(config.app.port, () => {
    console.log('listening port on port ' + config.app.port)
})