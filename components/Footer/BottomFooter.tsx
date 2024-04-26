import Image from 'next/image'

function BottomFooter() {
	return (
		<section className="d-flex flex-row justify-content-center align-items-center pt-2 pb-4">
			<div className='text-center'>
				<p className="text-custom-light mb-0">
					<span className='pe-1'>&copy; {new Date().getFullYear()}</span>
					All rights reserved to
					<span className='fst-italic'> Travel @ Style</span>
				</p>
				<p className="text-custom-light mb-0">
					<span className='pe-1 text-custom-light'>Powered by</span>
					<a href="http://www.arielbehar.com">
						Ariel Behar
						<Image src='/assets/img/logo/arielbehar-logo.png' alt='Ariel Behar Logo' width={18} height={18} className='ms-2' />
					</a>
				</p>
			</div>
		</section>
	)
}

export default BottomFooter