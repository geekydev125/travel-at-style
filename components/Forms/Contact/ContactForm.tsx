"use client"
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { useNotificationContext } from '@/context/notificationContext';
import contactFormSchema, { IContactFormData } from '@/validation/contactFormSchema';

import CustomButton from '@/components/Common/Buttons/CustomButton';
import FormInputField from '@/components/Forms/FormInputField';
import AirplaneLoader from '@/components/Common/Loader/AirplaneLoader';

import Form from 'react-bootstrap/Form';

function ContactForm() {
    const { displayNotification } = useNotificationContext();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid, isLoading } } = useForm<IContactFormData>({
        resolver: yupResolver(contactFormSchema),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
    });

    const onFormSubmit: SubmitHandler<IContactFormData> = (formData: IContactFormData, e) => {
        e?.preventDefault();

        if (formData) {
            setIsSubmitting(true);

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    setIsSubmitting(false);
                    displayNotification(data.message, 'success');
                    reset();
                }).catch(err => {
                    displayNotification(err.message, 'error');
                })
        }
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
                {isSubmitting
                    ? <div>
                        <p className='text-primary display-6 mb-0 fw-semibold'>Submitting your message...</p>
                        <AirplaneLoader showText={false} />
                    </div>
                    : <CustomButton variant='primary' disabled={!(isDirty && isValid) || isLoading || isSubmitting}>Submit</CustomButton>
                }

            </div>
        </Form>
    )
}

export default ContactForm