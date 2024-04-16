import steamers from "@/data/steamers.json"

import BesteamRow from "./BesteamRow"
import BesteamXlRow from "./BesteamXlRow"
import DemoImagesRow from "./DemoImagesRow"

function FourthSectionShopOverview() {
	let besteamSteamers = steamers.filter(steamer => steamer.name === 'Besteam')
	let besteamXlSteamers = steamers.filter(steamer => steamer.name === 'Besteam XL')

	return (
		<section className="background-pattern-wool py-5 px-2 px-md-0" >
			<div className="container background-pattern-fabric rounded-5 py-5 px-0">
				<BesteamRow steamers={besteamSteamers} />

				<DemoImagesRow />
				
				<BesteamXlRow steamers={besteamXlSteamers}/>
			</div>
		</section>
	)
}

export default FourthSectionShopOverview