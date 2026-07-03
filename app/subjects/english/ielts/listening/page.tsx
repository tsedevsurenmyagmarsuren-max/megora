"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const sections = [
  {
    title: "🎧 Section 1",
    description: "Daily conversation, form completion",
    href: "/subjects/english/ielts/listening/section1",
  },
  {
    title: "📢 Section 2",
    description: "Monologue, map/notes practice",
    href: "/subjects/english/ielts/listening/section2",
  },
  {
    title: "👥 Section 3",
    description: "Academic conversation",
    href: "/subjects/english/ielts/listening/section3",
  },
  {
    title: "🎓 Section 4",
    description: "Academic lecture",
    href: "/subjects/english/ielts/listening/section4",
  },
  {
    title: "🚀 Listening Tips",
    description: "Keyword, prediction, spelling tips",
    href: "/subjects/english/ielts/listening/tips",
  },
];

export default function ListeningPage() {
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

        <h1 className="text-4xl font-bold mt-6">🎧 IELTS Listening</h1>
        <p className="text-gray-600 mt-2">
          Section 1–4 practice болон listening score өсгөх зөвлөгөө.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
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