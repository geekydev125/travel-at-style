import uniqid from "uniqid";

import { Metadata } from "next";

import accessories from "@/data/accessories.json"

import Accessory from "@/model/Accessory";

import ProductCard from "@/components/Common/Cards/Product/ProductCard";

import Col from "react-bootstrap/Col";

export const metadata: Metadata = {
    title: "Accessories",
}

function AccessoriesPage() {
	return (
		<>
			{
				Object.values(accessories).map((accessory: Accessory) => {
					return (
						<Col xs={12} sm={6} md={4} className="d-flex flex-grow-1" key={uniqid()}>
							<ProductCard product={accessory} />
						</Col>
					)
				})
			}
		</>
	)
}

export default AccessoriesPage