interface Props {
    width?: string,
    height?: string,
    fill?: string,
    classes?: string
}


function IconCheckCircle({
    width = '20px',
    height = '20px',
    fill = 'currentColor',
    classes
}: Props) {
    return (
        <svg className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} style={{ width: `${width}`, height: `${height}` }}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    )
}

export default IconCheckCircle