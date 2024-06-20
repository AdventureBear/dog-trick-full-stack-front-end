import {PrismaClient}  from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import trick from "../../../components/Trick";

const prisma = new PrismaClient()

export async function GET (request:NextRequest, {params}:{params: {id: string}}) {

    const trick =  await prisma.trick.findUnique({
        where: {
            id:parseInt(params.id)
        },
    })

    if (!trick)
        return NextResponse.json({error: "No trick found"}, {status: 404 })

    return NextResponse.json(trick)

}


export async function DELETE (request: NextRequest, {params}:{params: {id: string}}){
    const trick = await prisma.trick.findUnique({
        where: {
            id: parseInt(params.id)
        },
    });


    if (!trick) {
        return NextResponse.json({ error: "No trick found" }, { status: 404 });
    }

    await prisma.trick.delete({
        where: {
            id: parseInt(params.id)
        },
    });

    return NextResponse.json({ message: "Trick deleted successfully" });
}


export async function PATCH(request:NextRequest, {params}:{params: {id: string}}){
    const body = await request.json()

    await prisma.trick.update({
        where: {
            id: parseInt(params.id)
        },
        data: {
            name: body.name,
            description: body.description,
            category: body.category
        }
    });
    return NextResponse.json({ message: "Trick updated successfully" }, {status: 201});

}