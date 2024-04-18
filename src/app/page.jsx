"use client"

import { redirect } from "next/navigation"
console.log("hehehehehe");
export default function Home() {
  let is_logger = false
  return (
    <div>
      {
        is_logger === true? redirect("Home") : redirect("login")
      }
    </div>
  )
}
