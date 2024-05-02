import { FieldErrors } from "react-hook-form"

import { ClientDetailsFormData } from "./ClientDetailsForm"

interface Props {
    errors: FieldErrors<ClientDetailsFormData>,
    inputName: keyof ClientDetailsFormData

}

function FormErrorMessage({
    errors,
    inputName
}:Props) {
  return (
    <p className="text-danger mb-2"><small>{errors[inputName]?.message}</small></p>
  )
}

export default FormErrorMessage