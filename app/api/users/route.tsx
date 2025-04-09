import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany({ orderBy: { firstName: "asc" } });
  return NextResponse.json(user);
}
