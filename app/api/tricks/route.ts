import {PrismaClient} from "@prisma/client"
import {NextRequest, NextResponse} from "next/server";

const prisma = new PrismaClient()


export async function GET(request: NextRequest) {
    const tricks = await prisma.trick.findMany()
    console.log(tricks)

    return NextResponse.json(tricks)
}


 export  async function POST(request:NextRequest) {
    const body = await request.json()

     const trick = await prisma.trick.findUnique({
         where:{
             name: body.name
         }
     })

     if (trick)
         return NextResponse.json({error: "Trick already exists, use PATCH to update"}, {status: 401})


     const newTrick = await prisma.trick.create({
       data: {
           name: body.name,
           category: body.category,
           description: body.description
       }
   })

     return NextResponse.json(newTrick)


   }




