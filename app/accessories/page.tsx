"use client"
import uniqid from "uniqid";
import { useRef } from "react";
import { useInView } from "framer-motion";

import accessories from "@/data/accessories.json"
import { Accessory } from "@/model/Accessory";
import ProductCard from "@/components/ProductCard";

function AccessoriesPage() {
	const imgRef = useRef(null);
	const isInView = useInView(imgRef, { once: true })

	return (
		<div className="container py-5">
			<div className="row pb-5">
				<div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
					<img
						src="/assets/img/airplane.png"
						alt="Airplane"
						ref={imgRef}
						style={{
							position: 'relative',
							transition: 'all 1.1s ease-in-out',
							opacity: isInView ? 1 : 0,
							left: isInView ? 0 : -200
						}}
					/>
				</div>
				<div className="col-md-7 d-flex flex-column justify-content-center">
					<h2 className="display-4 text-center text-custom-dark">TRAVEL ACCESSORIES</h2>
				</div>
			</div>

			<section className="row gy-4">
				{
					Object.values(accessories).map((accessory: Accessory) => {
						return (
							<div className="col-12 col-md-4" key={uniqid()}>
								<ProductCard product={accessory} />
							</div>
						)
					})
				}
			</section>
		</div>
	)
}

export default AccessoriesPage