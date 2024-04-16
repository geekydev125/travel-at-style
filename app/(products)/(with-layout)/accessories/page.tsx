"use client"
import React from "react";
import uniqid from "uniqid";

import accessories from "@/data/accessories.json"
import { Accessory, AccessoryVariant } from "@/model/Accessory";

import ProductCard from "@/components/ProductCard";

function AccessoriesPage() {
	return (
		<section className="row gy-4">
			{
				Object.values(accessories).map((accessory: Accessory) => {
					return (
						<React.Fragment key={uniqid()}>
							{
								accessory.variants.map((variant:AccessoryVariant) => {
									return (
										<div className="col-12 col-md-4" key={uniqid()}>
											<ProductCard product={accessory} variant={variant}/>
										</div>
									)
								})
							}

						</React.Fragment>
					)
				})
			}
		</section>
	)
}

export default AccessoriesPage