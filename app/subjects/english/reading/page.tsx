"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const readingSections = [
  {
    title: "🎯 IELTS Reading",
    description: "Academic passages, question types, timed practice",
    href: "/subjects/english/reading/ielts",
  },
  {
    title: "🧠 SAT Reading",
    description: "Evidence-based reading practice",
    href: "/subjects/english/reading/sat",
  },
  {
    title: "📘 ЭЕШ Reading",
    description: "ЭЕШ-д зориулсан унших дасгалууд",
    href: "/subjects/english/reading/yesh",
  },
  {
    title: "📰 Short Articles",
    description: "Богино article + 5 асуулт + vocab",
    href: "/subjects/english/reading/articles",
  },
];

export default function ReadingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <Link href="/subjects/english" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">📚 Reading</h1>
        <p className="text-gray-600 mt-2">
          IELTS, SAT, ЭЕШ болон богино унших дасгалууд.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {readingSections.map((section) => (
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