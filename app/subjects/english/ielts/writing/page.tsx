"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const writingSections = [
  {
    title: "📊 Task 1",
    description: "Charts, graphs, process, maps",
    href: "/subjects/english/ielts/writing/task1",
  },
  {
    title: "📝 Task 2",
    description: "Opinion, discussion, problem-solution essays",
    href: "/subjects/english/ielts/writing/task2",
  },
  {
    title: "🏗 Essay Structure",
    description: "Introduction, body, conclusion structure",
    href: "/subjects/english/ielts/writing/structure",
  },
  {
    title: "💬 Useful Phrases",
    description: "Band 7+ linking and academic phrases",
    href: "/subjects/english/ielts/writing/phrases",
  },
  {
    title: "🚀 Band 7 Tips",
    description: "How to improve writing score",
    href: "/subjects/english/ielts/writing/tips",
  },
];

export default function WritingPage() {
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

        <h1 className="text-4xl font-bold mt-6">✍️ IELTS Writing</h1>

        <p className="text-gray-600 mt-2">
          Task 1, Task 2, essay бүтэц, useful phrases, band score өсгөх зөвлөгөө.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {writingSections.map((section) => (
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