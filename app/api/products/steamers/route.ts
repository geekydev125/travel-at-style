import { dbConnect } from "@/lib/dbConnect";
import { Steamer } from "@/model/Steamer";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        let steamers = await Steamer.find().lean()

        return NextResponse.json(steamers)
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}