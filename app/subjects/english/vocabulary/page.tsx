"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function VocabularyPage() {
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

        <h1 className="text-4xl font-bold mt-6">📖 Vocabulary</h1>

        <p className="text-gray-600 mt-2">
          IELTS, SAT, ЭЕШ-д зориулсан үгийн сангаа эндээс хөгжүүлээрэй.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Link
            href="/subjects/english/vocabulary/ielts"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">🎯 IELTS Common Words</h2>
            <p className="text-gray-500 mt-2">
              Academic vocabulary + examples + synonyms
            </p>
          </Link>

          <Link
            href="/subjects/english/vocabulary/sat"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">🧠 SAT Common Words</h2>
            <p className="text-gray-500 mt-2">
              High-frequency SAT vocabulary
            </p>
          </Link>

          <Link
            href="/subjects/english/vocabulary/yesh"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">📘 ЭЕШ Vocabulary</h2>
            <p className="text-gray-500 mt-2">
              ЕШ-д түгээмэл ордог үгс
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
}