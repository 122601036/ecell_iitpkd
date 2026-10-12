import express, { text } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body

app.post('/submit', (req, res) => {
  const { name, email,subject, message } = req.body;
  console.log('Received:', { name, email,subject, message });
  res.json({ success: true });


  // sending the mail
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aryan0312g@gmail.com',
        pass:'ayaexuvllakicvjp'
        // user:'112301041@smail.iitpkd.ac.in',
        // pass:'bstvterxlrchhajn',
    }
  });

  const mailOptions = {
    from :'aryan0312g@gmail.com',
    to:'aryan0312g@gmail.com',
    subject:subject,
    text:message,
    replyTo:email  
  };

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.error("Error occured :",error);

    }
    else{
        console.log("Email sent");
    }
  })
});

app.listen(3000, () => console.log('Server running on port 3000'));