import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const laptopsCollection = await dbConnect(collectionName.LAPTOPS);
    const data = await laptopsCollection.findOne({ _id: new ObjectId(p.id) });
    // console.log(data);
    return NextResponse.json(data)
}