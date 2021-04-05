import { clicksendEmailAPI } from './_api';

const clicksendEmail = 'ryaniscloset@hotmail.com'

// SEND EMAIL
const emailRecipient = {
  email: clicksendEmail,
  name: "Ryan Buckley"
}

// add emails from:
// https://dashboard.clicksend.com/messaging-settings/email/from-addresses
// [ ] billsarebillsarebills@protonmail.ch
// [ ] debtrecoverycrew@protonmail.com
// [ ] overdueaccounts@aol.com
// [ ] invoicecollectionsteam@yahoo.com
// [ ] invoicecollectionsteam@outlook.com
// [ ] pleasecomply@yandex.com
// [ ] mrsherlockholmes@mail.com
// [ ] jessicafletcher@mailfence.com
// *@tutanota.com
// *@excite.com

const emailFrom = {
  // @TODO: get email IDs from API
  emailAddressId: 15721,
  name: "some name that I invented"
}
// const attachment = {
//   content: "ZmlsZSBjb250ZW50cw==",
//   type: "text/plain",
//   filename: "text.txt",
//   disposition: "attachment",
//   contentId: "text"
// }
const email = {
  to: [emailRecipient],
  cc: [emailRecipient],
  bcc: [emailRecipient],
  from: emailFrom,
  subject: "subject",
  body: "body",
  // attachments: [attachment]
}

clicksendEmailAPI.emailSendPost(email)
  .then(res => console.log('send email res:', res.body.response_msg))
  .catch(err => console.error('send email err:', err.body));
