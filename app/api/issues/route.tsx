import { validateIssue } from "@/app/utils/schemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate body
  const validIssue = validateIssue.safeParse(body);
  if (!validIssue.success)
    return NextResponse.json(
      { message: validIssue.error.errors },
      { status: 400 }
    );
  //   if not return error
  const issue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(issue, { status: 201 });
}
