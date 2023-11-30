"use client";

import { ServerTimeout } from "./action";

export default function ClientEntry() {
  const req = async () => {
    await fetch("/api/server", {
      method: "PUT",
    });
  };

  return (
    <>
      <button onClick={req}>Trigger Timeout API</button>
      <button onClick={ServerTimeout}>Trigger Server Action</button>
    </>
  );
}
