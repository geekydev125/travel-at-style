import BesteamRow from "@/components/Pages/Steamers/Sections/Fourth/BesteamRow"
import DemoImagesRow from "@/components/Pages/Steamers/Sections/Fourth/DemoImagesRow"

import Container from "react-bootstrap/Container"

function ShopOverview() {
	return (
		<section className="background-pattern-wool py-5 px-2 px-md-0" >
			<Container className="background-pattern-fabric rounded-5 py-3 py-lg-5 px-0">
				<BesteamRow steamerModel="besteam"/>

				<DemoImagesRow />
				
				<BesteamRow steamerModel="besteamXL"/>
			</Container>
		</section>
	)
}

export default ShopOverview