'use strict'
const shortLinkModel = require('./shortLinkModel')
const config = require('../config')


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
        callback(err, shortLink.ShortUrl)
    })
}

var getShortLink = function (shortenedPart, callback) {
    let ShortUrl = config.appDomain + "/" + shortenedPart
    shortLinkModel.getShortLinkByShortUrl(ShortUrl, (err, res) => {
        if (err) {
            callback(err, null)
            return
        }
        if (res != null && res.length > 0) {
            callback(null, res[0].FullUrl)
            return
        }
        callback("can not find url", null)
    })
}

var generateShortLink = function () {
    //fixme add logic to generate short link taking into account what already exists in database
    return config.appDomain + "/" + Math.random().toString(36).substring(7);
}
module.exports = {
    createShortLink: createShortLink,
    getShortLink: getShortLink
}