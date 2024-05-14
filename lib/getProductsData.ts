import { baseUrl } from "./baseUrl"

export default async function getProductsData(productsUrl: string) {
    const res = await fetch(`${baseUrl}/api/products/${productsUrl}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return data;
}