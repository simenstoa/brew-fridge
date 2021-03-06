
var request = require('request');

var deviceId = process.env.PHOTON_ID_1;
var token = process.env.PHOTON_TOKEN_1;
var photonUrl = "https://api.particle.io/v1/devices/";
// Set the headers
var headers = {
   'Authorization':       "Bearer " + token,
}

// Configure the request
var options = {
   url: photonUrl + deviceId + "/temp",
   method: 'GET',
   headers: headers,
}


function getTemperature(callback) {
  request(options, function (error, response, body) {
    if(error){
      console.log("Photon error: /n" +error);
    }
     if (!error && response.statusCode == 200) {
         // Print out the response body
         var data = JSON.parse(body);
         console.log(data.result);
         callback(data.result);
     }
  })

}


module.exports.getTemperature = getTemperature;
