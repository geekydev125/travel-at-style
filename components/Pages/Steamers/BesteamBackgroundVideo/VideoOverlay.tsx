interface Props {
	alpha: number
	children?: React.ReactNode
}

function VideoOverlay({
	alpha = 0.5,
	children
}: Props) {
	return (
		<div className="position-absolute top-0 left-0 w-100 h-100 z-1" style={{ backgroundColor: `rgba(0,0,0,${alpha})` }}>
			{children}
		</div>
	)
}

export default VideoOverlay