'use strict'

const Pool = require('pg').Pool
const config = require('../config')

const pool = new Pool(
    config.database
)

const createShortLinkSQL =
    `
    INSERT INTO "ShortLink"
        ("ShortUrl", "FullUrl")
    VALUES
    ($1, $2);
    `
var createShortLink = function (link, callback) {

    pool.query(
        createShortLinkSQL, [
            link.FullUrl, link.ShortUrl
        ],
        (error, results) => {
            if (error) {
                console.error({
                    context: "createShortLinkModel",
                    args: link,
                    err: error
                })
                callback(error, null)
                return
            }
            callback(null, results.rows)
        })
}
module.exports = {
    createShortLink: createShortLink
}