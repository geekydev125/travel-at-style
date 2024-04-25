import Map from "@/components/Map"

function LocationPage() {
	return (
		<div>
			<section className='container' style={{ height: '55vh' }}>
				<div className='row h-100'>
					<div className='col-10 offset-1 offset-sm-0 col-sm-7 col-md-5 col-lg-4 col-xl-3 d-flex flex-column justify-content-center align-items-center  shadow-lg' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} >
						<div className='py-3 w-100 d-flex flex-column justify-content-center align-items-center'>
							<h3 className="display-3 d-inline-block">Shop Location</h3>

							<ul className="list-unstyled text-start">
								<li>Fulton Center (lower level)</li>
								<li>200 Broadway</li>
								<li>New York, NY 10038</li>
							</ul>
						</div>

						<div className='py-4 text-center' style={{ borderTop: '1px solid white', borderBottom: '1px solid white' }}>
							<h6>Subway Trains to Fulton Center</h6>
							<img src="/assets/img/ny-subway-trains.png" className="img-fluid" alt="Fulton center trains" />
						</div>
					</div>
				</div>
			</section>

			<section>
				<Map />
			</section>
		</div>
	)
}

export default LocationPage