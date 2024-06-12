import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();
  console.log(response);
  try {
    const { data, error } = await resend.emails.send({
        from: 'fileshare@raiyananwar.com',
        to: [response.emailToSend],
        subject: "Ryan",
        react: EmailTemplate({ response }),
    });
    
    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {

    return Response.json({ error }, { status: 500 });
  }
}
