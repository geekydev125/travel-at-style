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
		<section className="container-fluid pt-3 pt-xl-5 pb-4 background-pattern-crossword">
			<div className="row">

				<div className="col-12 col-lg-4 mx-auto px-lg-4 p-md-4 ps-lg-5">
					<h3 className="display-3 text-center text-custom-dark fw-bold">BeSteam</h3>
					<p className="mt-4 text-custom-dark" style={{ textAlign: 'justify' }}>BeSteam is the ultimate user-friendly, light steam iron. Small and light, it's built using cutting-edge technology and top-quality materials.</p>

					<p className="text-custom-dark" style={{ textAlign: 'justify' }}>BeSteam is not only designed for ease of use but also prioritizes safety. Equipped with advanced temperature control mechanisms and automatic shut-off features, it ensures worry-free ironing sessions, even for beginners.</p>
				</div>

				<div className="col-12 col-sm-5 col-lg-4 mt-sm-5 mt-md-2 mt-lg-5 mt-xl-0 d-flex justify-content-center align-items-center">
					<AnimatedSteamerImg />
				</div>

				<div className="col-12 col-sm-7 col-lg-4 px-md-4 mt-md-2 mt-lg-0 pt-lg-4 d-flex flex-column align-items-center">
					<ul className="list-unstyled ">
						{
							steamerBulletPoints.map((bulletPoint, index) => {
								return (
									<li key={index} className="text-custom-dark my-2">
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