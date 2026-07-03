"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const sections = [
  {
    title: "🗨️ Part 1",
    description: "Personal questions and short answers",
    href: "/subjects/english/ielts/speaking/part1",
  },
  {
    title: "🎤 Part 2",
    description: "Cue card + 1–2 minute speaking",
    href: "/subjects/english/ielts/speaking/part2",
  },
  {
    title: "💭 Part 3",
    description: "Discussion and deeper questions",
    href: "/subjects/english/ielts/speaking/part3",
  },
  {
    title: "🚀 Band 7 Tips",
    description: "Fluency, vocabulary, grammar, pronunciation",
    href: "/subjects/english/ielts/speaking/tips",
  },
];

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🗣️ IELTS Speaking</h1>

        <p className="text-gray-600 mt-2">
          Part 1, Part 2, Part 3 practice болон band score өсгөх зөвлөгөө.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="text-gray-500 mt-2">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}