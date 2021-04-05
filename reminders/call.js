const { twilioAPI } = require('./_api');
const { differenceInDays } = require('date-fns')

const twilioNumber = '+18588793879'
const ryanNumber = '+14384086340'

const daysLate = differenceInDays(new Date(), new Date('2020-01-09'))

twilioAPI.calls
  .create({
    twiml: `<Response><Say>This is a collections message! Your invoice with Ryan Buckley for 546 dollars is now ${daysLate} late. </Say></Response>`,
    from: twilioNumber,
    to: ryanNumber
   })
  .then(call => console.log(call))
  .catch(error => console.log('error: ', error))
