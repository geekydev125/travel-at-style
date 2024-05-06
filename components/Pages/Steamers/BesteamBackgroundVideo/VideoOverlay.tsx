interface Props {
	alpha: number
}

function VideoOverlay({
	alpha = 0.5
}:Props) {
	return (
		<div className="position-absolute top-0 left-0 w-100 h-100 z-1" style={{ backgroundColor: `rgba(0,0,0,${alpha})` }} />
	)
}

export default VideoOverlay