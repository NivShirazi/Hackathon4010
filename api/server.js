const express = require('express');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions))

  
  const accountSid = 'AC252454c41bdd8a7e1e161c9b9c3f5987';
  const authToken = '8b203217f58c5c8ad02296c256e1b501';
  const from = 'whatsapp:+17275945568';
  const msg = `שלום שגריר יקר,
  נמצאת מתאים לעזור למעיין בתחום העיצוב.
  נשמח אם תוכל לעזור לה ולשפר את תוכנית Lead.
  ליצירת קשר - 0535318117`
  const client = require('twilio')(accountSid, authToken);
  app.get('/', (req, res) => {
    sendSms();
    sendWhatsapp();
    res.send('Successful response.');
  });
 const sendWhatsapp = () => client.messages
        .create({body: msg, from: 'whatsapp:+14155238886', to: 'whatsapp:+972509595094'})
        .then(message => console.log("send msg " + message.sid));

const sendSms = () => client.messages
      .create({body: msg, from: '+17275945568', to: '+972509595094'})
      .then(message => console.log(message.sid));
app.listen(3000, () => console.log('Example app is listening on port 3000.'));