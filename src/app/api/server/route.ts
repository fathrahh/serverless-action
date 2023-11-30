import { NextResponse } from "next/server";

export function PUT() {
  setTimeout(() => {
    console.log("yey yoy");
  }, 20000);

  return NextResponse.json({
    data: "",
  });
}
