import steamers from "@/data/steamers.json"

import BesteamRow from "./BesteamRow"
import DemoImagesRow from "./DemoImagesRow"

function FourthSectionShopOverview() {
	let besteamSteamers = steamers.filter(steamer => steamer.name === 'Besteam')
	let besteamXlSteamers = steamers.filter(steamer => steamer.name === 'Besteam XL')

	return (
		<section className="background-pattern-wool py-5 px-2 px-md-0" >
			<div className="container background-pattern-fabric rounded-5 py-5 px-0">
				<BesteamRow steamers={besteamSteamers} steamerModel="besteam"/>

				<DemoImagesRow />
				
				<BesteamRow steamers={besteamXlSteamers} steamerModel="besteamXl"/>
			</div>
		</section>
	)
}

export default FourthSectionShopOverview