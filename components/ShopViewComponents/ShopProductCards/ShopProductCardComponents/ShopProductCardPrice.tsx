interface Props {
	price: number
}

function ShopProductCardPrice({
	price
}:Props) {
	return (
		<span className="background-light-gradient text-custom-dark mb-0 position-absolute z-1 top-0 end-0 p-2 fw-bold h5" style={{ borderBottomLeftRadius: '7px' }}>
			${price}
		</span>
	)
}

export default ShopProductCardPrice