import { timeout } from "@/app/timeout";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function PUT() {
  await timeout(20000);

  return NextResponse.json({
    data: "",
  });
}
