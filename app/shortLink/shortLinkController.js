'use strict'
const shortLinkModel = require('./shortLinkModel')

var createShortLink = function (request, callback) {
    //add check if link not a json
    //add check if link has no FullUrl
    //add check if FullUrl is a url at all
    //add extra buisness logic here
    //add FullUrl length validation

    let shortLink = {
        ShortUrl: generateShortLink(),
        FullUrl: request.FullUrl,
    }

    shortLinkModel.createShortLink(shortLink, (err, res) => {
        //fixme add proper error validation
        //add retry logic
        callback(err, shortLink)
    })
}

var generateShortLink = function () {
    //fixme add logic to generate short link taking into account what already exists in database
    return Math.random().toString(36).substring(7);
}
module.exports = {
    createShortLink: createShortLink
}