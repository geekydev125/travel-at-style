import ProductCarousel from "../ProductCarousel"

import steamers from "@/data/steamers.json"

function FourthSectionShopOverview() {
	return (
		<section className="background-pattern-wool py-5" >
			<div className="container background-pattern-fabric rounded-5 p-5">
				<div className="row">
					<div className="col-7">
						<h2 className="text-center">{steamers.besteam.name}</h2>
						<p className="text-center text-custom-light">{steamers.besteam.description}</p>
					</div>
					<div className="col-5">
						<ProductCarousel
							carouselId={'carousel-besteam'}
							steamerModel={steamers.besteam}
							indicatorLabels={['blue', 'black', 'red', 'white']}
						/>
					</div>
				</div>

			</div>
		</section>
	)
}

export default FourthSectionShopOverview