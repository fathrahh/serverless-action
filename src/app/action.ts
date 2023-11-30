"use server";

export function ServerTimeout() {
  setTimeout(() => {
    console.log("TimeOut");
  }, 20000);
}
