import { getCollection } from "@/firebase/firestore/getData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { result, error } = await getCollection("projects");
  return NextResponse.json({ result, error });
}
