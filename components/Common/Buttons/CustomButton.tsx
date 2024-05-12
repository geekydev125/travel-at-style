import Button from "react-bootstrap/Button"

export interface CustomButtonProps {
    size?: 'sm' | 'lg' | undefined
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark' | 'outline-link' | undefined
    classesButton?: string
    style?: React.CSSProperties
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset' | undefined
    children: React.ReactNode
}

function CustomButton({
    size,
    variant,
    classesButton: classes,
    style,
    onClick,
    disabled,
    type,
    children,
}: CustomButtonProps) {
    return (
        <Button style={style} type={type} disabled={disabled} onClick={onClick} size={size} variant={variant} className={`shadow btn-feedback text-uppercase ${classes}`} >
            {children}
        </Button>
    )
}

export default CustomButton