import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const category = await prisma.category.findMany({
      include: { products: true },
    });
    return NextResponse.json(category);
  } catch (error) {
    if (error instanceof Error) {
      error.message;
    }
  }
};
