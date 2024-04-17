"use client"
import React, { BaseSyntheticEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import contactFormSchema from '@/validation/contactFormSchema';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

interface FormData {
    name: string,
    email: string,
    subject: string,
    message: string
}

function ContactForm() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<FormData>({
        resolver: yupResolver(contactFormSchema),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
    });

    const onFormSubmit:SubmitHandler<FormData> = (formData: FormData, e) => {
        e?.preventDefault();
        
        console.log(formData);
    }


    return (
        <Form onSubmit={handleSubmit(onFormSubmit)} data-bs-theme="dark" className='w-100'>
            
            <FloatingLabel className='' label="Name" controlId="name" >
                <Form.Control isInvalid={errors.name && true} {...register('name')} type="text" placeholder="Enter your name" name='name' />
                
            </FloatingLabel>
            <p className="text-danger mb-2">{errors.name && errors.name.message}</p>

            <FloatingLabel className='' label="Email Address" controlId="email" >
                <Form.Control isInvalid={errors.email && true} {...register('email')} type="email" placeholder="Enter email" name='email' />
            </FloatingLabel>
            <p className="text-danger mb-2">{errors.email && errors.email.message}</p>


            <FloatingLabel className='' label="Subject" controlId="subject" >
                <Form.Control isInvalid={errors.subject && true} {...register('subject')} type="text" placeholder="Enter subject" name='subject' />
            </FloatingLabel>
            <p className="text-danger mb-2">{errors.subject && errors.subject.message}</p>

            <FloatingLabel className='' label="Message" controlId="message" >
                <Form.Control isInvalid={errors.message && true} {...register('message')} as='textarea' style={{ height: '100px' }} placeholder="Enter your message" name='message' />
            </FloatingLabel>
            <p className="text-danger mb-2">{errors.message && errors.message.message}</p>

            <div className='d-flex justify-content-center'>
                <Button variant="primary" type="submit" disabled={!(isDirty && isValid)}>
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default ContactForm