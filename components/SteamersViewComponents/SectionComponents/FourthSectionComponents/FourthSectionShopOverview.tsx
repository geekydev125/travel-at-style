import steamers from "@/data/steamers.json"

import BesteamRow from "./BesteamRow"
import BesteamXlRow from "./BesteamXlRow"
import DemoImagesRow from "./DemoImagesRow"

function FourthSectionShopOverview() {
	return (
		<section className="background-pattern-wool py-5 px-2 px-md-0" >
			<div className="container background-pattern-fabric rounded-5 py-5 px-0">
				<BesteamRow steamerModel={steamers.besteam} />

				<DemoImagesRow />
				
				<BesteamXlRow steamerModel={steamers.besteamXl}/>
			</div>
		</section>
	)
}

export default FourthSectionShopOverview