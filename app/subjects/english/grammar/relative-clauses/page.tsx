"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function RelativeClausesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/grammar" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🔗 Relative Clauses</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold">1. Who</h2>
            <p className="mt-2 text-gray-700">
              Хүнийг тодорхойлоход хэрэглэнэ.
            </p>
            <p className="mt-2">
              <b>Example:</b> The girl who won the prize is my sister.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Which</h2>
            <p className="mt-2 text-gray-700">
              Юм, амьтан, санааг тодорхойлоход хэрэглэнэ.
            </p>
            <p className="mt-2">
              <b>Example:</b> The book which I bought is interesting.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. That</h2>
            <p className="mt-2 text-gray-700">
              Хүн болон юм аль алинд хэрэглэж болно.
            </p>
            <p className="mt-2">
              <b>Example:</b> The car that he drives is expensive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Where</h2>
            <p className="mt-2 text-gray-700">
              Газрыг тодорхойлоход хэрэглэнэ.
            </p>
            <p className="mt-2">
              <b>Example:</b> This is the house where I grew up.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Whose</h2>
            <p className="mt-2 text-gray-700">
              Эзэмшлийг илэрхийлнэ.
            </p>
            <p className="mt-2">
              <b>Example:</b> The student whose laptop was stolen is upset.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Exam clue</h2>
            <p className="text-gray-700 mt-2">
              Хүн → who  
              Юм → which  
              Хүн/юм → that  
              Газар → where  
              Эзэмшил → whose
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}