import { dbConnect } from "@/lib/dbConnect";
import { Luggage } from "@/model/Luggage";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        let luggage = await Luggage.find().lean()

        return NextResponse.json(luggage)
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}