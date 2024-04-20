import Button from "react-bootstrap/Button"

interface Props {
    size?: 'sm' | 'lg' | undefined
    classes?: string
    children: React.ReactNode
    onClick: () => void
}

function GreenButton({
    size,
    classes,
    onClick,
    children,
}: Props) {
    return (
        <Button onClick={onClick} size={size} variant="success" className={`shadow ${classes}`} style={{border: '1px solid #32a670'}}>
            {children}
        </Button>
    )
}

export default GreenButton