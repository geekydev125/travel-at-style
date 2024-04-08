interface Props {
    width?: string,
    height?: string,
    fill?: string
}


function IconDoubleDown({
    width = '20px',
    height = '20px',
    fill = 'currentColor'
}:Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} style={{width: `${width}`, height: `${height}`}}>
            <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>

    )
}

export default IconDoubleDown