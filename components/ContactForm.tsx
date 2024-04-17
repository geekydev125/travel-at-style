"use client"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import contactFormSchema from '@/validation/contactFormSchema';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

interface IContactForm {
    name: string,
    email: string,
    subject: string,
    message: string
}

function ContactForm() {
    const { register } = useForm<IContactForm>({
        resolver: yupResolver(contactFormSchema)
    });


    return (
        <Form data-bs-theme="dark" className='w-100'>
            <FloatingLabel className='mb-3' label="Name" controlId="name" >
                <Form.Control {...register('name')} type="text" placeholder="Enter your name" name='name' id="name" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' label="Email Address" controlId="email" >
                <Form.Control {...register('email')} type="email" placeholder="Enter email" name='email' id="email" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' label="Subject" controlId="subject" >
                <Form.Control {...register('subject')} type="text" placeholder="Enter subject" name='subject' id="subject" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' label="Message" controlId="message" >
                <Form.Control {...register('message')} as='textarea' style={{ height: '100px' }} placeholder="Enter your message" name='message' id="message" />
            </FloatingLabel>

            <div className='d-flex justify-content-center'>
                <Button variant="primary" type="submit" className=''>
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default ContactForm