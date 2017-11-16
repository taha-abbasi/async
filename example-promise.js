// function doWork (data, callback) {
//     callback('done');
// }
//
// function doWorkPromise (data) {
//     return new Promise(function (resolve, reject) {
//         resolve('everything worked!');
//         // reject({
//         //     error: 'something bad happened'
//         // });
//     });
// }
//
// doWorkPromise('some data').then(function (data) {
//     console.log(data);
// });
//

var request = require('request');

function getWeather (location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?appid=7e3f1dd378bef34937935f0128e0a29c&q=' + encodedLocation + '&type=like&units=imperial';


        if (!location) {
            return reject('No location provided');
        }

        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('Unable to fetch weather');
            } else {
                if (body.cod === '404') {
                    return callback(body.message);
                }
                // console.log(JSON.stringify(body, null, 4));
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
            }
        });
    });
}

getWeather('Philadelphia').then(function (currentWeather) {
    console.log(currentWeather);
}, function (error) {
    console.log(error);
});