interface Props {
    width?: string,
    height?: string,
    stroke?: string,
    classes?: string
}


function IconMinus({
    width = '20px',
    height = '20px',
    stroke = 'currentColor',
    classes
}: Props) {
    return (
        <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke}  style={{width: `${width}`, height: `${height}`}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>

    )
}

export default IconMinus