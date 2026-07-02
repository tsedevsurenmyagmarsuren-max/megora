"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const subjects = [
  {
    title: "🏛️ Нийгэм",
    description: "Онол, Mock Test, ЭЕШ Test",
    href: "/subjects/social",
  },
  {
    title: "🇬🇧 Англи хэл",
    description: "Vocabulary, Grammar, Reading, IELTS",
    href: "/subjects/english",
  },
  {
    title: "📐 Математик",
    description: "Суурь матем, ЭЕШ бодлого",
    href: "/subjects/math",
  },
  {
    title: "🧠 SAT Math",
    description: "Algebra, Advanced Math, Mock Test",
    href: "/subjects/sat-math",
  },
];

export default function SubjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>

        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold">Хичээлүүд</h1>
        <p className="text-gray-600 mt-2">
          Өөрийн сурах хичээлээ сонгоорой.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {subjects.map((subject) => (
            <Link
              key={subject.title}
              href={subject.href}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{subject.title}</h2>
              <p className="text-gray-500 mt-2">{subject.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}