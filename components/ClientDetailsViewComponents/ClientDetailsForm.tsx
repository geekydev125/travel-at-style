"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
import { useCartContext, IClient } from '@/context/cartContext';

interface ICountry {
    name: string,
    code: string,
    dialCode: string
}

interface IUsState {
    name: string,
    code: string
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
    countryDialCode: string,
    phoneNumber: string,
    notes?: string | undefined
}

function ClientDetailsForm() {
    const { cart, setClientDetails } = useCartContext();
    const [countryName, setCountryName] = useState<IClient['country'] | ICountry['name']>(cart.client?.country || 'United States');
    const [usState, setUsState] = useState<IClient['state'] | IUsState['code']>(cart.client?.state || 'AL');
    const [countryDialCode, setCountryDialCode] = useState<IClient['countryDialCode'] | string>(cart.client?.countryDialCode || '(United States) +1');
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isDirty, isValid, isLoading } } = useForm<ClientDetailsFormData>({
        resolver: yupResolver(clientDetailsFormSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: cart.client?.firstName || '',
            lastName: cart.client?.lastName || '',
            email: cart.client?.email || '',
            country: cart.client?.country || countryName,
            addressOne: cart.client?.addressOne || '',
            addressTwo: cart.client?.addressTwo || '',
            city: cart.client?.city || '',
            state: cart.client?.state || usState,
            zipCode: cart.client?.zipCode || '',
            countryDialCode: cart.client?.countryDialCode || countryDialCode,
            phoneNumber: cart.client?.phoneNumber || '',
            notes: cart.client?.notes || ''
        },
    });

    useEffect(() => {
        let country = countries.find((country) => country.name === countryName);
        if (country) {
            setCountryDialCode(`(${country.name}) ${country.dialCode}`);
        }
    }, [countryName])

    const onFormSubmit: SubmitHandler<ClientDetailsFormData> = (formData: ClientDetailsFormData, e) => {
        console.log('formData:', formData)
        e?.preventDefault();

        if (formData) {
            setClientDetails(formData);
            router.push('/checkout/payment')
        }

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
                    <FloatingLabel label="Country Code" controlId='countryDialCode'>
                        <Form.Select {...register('countryDialCode', { onChange: (e) => setCountryDialCode(e.target.value) })} name='countryDialCode' size='lg' value={countryDialCode}>
                            {
                                countries.map((country) => {
                                    return <option key={uniqid()} value={`(${country.name}) ${country.dialCode}`}>({country.name}) {country.dialCode}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.countryDialCode?.message}</p>
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
            <div className='d-flex justify-content-center mt-4'>
                <CustomButton variant='primary' disabled={!(isDirty && isValid) || isLoading} type="submit">Continue to Payment <IconChevronRight /></CustomButton>
            </div>
        </Form>
    )
}

export default ClientDetailsForm