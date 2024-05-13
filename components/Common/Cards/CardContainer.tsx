
interface Props {
    children: React.ReactNode
}

function CardContainer({
    children
}: Props) {
  return (
    <div className="position-relative background-light-gradient h-100 border d-flex flex-column">
        {children}
    </div>
  )
}

export default CardContainer
