"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <Link href="/subjects" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">Нийгэм судлал</h1>
        <p className="text-gray-600 mt-2">
          Хичээлүүд, онолууд, mock test болон ЭЕШ бэлтгэл
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {/* Lessons */}
          <Link
            href="/subjects/social/lessons"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">📚 Хичээлүүд</h2>
            <p className="text-gray-500 mt-2">
              Нийгмийн бүтэц, нийгэмшил, давхраажилт, гажуудал гэх мэт
            </p>
          </Link>

          {/* Theories */}
          <Link
            href="/subjects/social/theories"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">🧠 Нийгмийн онолууд</h2>
            <p className="text-gray-500 mt-2">
              Functionalism, Conflict, Symbolic, Formation гэх мэт
            </p>
          </Link>

          {/* Mock Test */}
          <Link
            href="/exams"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">📝 Mock Test</h2>
            <p className="text-gray-500 mt-2">
              20 минутын хугацаатай practice тестүүд
            </p>
          </Link>

          {/* YESH */}
          <Link
            href="/yesh-test"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">🎯 ЭЕШ Test</h2>
            <p className="text-gray-500 mt-2">
              ЭЕШ загвар тестүүд болон бодит шалгалтын формат
            </p>
          </Link>

          {/* Premium */}
          <Link
            href="/premium"
            className="bg-yellow-50 border border-yellow-300 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">🔒 Premium</h2>
            <p className="text-gray-500 mt-2">
              Advanced mock test, тайлбартай хариулт, premium материал
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
}