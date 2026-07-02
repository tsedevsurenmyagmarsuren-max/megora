"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold">🇬🇧 Англи хэл</h1>

        <p className="text-gray-600 mt-2">
          Vocabulary, grammar, reading болон IELTS бэлтгэлээ эндээс эхлүүл.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <Link
            href="/subjects/english/vocabulary"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">📖 Vocabulary</h2>
            <p className="text-gray-500 mt-2">Шинэ үгс сурах</p>
          </Link>

          <Link
            href="/subjects/english/grammar"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">✍ Grammar</h2>
            <p className="text-gray-500 mt-2">Дүрэм, дасгалууд</p>
          </Link>

          <Link
            href="/subjects/english/reading"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">📚 Reading</h2>
            <p className="text-gray-500 mt-2">Унших чадвар хөгжүүлэх</p>
          </Link>

          <Link
            href="/subjects/english/ielts"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">🎯 IELTS</h2>
            <p className="text-gray-500 mt-2">Writing, Speaking practice</p>
          </Link>
        </div>
      </section>
    </main>
  );
}