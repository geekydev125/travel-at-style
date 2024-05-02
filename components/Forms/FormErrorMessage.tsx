import { FieldErrors } from "react-hook-form"

import { ClientDetailsFormData } from "./ClientDetailsForm"
import { ContactFormData } from "./ContactForm"

interface Props {
	errors: FieldErrors<ClientDetailsFormData> | FieldErrors<ContactFormData>,
	inputName: keyof ClientDetailsFormData | keyof ContactFormData

}

function FormErrorMessage({
	errors,
	inputName
}: Props) {
	return (
		<p className="text-danger mb-2">
			<small>
				{errors[inputName as keyof (ClientDetailsFormData | ContactFormData)]?.message}
			</small>
		</p>
	)
}

export default FormErrorMessage