import uniqid from "uniqid";

const instructions = [
	"Swing handle up to the open point (90 degrees) marked on the steamer.",
	"Add tap water to the water measuring cup. Fill it up to the top. Note: If you have a level indicator, fill it up to the level indicator.",
	"Pour the water into the Besteam.",
	"Add three full spoons of regular table salt in the USA (one spoon in Europe). The salt measuring spoon is located underneath the measuring cup.",
	"Swing handle to close.",
	"Connect the plug tightly to the Besteam. Now connect the electrical cable to the electricity socket. Warning: Make sure the electrical connections are dry.",
	"Use the correct position for heating and operating the Besteam as shown in the instructions manual on the bottom of this page.",
	"When steam stops coming out of the steamer, just pour another measuring cup of water into the Besteam. Note: No additional salt is needed for every refill.",
	"In order to clean the Besteam after you are done using it, just add more water and shake it from side to side. Pour the water out (the water will be in a different color). Put the Besteam up side down and let it dry until next time you use it."
];

function InstructionsPage() {
	return (
		<section className="container py-5">
			<div className="row">
				<div className="col-12 col-md-9">
					<h3 className="text-custom-dark">Besteam operation instructions: </h3>
					<ol>
						{
							instructions.map((instruction, index) => {
								if (instruction.includes("Warning:") || instruction.includes("Note:")) {
									let normalInstructionPart;
									let boldInstructionPart;
									let note;

									if (instruction.includes("Note:")) {
										normalInstructionPart = instruction.split("Note:")[0] || instruction.split("Warning:")[0];
										boldInstructionPart = instruction.split("Note:")[1] || instruction.split("Warning:")[1];
										note = 'Note: '
									} if (instruction.includes("Warning:")) {
										normalInstructionPart = instruction.split("Warning:")[0];
										boldInstructionPart = instruction.split("Warning:")[1];
										note = 'Warning: '
									}

									return <li key={uniqid()} className="text-custom-dark">
										{normalInstructionPart}
										<br />
										<span className="fw-semibold text-custom-dark fst-italic">{note} {boldInstructionPart}</span>
									</li>
								}

								return <li key={uniqid()} className="text-custom-dark">{instruction}</li>
							})
						}
					</ol>
				</div>
				<div className="col-12 offset-3 offset-sm-0 col-md-3 d-flex flex-column align-items-center mt-4 mt-md-0">
					<a href="/assets/docs/besteam-manual.pdf" target="_blank">
						<img src="/assets/img/besteam-manual-cover.jpg" className="img-fluid" alt="Instructions Manual" />
					</a>

					<a href="/assets/docs/besteam-manual.pdf" target="_blank" className="text-center mt-3">VIEW OR DOWNLOAD THE INSTRUCTIONS MANUAL</a>
				</div>
			</div>
		</section>
	)
}

export default InstructionsPage