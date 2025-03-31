import { validateIssue } from "@/app/utils/schemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ issueId: string }>;
}
export async function PATCH(request: NextRequest, { params }: Params) {
  const { issueId } = await params;
  const body = await request.json();
  const validIssue = validateIssue.safeParse(body);
  if (!validIssue.success)
    return NextResponse.json(
      { message: validIssue.error.errors },
      { status: 400 }
    );
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });
  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });
  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(updatedIssue);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { issueId } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });
  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });
  await prisma.issue.delete({ where: { id: issue.id } });
  return NextResponse.json({});
}
