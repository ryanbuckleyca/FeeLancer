const { clicksendEmailAPI } = require('./_api');
const faker = require('faker')
const words = require('WORDS.json');

// add emails from:
// https://dashboard.clicksend.com/messaging-settings/email/from-addresses
// [ ] billsarebillsarebills@protonmail.ch
// [ ] debtrecoverycrew@protonmail.com
// [ ] overdueaccounts@aol.com
// [ ] invoicecollectionsteam@yahoo.com
// [ ] invoicecollectionsteam@outlook.com
// [ ] pleasecomply@yandex.com
// [ ] mrsherlockholmes@mail.com
// [ ] recoveryteam@mail.com
// [ ] jessicafletcher@mailfence.com
// *@tutanota.com
// *@excite.com

const emailIds = [15793, 15794, 15795, 15797, 15798, 15800, 15801]
const randomEmail = Math.floor(Math.random() * emailIds.length)

const getWord = (key) => {
  const rand = Math.floor(Math.random() * words[key].length)
  return words[key][rand]
}

// @TODO: get email IDs from API
const USER = {
  emailAddressId: emailIds[randomEmail],
  name: faker.name.firstName() + ' ' + faker.name.lastName()
}

const CLIENT = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: 'ryanbuckley@gmail.com',
  dueDate: new Date('January 8, 2020')
}

const message = `
${getWord('greeting')} ${CLIENT.name}
\n\n
${getWord('opening')} ${getWord('who')}, I am ${getWord('action')} to ${getWord('inform')} it’s been ${TIME_SINCE} since the initial ${getWord('invoice')} was ${getWord('sent')}. 
Please ${getWord('respond')} to the ${getWord('contact')} in the ${getWord('attachment')} if you ${getWord('need')} ${getWord('help')}.
\n\n
${getWord('thanks')}
\n
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
  bcc: [{ name: 'Ryan Buckley', email: 'ryanbuckley@gmail.com' }],
  from: USER.email,
  subject: getWord('subject'),
  body: message,
  // attachments: [attachment]
}

clicksendEmailAPI.emailSendPost(email)
  .then(res => console.log('send email res:', res.body.response_msg))
  .catch(err => console.error('send email err:', err.body));
