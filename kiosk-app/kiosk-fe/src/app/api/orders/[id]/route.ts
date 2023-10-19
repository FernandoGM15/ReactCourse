import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

const prisma = new PrismaClient();

export const GET = async (_: NextRequest, { params }: Params) => {
  try {
    const order = await prisma.order.findUnique({ where: { id: +params.id } });
    return NextResponse.json(order);
  } catch (e) {
    return NextResponse.json({
      message: " An error ocurred when trying to get the order",
    });
  }
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  try {
    const order = await req.json();
    const updated = await prisma.order.update({
      where: { id: +params.id },
      data: order,
    });
    return NextResponse.json(updated);
  } catch (error) {
    if(error instanceof Prisma.PrismaClientValidationError){
      return NextResponse.json({
        message: error.message,
      });
    
    }
    throw error
  }
};
