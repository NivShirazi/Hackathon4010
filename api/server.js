const express = require('express');
require('dotenv').config()
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions))

  
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromSms = process.env.TWILIO_PHONE_NUMBER_SMS;
  const fromWA = process.env.TWILIO_PHONE_NUMBER_WHATSAPP;
  const msg = `שלום שגריר יקר,
  נמצאת מתאים לעזור למעיין בתחום העיצוב.
  נשמח אם תוכל לעזור לה ולשפר את תוכנית Lead.
  ליצירת קשר - 0535318117`
  console.log("id " + accountSid);
  const client = require('twilio')(accountSid, authToken);
  app.get('/', (req, res) => {
    sendSms();
    sendWhatsapp();
    res.send('Successful response.');
  });
 const sendWhatsapp = () => client.messages
        .create({body: msg, from: fromWA, to: 'whatsapp:+972509595094'})
        .then(message => console.log("send msg " + message.sid));

const sendSms = () => client.messages
      .create({body: msg, from: fromSms, to: '+972509595094'})
      .then(message => console.log(message.sid));
app.listen(3000, () => console.log('Example app is listening on port 3000.'));