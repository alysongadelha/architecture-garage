import { getDocument } from "@/firebase/firestore/getData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { projectKey: string } }
) {
  const projectKey = context.params.projectKey;

  if (!projectKey) throw new Error("Invalid ID");

  const { result, error } = await getDocument("projectDetail", projectKey);
  return NextResponse.json({ result, error });
}
