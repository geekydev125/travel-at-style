import Image from "next/image"

const steamberBulletPoints = [
	"Multi-purpose steamer suitable for travel and home use.",
	"Light and small - weight 0.6 pounds",
	"Produces powerful steam and can be used on all fabrics.",
	"Designed for world wide use; 110v and 220v.",
	"Allowed to be taken as a carry-on on an airplane"

]

function SecondSectionBesteamDescription() {
	return (
		<section className="container-fluid py-4 background-pattern-crossword">
			<div className="row">
				<div className="col-lg-4 col-sm-12 mx-auto px-4 p-md-4 pl-md-5">
					<h3 className="text-center mt-4 text-black">BeSteam</h3>
					<p className="text-justify mt-4 text-black">BeSteam is the ultimate user-friendly light steam iron. Compact and lightweight, it is manufactured with high technology standards and made from high quality components &amp; materials. </p>
				</div>
				<div className="col-lg-4 col-sm-6 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-0">
					<img src="/assets/img/steamers/besteam-blue-shadow-close-up.png" alt="Steamer" width='100%' />
				</div>
				<div className="col-lg-4 col-sm-6 mx-auto px-4 pt-4 pt-md-5 pr-md-5">
					<ul className="list-unstyled">
						{
							steamberBulletPoints.map((bulletPoint, index) => {
								return (
									<li key={index} className="text-black">{bulletPoint}</li>
								)
							})
						
						}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default SecondSectionBesteamDescription