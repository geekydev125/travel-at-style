import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import contactFormSchema, { IContactFormData } from '@/validation/contactFormSchema';
import { ObjectSchema } from 'yup';

interface ContactFormData {
    contactFormSchema: any;
    name: string,
    email: string,
    subject: string,
    message: string
}

export async function POST(req: NextRequest, res: NextResponse) {

    const body: ContactFormData = await req.json();
    try {
        await (contactFormSchema as ObjectSchema<IContactFormData>).camelCase().validate(body, {
            abortEarly: false,
            strict: true
        });

        const { name, email, subject, message } = body;

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
            </ul>`;


        const options = {
            from: `Travel @ Style <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_TO,
            subject: 'Travel @ Style contact form submission',
            text: 'Travel @ Style contact form submission',
            html: output,
        }

        transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Server is ready to take our messages");
            }
          });

        const info = await transporter.sendMail(options);

        if(info) {
            return NextResponse.json({ status: 200, message: `Message sent successfully: %s ${info.messageId}` });
        } else {
            return NextResponse.json({ status: 500, message: 'An error occurred while attempting to process your message.' });
        }
    } catch (error: any) {
        return NextResponse.json({ status: 400, error })
    }
}