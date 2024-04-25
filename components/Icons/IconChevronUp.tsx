interface Props {
  width?: string,
  height?: string,
  stroke?: string,
  classes?: string
}

function IconChevronUp({
  width = '20px',
  height = '20px',
  stroke = 'currentColor',
  classes
}:Props) {
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke}  style={{width: `${width}`, height: `${height}`}}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}

export default IconChevronUp