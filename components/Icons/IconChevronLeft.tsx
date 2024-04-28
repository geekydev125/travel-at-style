interface Props {
    width?: string,
    height?: string,
    stroke?: string,
    classes?: string
}

function IconChevronLeft({
    width = '20px',
    height = '20px',
    stroke = 'currentColor',
    classes
}: Props) {
    return (
        <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={stroke} style={{ width: `${width}`, height: `${height}` }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    )
}

export default IconChevronLeft