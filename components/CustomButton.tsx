import Button from "react-bootstrap/Button"

interface Props {
    size?: 'sm' | 'lg' | undefined
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark' | 'outline-link' | undefined
    classes?: string
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset' | undefined
    children: React.ReactNode
}

function CustomButton({
    size,
    variant,
    classes,
    onClick,
    disabled,
    type,
    children,
}: Props) {
    return (
        <Button type={type} disabled={disabled} onClick={onClick} size={size} variant={variant} className={`shadow ${classes}`} >
            {children}
        </Button>
    )
}

export default CustomButton