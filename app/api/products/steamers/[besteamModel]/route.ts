import { dbConnect } from "@/lib/dbConnect";
import { Steamer } from "@/model/Steamer";
import { NextRequest ,NextResponse } from "next/server";

interface Params {
    params: {
        besteamModel: string
    }
}

export async function GET(req: NextRequest, { params }: Params) {
    await dbConnect();

    const { besteamModel } = params;

    try {
        let steamers = await Steamer.find({ nameCamelCase: besteamModel })

        if(steamers) {
            return NextResponse.json(steamers)
        } else {
            return NextResponse.json({ error: 'The requested resource cannot be found' })
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}