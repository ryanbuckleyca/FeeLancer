const { twilioAPI, daysLate } = require('./_api')

const CLIENTS = JSON.parse(process.env.CLIENTS)

CLIENTS.forEach((CLIENT) => (
  twilioAPI.calls
    .create({
      twiml: `<Response><Say>This is a collections message! Your invoice with Ryan Buckley for 546 dollars is now ${daysLate} days late. You can stop these daily reminders by paying your invoice.</Say></Response>`,
      from: process.env.TWILIO_NUMBER,
      to: CLIENT.phone
    })
    .then(call => console.log(call))
    .catch(error => console.log('error: ', error))
))
