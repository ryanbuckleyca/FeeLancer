const { twilioAPI, daysLate } = require('./_api');

const twilioNumber = '+18588793879'
const numbers = [
  '+14384086340', // ryan
  // '+6315135528', // liz
  // '+6316970961', // julie
]

const daysLate = differenceInDays(new Date(), new Date('2020-01-09'))

numbers.forEach((number) => (
  twilioAPI.calls
  .create({
    twiml: `<Response><Say>This is a collections message! Your invoice with Ryan Buckley for 546 dollars is now ${daysLate} days late. You can stop these daily reminders by paying your invoice.</Say></Response>`,
    from: twilioNumber,
    to: number
   })
  .then(call => console.log(call))
  .catch(error => console.log('error: ', error))
))
