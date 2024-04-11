import uniqid from "uniqid"
import ProductCarousel from "../ProductCarousel"

import steamers from "@/data/steamers.json"

function FourthSectionShopOverview() {
	return (
		<section className="background-pattern-wool py-5" >
			<div className="container background-pattern-fabric rounded-5 p-5">
				<div className="row">
					<div className="col-7 d-flex flex-column justify-content-between py-3 px-5">
						<h3 className="text-center text-custom-dark h2 mb-3">{steamers.besteam.name}</h3>
						<p className="text-custom-dark">{steamers.besteam.description}</p>

						<h4 className="text-custom-dark"> Package Includes:</h4>
						<ol>
							{
								steamers.besteam.packageIncludes.map((item, index) => {
									return (
										<li key={uniqid()} className="text-custom-dark">{item}</li>
									)
								})
							}
						</ol>

						<div className="text-center">
							<p className="text-custom-dark h1">Now only ${steamers.besteam.price}</p>
							<button className='btn btn-success btn-lg shadow-sm mt-3'>GET YOURS NOW!</button>
						</div>
					</div>
					<div className="col-5">
						<ProductCarousel
							carouselId={'carousel-besteam'}
							steamerModel={steamers.besteam}
							indicatorLabels={['blue', 'black', 'red', 'white']}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-5">
						<ProductCarousel
						carouselId={'carousel-besteamXl'}
							steamerModel={steamers.besteamXl}
							indicatorLabels={['yellow', 'blue', 'black', 'red']}
						/>
					</div>
					<div className="col-7 d-flex flex-column justify-content-between py-3 px-5">
						<h3 className="text-center text-custom-dark h2 mb-3">{steamers.besteamXl.name}</h3>
						<p className="text-custom-dark">{steamers.besteamXl.description}</p>

						<h4 className="text-custom-dark"> Package Includes:</h4>
						<ol>
							{
								steamers.besteamXl.packageIncludes.map((item, index) => {
									return (
										<li key={uniqid()} className="text-custom-dark">{item}</li>
									)
								})
							}
						</ol>

						<div className="text-center">
							<p className="text-custom-dark h1">Now only ${steamers.besteamXl.price}</p>
							<button className='btn btn-success btn-lg shadow-sm mt-3'>GET YOURS NOW!</button>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default FourthSectionShopOverview