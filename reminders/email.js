const { clicksendEmailAPI, daysLate } = require('./_api');
const { isWednesday } = require('date-fns');
const faker = require('faker')
const words = require('../src/scripts/WORDS.json');

const CLIENTS = JSON.parse(process.env.CLIENTS)

// if (!isWednesday(new Date())) return false

CLIENTS.forEach((CLIENT) => {
  
  // @TODO: get email IDs from API
  // add emails from: https://dashboard.clicksend.com/messaging-settings/email/from-addresses
  // *protonmail.ch
  // *aol.com
  // *yahoo.com
  // *outlook.com
  // *yandex.com
  // *mail.com
  // *@tutanota.com
  // *@excite.com

  const emailIds = [15793, 15794, 15797, 15798, 15799, 15800, 15801] //15795 aol
  const randomEmail = Math.floor(Math.random() * emailIds.length)

  const getWord = (key) => {
    const rand = Math.floor(Math.random() * words[key].length)
    return words[key][rand]
  }

  const USER = {
    emailAddressId: emailIds[randomEmail],
    name: faker.name.firstName() + ' ' + faker.name.lastName()
  }

  // @TODO: use same function as in index page
  const message = `
    ${getWord('greeting')} ${CLIENT.name.split(' ')[0]}
    <br /><br />
    ${getWord('opening')} ${getWord('who')}, I am ${getWord('action')} to ${getWord('inform')} it’s been ${daysLate} days since the initial ${getWord('invoice')} was ${getWord('sent')}.
    Please ${getWord('respond')} to the ${getWord('contact')} in the ${getWord('attachment')} if you ${getWord('need')} ${getWord('help')}.
    <br /><br />
    ${getWord('thanks')},
    <br />
    ${USER.name}
  `

  // const attachment = {
  //   content: "ZmlsZSBjb250ZW50cw==",
  //   type: "text/plain",
  //   filename: "text.txt",
  //   disposition: "attachment",
  //   contentId: "text"
  // }

  const email = {
    to: [CLIENT],
    from: USER,
    subject: getWord('subject'),
    body: message,
    // attachments: [attachment]
  }

  clicksendEmailAPI.emailSendPost(email)
    .then(res => console.log('send email res:', res.body.response_msg))
    .catch(err => console.error('send email err:', err.body));
})
