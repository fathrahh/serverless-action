"use server";

import { timeout } from "./timeout";

export async function ServerTimeout() {
  await timeout(20000);
}
