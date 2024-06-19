import Link from "next/link"

import CustomButton, { CustomButtonProps } from "@/components/Common/Buttons/CustomButton"

interface Props extends CustomButtonProps {
    href: string
    classesLink?: string
}

function CustomButtonWithLink({
    href,
    classesLink,
    children,
    ...rest
}: Props) {
    return (
        <Link href={href} className={classesLink}>
            <CustomButton {...rest}>
                {children}
            </CustomButton>
        </Link>
    )
}

export default CustomButtonWithLink