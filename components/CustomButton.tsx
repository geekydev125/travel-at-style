import Button from "react-bootstrap/Button"

interface Props {
    size?: 'sm' | 'lg' | undefined
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark' | 'outline-link' | undefined
    classes?: string
    onClick?: () => void
    disabled?: boolean
    children: React.ReactNode
}

function CustomButton({
    size,
    variant,
    classes,
    onClick,
    disabled,
    children,
}: Props) {
    return (
        <Button disabled={disabled} onClick={onClick} size={size} variant={variant} className={`shadow ${classes}`} style={{border: '1px solid #32a670'}}>
            {children}
        </Button>
    )
}

export default CustomButton