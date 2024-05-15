import { FieldErrors } from "react-hook-form"

import { IContactFormData } from "@/validation/contactFormSchema"
import { IClientDetailsFormData } from "@/validation/clientDetailsFormSchema"

interface Props {
	errors: FieldErrors<IClientDetailsFormData> | FieldErrors<IContactFormData>,
	inputName: keyof IClientDetailsFormData | keyof IContactFormData

}

function FormErrorMessage({
	errors,
	inputName
}: Props) {
	return (
		<p className="text-danger mb-2">
			<small>
				{errors[inputName as keyof (IClientDetailsFormData | IContactFormData)]?.message}
			</small>
		</p>
	)
}

export default FormErrorMessage