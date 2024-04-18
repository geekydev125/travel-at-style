import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

interface ContactFormData {
    name: string,
    email: string,
    subject: string,
    message: string
}

export async function POST(req: Request, res: Response) {
    // Data validation
    // Error handling

    const { name, email, subject, message }: ContactFormData = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_FROM_PASSWORD,
        },
        from: process.env.EMAIL_FROM,
        tls: {
            rejectUnauthorized: false,
        },
    });

    const output = `
    <h2>You have a new contact form submission on Travel @ Style!</h2>
    <h3>Submission Details</h3>
    <ul>
        <li><b>Name:</b> ${name}</li>
        <li><b>Email address:</b> ${email}</li>
        <li><b>Subject:</b> ${subject}</li>
        <li><b>Message:</b> ${message}</li>
    </ul>
    `;

    const options = {
        from: `Travel @ Style <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: 'Travel @ Style contact form submission',
        text: 'Travel @ Style contact form submission',
        html: output,
    }

    try {
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        const sendMail = await transporter.sendMail(options);

        // transporter.verify(function (err, success) {
        //     if (err) {
        //         console.log('err', err);

        //         return NextResponse.json({ message: 'An error occurred while attempting to process your message.' }, { status: 500 })

        //     } else {
        //         console.log('Message sent: %s', sendMail.messageId);
        //         return NextResponse.json({ success: success }, { status: 200 })
        //     }
        // });

        return NextResponse.json({ message: 'Message sent successfully' });
    } catch (error) {
        console.log(error);
    }

}