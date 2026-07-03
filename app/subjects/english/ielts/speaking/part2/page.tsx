"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SpeakingPart2Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/speaking" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🎤 IELTS Speaking Part 2</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">Cue Card</h2>
            <p className="mt-4 text-gray-700">
              Describe a book you recently read.
            </p>

            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>What the book was</li>
              <li>When you read it</li>
              <li>What it was about</li>
              <li>And explain why you liked it</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">1 Minute Preparation Ideas</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Book title</li>
              <li>Main topic</li>
              <li>Your feelings</li>
              <li>What you learned</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Sample Answer</h2>
            <p className="mt-2 text-gray-700 leading-8">
              One book I recently read was <i>Atomic Habits</i> by James Clear.
              I read it about two months ago because I wanted to improve my daily
              routines. The book is mainly about how small habits can create big
              changes over time. What I liked most was its practical advice and
              real-life examples. It helped me understand the importance of consistency,
              and since then I have tried to build better habits in my own life.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Part 2 Tip</h2>
            <p className="text-gray-700 mt-2">
              Answer-аа 4 хэсэгт хуваа: Intro → Details → Feelings → Conclusion.
              Ингэвэл 2 минут дүүргэхэд амар.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}