import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"

import { FieldErrors, UseFormRegister } from "react-hook-form"
import { ClientDetailsFormData } from "./ClientDetailsForm"

interface Props {
    label: string,
    register: UseFormRegister<ClientDetailsFormData>,
    name: keyof ClientDetailsFormData,
    type: string
    errors: FieldErrors<ClientDetailsFormData>
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
            <p className="text-danger mb-2">{errors[name]?.message}</p>
        </>
    )
}

export default ClientDetailsFormInput