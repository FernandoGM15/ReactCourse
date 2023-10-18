import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const products = await prisma.product.findMany({
      where:{category_id:1}
    });
    return NextResponse.json(products);
  } catch (error) {
    if (error instanceof Error) {
      error.message;
    }
  }
};
