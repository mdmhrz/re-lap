import dbConnect, { collectionName } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json()
    // console.log(body);
    const productCollection = dbConnect(collectionName.LAPTOPS)
    const result = await productCollection.insertOne(body)
    return NextResponse.json(result)
}

export const GET = async (req) => {
    const productCollection = dbConnect(collectionName.LAPTOPS)
    const result = await productCollection.find().toArray()
    return NextResponse.json(result)
}