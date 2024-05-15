import { FieldErrors, UseFormRegister } from "react-hook-form"

import FormErrorMessage from "./FormErrorMessage"
import { IContactFormData } from "@/validation/contactFormSchema"
import { IClientDetailsFormData } from "@/validation/clientDetailsFormSchema"

import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

interface Props {
    label: string,
    register: UseFormRegister<IClientDetailsFormData> | UseFormRegister<IContactFormData>,
    inputName: keyof IClientDetailsFormData | keyof IContactFormData,
    type: string,
    formControlStyle?: React.CSSProperties,
    errors: FieldErrors<IClientDetailsFormData> | FieldErrors<IContactFormData>
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
                    isInvalid={errors[inputName as keyof (IClientDetailsFormData | IContactFormData)] && true}
                    {...(register as UseFormRegister<IClientDetailsFormData | IContactFormData>)(inputName)}
                    type={type}
                    name={inputName}
                />
            </FloatingLabel>
            <FormErrorMessage errors={errors} inputName={inputName} />
        </>
    )
}

export default FormInputField