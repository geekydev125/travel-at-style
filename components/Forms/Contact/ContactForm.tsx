"use client"
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import contactFormSchema from '@/validation/contactFormSchema';

import CustomButton from '@/components/Common/Buttons/CustomButton';
import FormInputField from '@/components/Forms/FormInputField';

import Form from 'react-bootstrap/Form';

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
            <FormInputField label='Name' register={register} inputName='name' type='text' errors={errors} />

            {/* Email */}
            <FormInputField label='Email Address' register={register} inputName='email' type='email' errors={errors} />

            {/* Subject */}
            <FormInputField label='Subject' register={register} inputName='subject' type='text' errors={errors} />

            {/* Message */}
            <FormInputField label='Message' register={register} inputName='message' type='textarea' errors={errors} formControlStyle={{ height: '100px' }} />

            {/* Submit Button */}
            <div className='d-flex justify-content-center mt-3'>
                <CustomButton variant='primary' disabled={!(isDirty && isValid) || isLoading}>Submit</CustomButton>
            </div>
        </Form>
    )
}

export default ContactForm