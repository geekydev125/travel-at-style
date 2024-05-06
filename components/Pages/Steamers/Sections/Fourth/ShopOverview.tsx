import steamers from "@/data/steamers.json"

import BesteamRow from "./BesteamRow"
import DemoImagesRow from "./DemoImagesRow"

import Container from "react-bootstrap/Container"

function ShopOverview() {
	let besteamSteamers = steamers.filter(steamer => steamer.name === 'Besteam')
	let besteamXlSteamers = steamers.filter(steamer => steamer.name === 'Besteam XL')

	return (
		<section className="background-pattern-wool py-5 px-2 px-md-0" >
			<Container className="background-pattern-fabric rounded-5 py-3 py-lg-5 px-0">
				<BesteamRow steamers={besteamSteamers} steamerModel="besteam"/>

				<DemoImagesRow />
				
				<BesteamRow steamers={besteamXlSteamers} steamerModel="besteamXl"/>
			</Container>
		</section>
	)
}

export default ShopOverview