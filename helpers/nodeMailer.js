const nodemailer = require('nodemailer');

function sendMail(email) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'findidpair@gmail.com',
        pass: 'qwertyuiop1!'
      }
    });
  
    let mailOptions = {
      from: 'findidpair@gmail.com',
      to: email,
      subject: 'Confirmation for FindAll',
      text: `ini ceritanya proses verivikasi tapi karena abis waktu cuma teks doang deh`
    };
  
    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      console.log('Email sent: ' + info.response);
    });
  }

module.exports = sendMail