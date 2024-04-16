interface Props {
	children: React.ReactNode
}

function LocationContactLayout({
	children
}: Props) {
	return (
		<div className='background-ny-store'>
			{children}
		</div>
	)
}

export default LocationContactLayout