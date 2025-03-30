import { NextRequest } from "next/server";

interface Params {
  params: Promise<{ issueId: string }>;
}
export async function GET(request: NextRequest, { params }: Params) {
  const { issueId } = await params;
}
