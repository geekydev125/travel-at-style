import IconCheckCircle from "../../Icons/IconCheckCircle"
import AnimatedSteamerImg from "../AnimatedSteamerImg"

const steamerBulletPoints = [
	"Multi-purpose steamer suitable for travel and home use",
	"Light and small - weighs only 0.6 pounds",
	"Produces powerful steam and can be used on all fabrics",
	"Designed for world wide use; 110v and 220v compatible",
	"Allowed to be taken as a carry-on on an airplane"
]

function SecondSectionBesteamDescription() {
	return (
		<section className="container-fluid pt-5 pb-4 background-pattern-crossword">
			<div className="row">
				<div className="col-sm-12 col-lg-4 mx-auto px-4 p-md-4 ps-md-5">
					<h3 className="text-center mt-4 text-black">BeSteam</h3>
					<p className="justify mt-4 text-black" style={{textAlign: 'justify'}}>BeSteam is the ultimate user-friendly light steam iron. Compact and lightweight, it is manufactured with high technology standards and made from high quality components &amp; materials.</p>
				</div>

				<div className="col-sm-6 col-lg-4 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-0">
					<AnimatedSteamerImg />
				</div>

				<div className="col-sm-6 col-lg-4 mx-auto px-4 pt-4 pt-md-5 pe-md-5">
					<ul className="list-unstyled">
						{
							steamerBulletPoints.map((bulletPoint, index) => {
								return (
									<li key={index} className="text-black my-2">
										<IconCheckCircle stroke="green" width="30px" height="30px" classes="me-2" />
										{bulletPoint}
									</li>
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