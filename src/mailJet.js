const dotenv = require('dotenv')
dotenv.config()
const{MAILJET_API_ID,MAILJET_API_SECRET}=process.env

const mailjet = require ('node-mailjet')
.connect(MAILJET_API_ID,MAILJET_API_SECRET)
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "amadoudieye49@gmail.com",
        "Name": "Amadou"
      },
      "To": [
        {
          "Email": "amadoudieye49@gmail.com",
          "Name": "Amadou"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
