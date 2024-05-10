import { dbConnect } from "@/lib/dbConnect";
import { Accessory } from "@/model/Accessory";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        let accessories = await Accessory.find().lean()

        return NextResponse.json(accessories)
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}