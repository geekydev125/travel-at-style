"use client"
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import clientDetailsFormSchema from '@/validation/clientDetailsFormSchema';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

interface FormData {
    name: string,
    email: string,
}

function ClientDetailsForm() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid, isLoading } } = useForm<FormData>({
        resolver: yupResolver(clientDetailsFormSchema),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: ''
        },
    });

    const onFormSubmit: SubmitHandler<FormData> = (formData: FormData, e) => {
        e?.preventDefault();

        // const response = fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // }).then(res => res.json()).then(data => console.log(data))

        // console.log(response);

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


            <div className='d-flex justify-content-center'>
                <Button variant="primary" type="submit" disabled={!(isDirty && isValid) || isLoading}>
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default ClientDetailsForm