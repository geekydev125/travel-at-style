"use client"
import React from "react";
import uniqid from "uniqid";

import accessories from "@/data/accessories.json"
import { Accessory } from "@/model/Accessory";

import ProductCard from "@/components/ProductCard";

function AccessoriesPage() {
	return (
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
	)
}

export default AccessoriesPage