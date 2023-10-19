import { OrderI } from "@/interfaces/order.interfaces";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const orders = await prisma.order.findMany({ where: { state: false } });
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ message: "An error ocurred" });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const request: OrderI = await req.json();
    const order = await prisma.order.create({ data: request });
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" });
  }
};


