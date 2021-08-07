const { twilioAPI, daysLate } = require('./_api');

var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const CLIENTS = JSON.parse(process.env.CLIENTS)

CLIENTS.forEach((CLIENT) => (
  twilioAPI.messages
    .create({
      body: `This is a collections message: your invoice with Ryan Buckley for $546 is now ${daysLate} days late. You can stop these daily reminders by paying your invoice.`,
      from: process.env.TWILIO_MOBILE,
      to: CLIENT.phone,
      statusCallback: 'https://cheque-mate-app.herokauapp.com/callBack'
    })
    .then(message => console.log(message))
    .catch(error => console.log('error: ', error))
))
