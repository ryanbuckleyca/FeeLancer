const { twilioAPI, daysLate } = require('./_api');

const twilioNumber = '+14049484569'
const ryanNumber = '+14384086340'

twilioAPI.messages
  .create({
    body: `This is a collections message: your invoice with Ryan Buckley for $546 is now ${daysLate} days late. You can stop these daily reminders by paying your invoice.`,
    from: twilioNumber,
    to: ryanNumber
  })
  .then(message => console.log(message))
  .catch(error => console.log('error: ', error))
