"use client"
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import contactFormSchema from '@/validation/contactFormSchema';

import CustomButton from '@/components/CustomButton';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormErrorMessage from './FormErrorMessage';

export interface ContactFormData {
    name: string,
    email: string,
    subject: string,
    message: string
}

function ContactForm() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid, isLoading } } = useForm<ContactFormData>({
        resolver: yupResolver(contactFormSchema),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
    });

    const onFormSubmit: SubmitHandler<ContactFormData> = (formData: ContactFormData, e) => {
        e?.preventDefault();

        const response = fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => console.log(data))

        console.log(response);
    }

    return (
        <Form onSubmit={handleSubmit(onFormSubmit)} data-bs-theme="dark" className='w-100'>
            {/* Name */}
            <FloatingLabel label="Name" controlId="name" >
                <Form.Control isInvalid={errors.name && true} {...register('name')} type="text" placeholder="Enter your name" name='name' />

            </FloatingLabel>
            <FormErrorMessage errors={errors} inputName='name' />

            {/* Email */}
            <FloatingLabel label="Email Address" controlId="email" >
                <Form.Control isInvalid={errors.email && true} {...register('email')} type="email" placeholder="Enter email" name='email' />
            </FloatingLabel>
            <FormErrorMessage errors={errors} inputName='email' />            

            {/* Subject */}
            <FloatingLabel label="Subject" controlId="subject" >
                <Form.Control isInvalid={errors.subject && true} {...register('subject')} type="text" placeholder="Enter subject" name='subject' />
            </FloatingLabel>
            <FormErrorMessage errors={errors} inputName='subject' />

            {/* Message */}
            <FloatingLabel label="Message" controlId="message" >
                <Form.Control isInvalid={errors.message && true} {...register('message')} as='textarea' style={{ height: '100px' }} placeholder="Enter your message" name='message' />
            </FloatingLabel>
            <FormErrorMessage errors={errors} inputName='message' />

            {/* Submit Button */}
            <div className='d-flex justify-content-center mt-3'>
                <CustomButton variant='primary' disabled={!(isDirty && isValid) || isLoading}>Submit</CustomButton>
            </div>
        </Form>
    )
}

export default ContactForm