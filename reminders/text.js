const { twilioAPI, daysLate } = require('./_api');

const CLIENTS = JSON.parse(process.env.CLIENTS)

CLIENTS.forEach((CLIENT) => (
  twilioAPI.messages
    .create({
      body: `This is a collections message: your invoice with Ryan Buckley for $546 is now ${daysLate} days late. You can stop these daily reminders by paying your invoice.`,
      from: process.env.TWILIO_MOBILE,
      to: CLIENT.phone,
      statusCallback: 'https://cheque-mate-app.herokauapp.com/api/callBack'
    })
    .then(message => console.log(message))
    .catch(error => console.log('error: ', error))
))
