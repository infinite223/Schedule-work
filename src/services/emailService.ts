import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
require('dotenv').config()

const ses = new SESClient({
    region: process.env.AWS_SES_REGION
});

function createSendEmailCommand(
  toAddress: string,
  fromAddress: string,
  message: string
) {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },
    Source: fromAddress,
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Your one-time password',
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: message,
        },
      },
    },
  });
}

export async function sendEmailToken(email: string, token: string) {
    const message = `Your one time password is ${token}`
    const command = createSendEmailCommand(email, "dawidszmigiel9@gmail.com", message)
    
    try {
        return await ses.send(command)
    } catch (e) {
        console.log(e)
        return e
    }
}

