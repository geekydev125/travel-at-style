"use client"
import React from "react";
import uniqid from "uniqid";

import accessories from "@/data/accessories.json"
import { Accessory } from "@/model/Accessory";

import ProductCard from "@/components/ProductCard";

function AccessoriesPage() {
	return (
		<section className="row gx-2 gx-md-3 gy-4 d-flex flex-row align-items-stretch flex-wrap">
			{
				Object.values(accessories).map((accessory: Accessory) => {
					return (
						<div className="col-12 col-sm-6 col-md-4 d-flex flex-grow-1" key={uniqid()}>
							<ProductCard product={accessory} />
						</div>
					)
				})
			}
		</section>
	)
}

export default AccessoriesPage