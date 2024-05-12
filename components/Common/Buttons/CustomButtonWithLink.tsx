import NextTransitionProgressLink from "@/components/Common/NextTransitionProgressLink"

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
        <NextTransitionProgressLink href={href} className={classesLink}>
            <CustomButton {...rest}>
                {children}
            </CustomButton>
        </NextTransitionProgressLink>
    )
}

export default CustomButtonWithLink