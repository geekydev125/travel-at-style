import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"

import { FieldErrors, UseFormRegister } from "react-hook-form"
import { ClientDetailsFormData } from "./ClientDetailsForm"
import FormErrorMessage from "./FormErrorMessage"

interface Props {
    label: string,
    register: UseFormRegister<ClientDetailsFormData>,
    inputName: keyof ClientDetailsFormData,
    type: string
    errors: FieldErrors<ClientDetailsFormData>
}

function ClientDetailsFormInput({
    label,
    register,
    inputName,
    type,
    errors
}: Props) {
    return (
        <>
            <FloatingLabel label={label} controlId={inputName} >
                <Form.Control isInvalid={errors[inputName] && true} {...register(inputName)} type={type} name={inputName} />

            </FloatingLabel>
            <FormErrorMessage errors={errors} inputName={inputName} />
        </>
    )
}

export default ClientDetailsFormInput