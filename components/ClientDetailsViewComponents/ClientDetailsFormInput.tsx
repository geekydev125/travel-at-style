import FloatingLabel from "react-bootstrap/esm/FloatingLabel"
import Form from "react-bootstrap/esm/Form"

import { UseFormRegister } from "react-hook-form"
import { ClientDetailsFormData } from "./ClientDetailsForm"

interface Props {
    label: string,
    register: UseFormRegister<ClientDetailsFormData>,
    name: keyof ClientDetailsFormData,
    type: string
    errors: any
}

function ClientDetailsFormInput({
    label,
    register,
    name,
    type,
    errors
}: Props) {
    return (
        <>
            <FloatingLabel label={label} controlId={name} >
                <Form.Control isInvalid={errors[name] && true} {...register(name)} type={type} name={name} />

            </FloatingLabel>
            <p className="text-danger mb-2">{errors[name] && errors[name].message}</p>
        </>
    )
}

export default ClientDetailsFormInput