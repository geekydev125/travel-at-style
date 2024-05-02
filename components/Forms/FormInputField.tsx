import { FieldErrors, UseFormRegister } from "react-hook-form"

import FormErrorMessage from "./FormErrorMessage"
import { ClientDetailsFormData } from "./ClientDetailsForm"
import { ContactFormData } from "./ContactForm"

import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

interface Props {
    label: string,
    register: UseFormRegister<ClientDetailsFormData> | UseFormRegister<ContactFormData>,
    inputName: keyof ClientDetailsFormData | keyof ContactFormData,
    type: string,
    formControlStyle?: React.CSSProperties,
    errors: FieldErrors<ClientDetailsFormData> | FieldErrors<ContactFormData>
}

function FormInputField({
    label,
    register,
    inputName,
    type,
    formControlStyle,
    errors
}: Props) {
    return (
        <>
            <FloatingLabel label={label} controlId={inputName} >
                <Form.Control
                    style={formControlStyle}
                    isInvalid={errors[inputName as keyof (ClientDetailsFormData | ContactFormData)] && true}
                    {...(register as UseFormRegister<ClientDetailsFormData | ContactFormData>)(inputName)}
                    type={type}
                    name={inputName}
                />
            </FloatingLabel>
            <FormErrorMessage errors={errors} inputName={inputName} />
        </>
    )
}

export default FormInputField