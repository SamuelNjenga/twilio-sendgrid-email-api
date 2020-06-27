const sgMail = require('@sendgrid/mail')
require('dotenv/config')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: process.env.TO,
  from: process.env.FROM, // Use the email address or domain you verified above
  subject: 'Sending emails  with Twilio SendGrid is so  Fun',
  text: 'It is also easy to do anywhere, even with Node.js',
  html: '<strong>Sending emails as a software engineer is so amazing</strong>'
}
//ES6
sgMail.send(msg).then(
  () => {},
  error => {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
  }
)
