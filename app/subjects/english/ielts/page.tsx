"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const sections = [
  {
    title: "✍️ Writing",
    description: "Task 1, Task 2, templates, band tips",
    href: "/subjects/english/ielts/writing",
  },
  {
    title: "🗣️ Speaking",
    description: "Part 1, Part 2, Part 3 practice",
    href: "/subjects/english/ielts/speaking",
  },
  {
    title: "🎧 Listening",
    description: "Practice scripts + questions",
    href: "/subjects/english/ielts/listening",
  },
  {
    title: "💡 Tips & Strategies",
    description: "Band score improvement strategies",
    href: "/subjects/english/ielts/tips",
  },
];

export default function IELTSHubPage() {
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

        <h1 className="text-4xl font-bold mt-6">🎯 IELTS Preparation</h1>

        <p className="text-gray-600 mt-2">
          Writing, Speaking, Listening болон band score өсгөх стратегиуд.
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