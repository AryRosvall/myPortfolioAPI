const config = require('../../../config');
const nodemailer = require('nodemailer');

module.exports = function () {

  function sendEmail(content) {

    const transporter = nodemailer.createTransport({
      service: config.email.service,
      auth: {
        user: config.email.user,
        pass: config.email.password,
      }
    });

    let message = {
      from: content.from,
      to: content.to,
      subject: content.subject,
      text: content.message,
      html: content.html
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (err, info) => {
        if (err) {
          reject(err);
        }
        resolve(info.messageId)
      });
    })
  }

  return {
    sendEmail
  }
}