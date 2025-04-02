import { patchIssueSchema } from "@/app/utils/schemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ issueId: string }>;
}
export async function PATCH(request: NextRequest, { params }: Params) {
  const { issueId } = await params;
  const body = await request.json();

  const validIssue = patchIssueSchema.safeParse(body);
  if (!validIssue.success)
    return NextResponse.json(
      { message: validIssue.error.errors },
      { status: 400 }
    );
  const { title, description, assignedToUserId } = body;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });
  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json({ message: "Invalid user" }, { status: 400 });
  }

  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data:{
      title,
      description,
      assignedToUserId
    }
    
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
