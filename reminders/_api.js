import { resolve } from 'path';
import { PostLetterApi, TransactionalEmailApi } from 'clicksend/api.js';

require('dotenv').config({
  path: resolve(__dirname, '../.env')
});

const clicksendUser = process.env.CLICKSEND_USER
const clicksendKey = process.env.CLICKSEND_KEY
const clicksendLetterAPI = new PostLetterApi(clicksendUser, clicksendKey);
const clicksendEmailAPI = new TransactionalEmailApi(clicksendUser, clicksendKey);

const twilioSID = process.env.TWILIO_ACCOUNT_SID;
const twilioToken = process.env.TWILIO_AUTH_TOKEN;
const twilioAPI = require('twilio')(twilioSID, twilioToken);

export default {
  clicksendLetterAPI,
  clicksendEmailAPI,
  twilioAPI
}
