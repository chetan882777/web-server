const request = require("request")

const forecast = function (latitude, longitude, callback) {

    const url = "https://api.darksky.net/forecast/00439f7d715fa0ba1182b356d313eb02/" +latitude + ","  + longitude + ""

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find coordinates. Try another search', undefined)
        } else {
            callback(undefined , {
                data : body.currently.summary + " through out day. It is currently " + body.currently.temperature + " degrees out. There is " + body.currently.precipProbability + "% chance of rain."
            })
        }
    })
}

module.exports = forecast