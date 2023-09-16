"use client";
import Link from "next/link";
import Title from "@/app/components/title";

export default function Skills() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title title={"Skills"}></Title>
      <Link href="/">back to main</Link>
    </div>
  );
}
