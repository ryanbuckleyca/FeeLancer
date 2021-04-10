const { clicksendLetterAPI } = require('./_api');

const CLIENTS = JSON.parse(process.env.CLIENTS)

CLIENTS.forEach((CLIENT) => {
  const recipient = {
    returnAddressId: 0,
    addressName: CLIENT.name,
    addressLine_1: CLIENT.address1,
    addressLine_2: CLIENT.address2,
    addressCity: CLIENT.city,
    addressState: CLIENT.state,
    addressPostalCode: CLIENT.postalCode,
    addressCountry: CLIENT.country
  }
  const postLetter = {
    fileUrl: "https://res.cloudinary.com/ryanbuckleyca/raw/upload/v1603583588/cheque-mate/invoices/rkcqlys2plflsgepupfy.pdf",
    priorityPost: 0,
    recipients: [recipient],
    templateUsed: 0,
    duplex: 0,
    colour: 0,
    source: "sdk"
  }
  
  clicksendLetterAPI.postLettersPricePost(postLetter)
    .then(res => console.log('price letter res:', res.body.response_msg))
    .catch(err => console.error('price letter err:', err.body));
  clicksendLetterAPI.postLettersSendPost(postLetter)
    .then(res => console.log('send letter res:', res.body.response_msg))
    .catch(err => console.error('send letter err:', err.body));
  
  })
