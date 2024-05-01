"use client"
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import uniqid from 'uniqid';
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import clientDetailsFormSchema from '@/validation/clientDetailsFormSchema';

import countries from '@/data/countries.json';
import usStates from '@/data/usStates.json';

import CustomButton from '@/components/CustomButton';
import ClientDetailsFormInput from '@/components/ClientDetailsViewComponents/ClientDetailsFormInput';
import IconChevronRight from '@/components/Icons/IconChevronRight';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Country {
    name: string,
    code: string,
    dialCode: string
}

export interface ClientDetailsFormData {
    firstName: string,
    lastName: string,
    email: string,
    country: string,
    addressOne: string,
    addressTwo?: string | undefined,
    city: string,
    state?: string | undefined,
    zipCode: string,
    countryCode: string,
    phoneNumber: string,
    notes?: string | undefined
}

function ClientDetailsForm() {
    const [countryName, setCountryName] = useState<Country['name']>('United States');
    const [usState, setUsState] = useState<string>('AL');
    const [countryDialCode, setCountryDialCode] = useState<string>('');

    const { register, handleSubmit, formState: { errors, isDirty, isValid, isLoading } } = useForm<ClientDetailsFormData>({
        resolver: yupResolver(clientDetailsFormSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            country: countryName,
            addressOne: '',
            addressTwo: '',
            city: '',
            state: usState,
            zipCode: '',
            countryCode: countryDialCode,
            phoneNumber: '',
            notes: ''
        },
    });

    useEffect(() => {
        let country = countries.find((country) => country.name === countryName);
        if (country) {
            setCountryDialCode(`(${country.name}) ${country.dialCode}`);
        }
    }, [countryName])

    const onFormSubmit: SubmitHandler<ClientDetailsFormData> = (formData: ClientDetailsFormData, e) => {
        e?.preventDefault();

        console.log(formData);

        let allGood = true;
        if (allGood) {
            redirect('/checkout/payment')
        }

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
            {/* First Name/Last Name */}
            <Row className='gx-2'>
                <Col md={6}>
                    {/* First Name */}
                    <ClientDetailsFormInput label='First Name' type='text' register={register} name='firstName' errors={errors} />
                </Col>

                <Col md={6}>
                    {/* Last Name */}
                    <ClientDetailsFormInput label='Last Name' type='text' register={register} name='lastName' errors={errors} />
                </Col>
            </Row>

            {/* Email Address */}
            <ClientDetailsFormInput label='Email Address' type='email' register={register} name='email' errors={errors} />

            {/* Country/City/State */}
            <Row className='gx-2'>
                <Col md={countryName === 'United States' ? 4 : 6}>
                    {/* Country */}
                    <FloatingLabel label="Country" controlId='country'>
                        <Form.Select {...register('country', { onChange: (e) => setCountryName(e.target.value) })} name='country' size='lg' value={countryName}>
                            {
                                countries.map((country) => {
                                    return <option key={uniqid()} value={country.name}>{country.name}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.country?.message}</p>
                </Col>

                <Col md={countryName === 'United States' ? 4 : 6}>
                    {/* City */}
                    <ClientDetailsFormInput label='City' type='text' register={register} name='city' errors={errors} />
                </Col>

                {
                    countryName === 'United States' && (
                        <Col md={4}>
                            {/* State */}
                            {/* Make it conditional depending on the country */}
                            <FloatingLabel label="State" controlId='state'>
                                <Form.Select {...register('state', { onChange: (e) => setUsState(e.target.value) })} name='state' size='lg' value={usState}>
                                    {
                                        usStates.map((state) => {
                                            return <option key={uniqid()} value={state.code}>{state.name}</option>
                                        })
                                    }
                                </Form.Select>
                            </FloatingLabel>
                            <p className="text-danger mb-2">{errors.state?.message}</p>
                        </Col>
                    )
                }
            </Row>

            {/* Address 1/Address 2/ZIP code */}
            <Row className='gx-2'>
                <Col md={5}>
                    {/* Address 1 */}
                    <ClientDetailsFormInput label='Address' type='text' register={register} name='addressOne' errors={errors} />
                </Col>
                <Col md={5}>
                    {/* Address 2 */}
                    <ClientDetailsFormInput label='Apartment, suite, etc. (optional)' type='text' register={register} name='addressTwo' errors={errors} />
                </Col>

                <Col md={2}>
                    {/* ZIP Code */}
                    <ClientDetailsFormInput label='ZIP code' type='text' register={register} name='zipCode' errors={errors} />
                </Col>
            </Row>

            {/* Country code/Phone number */}
            <Row className='gx-2'>
                <Col md={3}>
                    {/* Country code */}
                    {/* Make it controlled depending on the country */}
                    <FloatingLabel label="Country Code" controlId='countryCode'>
                        <Form.Select {...register('countryCode', { onChange: (e) => setCountryDialCode(e.target.value) })} name='countryCode' size='lg' value={countryDialCode}>
                            {
                                countries.map((country) => {
                                    return <option key={uniqid()} value={`(${country.name}) ${country.dialCode}`}>({country.name}) {country.dialCode}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.countryCode?.message}</p>
                </Col>
                <Col md={9}>
                    {/* Phone Number */}
                    <ClientDetailsFormInput label='Phone Number' type='text' register={register} name='phoneNumber' errors={errors} />
                </Col>
            </Row>

            {/* Notes */}
            <FloatingLabel label="Notes" controlId="notes" >
                <Form.Control as='textarea' style={{ height: '100px' }} isInvalid={errors.notes && true} {...register('notes')} type="text" name='notes' />
            </FloatingLabel>
            <p className="text-danger mb-2">{errors.notes?.message}</p>

            {/* Submit button */}
            <div className='d-flex justify-content-center'>
                <CustomButton variant='primary' disabled={!(isDirty && isValid) || isLoading} type="submit">Continue to Payment <IconChevronRight /></CustomButton>
            </div>
        </Form>
    )
}

export default ClientDetailsForm