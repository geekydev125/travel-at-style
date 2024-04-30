"use client"
import uniqid from 'uniqid';
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import clientDetailsFormSchema from '@/validation/clientDetailsFormSchema';

import countries from '@/data/countries.json';
import usStates from '@/data/usStates.json';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomButton from '../CustomButton';

interface FormData {
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
    const { register, handleSubmit, formState: { errors, isDirty, isValid, isLoading } } = useForm<FormData>({
        resolver: yupResolver(clientDetailsFormSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            addressOne: '',
            addressTwo: '',
            city: '',
            state: '',
            zipCode: '',
            countryCode: '',
            phoneNumber: '',
            notes: ''
        },
    });

    const onFormSubmit: SubmitHandler<FormData> = (formData: FormData, e) => {
        e?.preventDefault();

        console.log(formData);

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
        <Form onSubmit={handleSubmit(onFormSubmit)} data-bs-theme="light" className='w-100'>
            <Row className='gx-2'>
                <Col md={6}>
                    {/* First Name */}
                    <FloatingLabel label="First Name" controlId="firstName" >
                        <Form.Control isInvalid={errors.firstName && true} {...register('firstName')} type="text" name='firstName' />

                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.firstName && errors.firstName.message}</p>
                </Col>

                <Col md={6}>
                    {/* Last Name */}
                    <FloatingLabel label="Last Name" controlId="lastName" >
                        <Form.Control isInvalid={errors.lastName && true} {...register('lastName')} type="text" name='lastName' />
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.lastName && errors.lastName.message}</p>
                </Col>
            </Row>

            {/* Email Address */}
            <FloatingLabel label="Email Address" controlId="email" >
                <Form.Control isInvalid={errors.email && true} {...register('email')} type="email" name='email' />
            </FloatingLabel>
            <p className="text-danger mb-2">{errors.email && errors.email.message}</p>

            <Row className='gx-2'>
                <Col md={4}>
                    {/* Country */}
                    <FloatingLabel label="Country" controlId='country'>
                        <Form.Select {...register('country')} name='country' size='lg' defaultChecked={true} >
                            {
                                countries.map((country) => {
                                    return <option key={uniqid()} value={country.code}>{country.name}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.country && errors.country.message}</p>
                </Col>

                <Col md={4}>
                    {/* City */}
                    <FloatingLabel label="City" controlId="city" >
                        <Form.Control isInvalid={errors.city && true} {...register('city')} type="text" name='city' />
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.city && errors.city.message}</p>
                </Col>

                <Col md={4}>
                    {/* State */}
                    {/* Make it conditional depending on the country */}
                    <FloatingLabel label="State" controlId='state'>
                        <Form.Select {...register('state')} name='state' size='lg' defaultChecked={true} >
                            {
                                usStates.map((state) => {
                                    return <option key={uniqid()} value={state.code}>{state.name}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.country && errors.country.message}</p>
                </Col>
            </Row>

            <Row className='gx-2'>
                <Col md={5}>
                    {/* Address 1 */}
                    <FloatingLabel label="Address" controlId="addressOne" >
                        <Form.Control isInvalid={errors.addressOne && true} {...register('addressOne')} type="text" name='addressOne' />
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.addressOne && errors.addressOne.message}</p>
                </Col>
                <Col md={5}>

                    {/* Address 2 */}
                    <FloatingLabel label="Apartment, suite, etc. (optional)" controlId="addressTwo" >
                        <Form.Control isInvalid={errors.addressTwo && true} {...register('addressTwo')} type="text" name='addressTwo' />
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.addressTwo && errors.addressTwo.message}</p>
                </Col>

                <Col md={2}>
                    {/* ZIP Code */}
                    <FloatingLabel label="ZIP code" controlId="zipCode" >
                        <Form.Control isInvalid={errors.zipCode && true} {...register('zipCode')} type="text" name='zipCode' />
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.zipCode && errors.zipCode.message}</p>
                </Col>
            </Row>

            <Row className='gx-2'>
                <Col md={3}>
                    {/* Country code */}
                    {/* Make it controlled depending on the country */}
                    <FloatingLabel label="Country Code" controlId='countryCode'>
                        <Form.Select {...register('countryCode')} name='countryCode' size='lg' defaultChecked={true} >
                            {
                                countries.map((country) => {
                                    return <option key={uniqid()} value={country.dialCode}>({country.name}) {country.dialCode}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.countryCode && errors.countryCode.message}</p>
                </Col>
                <Col md={9}>
                    {/* Phone Number */}
                    <FloatingLabel label="Phone Number" controlId="phoneNumber" >
                        <Form.Control isInvalid={errors.phoneNumber && true} {...register('phoneNumber')} type="text" name='phoneNumber' />
                    </FloatingLabel>
                    <p className="text-danger mb-2">{errors.phoneNumber && errors.phoneNumber.message}</p>
                </Col>
            </Row>

            {/* Notes */}
            <FloatingLabel label="Notes" controlId="notes" >
                <Form.Control as='textarea' style={{ height: '100px' }} isInvalid={errors.notes && true} {...register('notes')} type="text" name='notes' />
            </FloatingLabel>
            <p className="text-danger mb-2">{errors.notes && errors.notes.message}</p>

            {/* Submit button */}
            <div className='d-flex justify-content-center'>
                <CustomButton variant='primary' disabled={!(isDirty && isValid) || isLoading}>Submit</CustomButton>
            </div>
        </Form>
    )
}

export default ClientDetailsForm