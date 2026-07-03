"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const topics = [
  {
    title: "⏰ Tenses",
    description: "Present, past, future tense",
    href: "/subjects/english/grammar/tenses",
  },
  {
    title: "🔁 Passive Voice",
    description: "Active → passive хэлбэр",
    href: "/subjects/english/grammar/passive",
  },
  {
    title: "🌧️ Conditionals",
    description: "If clauses, 0–3 conditionals",
    href: "/subjects/english/grammar/conditionals",
  },
  {
    title: "🔗 Relative Clauses",
    description: "who, which, that, where",
    href: "/subjects/english/grammar/relative-clauses",
  },
  {
    title: "🗣️ Reported Speech",
    description: "Direct → indirect speech",
    href: "/subjects/english/grammar/reported-speech",
  },
  {
    title: "⚡ Modals",
    description: "can, must, should, might",
    href: "/subjects/english/grammar/modals",
  },
];

export default function GrammarPage() {
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

        <h1 className="text-4xl font-bold mt-6">✍ Grammar</h1>
        <p className="text-gray-600 mt-2">
          IELTS, SAT болон ЭЕШ-д хэрэгтэй гол дүрмүүд.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{topic.title}</h2>
              <p className="text-gray-500 mt-2">{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}