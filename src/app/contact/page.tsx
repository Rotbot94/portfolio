"use client";
import Link from "next/link";
import Title from "@/app/components/title";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title title={"Contact"}></Title>
      <Link href="/">back to main</Link>
    </div>
  );
}
