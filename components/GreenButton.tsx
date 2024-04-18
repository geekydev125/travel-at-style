import Button from "react-bootstrap/Button"

interface Props {
    size?: 'sm' | 'lg' | undefined
    classes: string
    children: React.ReactNode
}

function GreenButton({
    size,
    classes,
    children
}: Props) {
    return (
        <Button size={size} variant="success" className={`shadow ${classes}`} style={{border: '1px solid #32a670'}}>
            {children}
        </Button>
    )
}

export default GreenButton