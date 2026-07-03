"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function TensesPage() {
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

        <h1 className="text-4xl font-bold mt-6">⏰ English Tenses</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Present Simple</h2>
            <p className="mt-2 text-gray-700">
              Тогтмол үйлдэл, ерөнхий үнэн, зуршлыг илэрхийлнэ.
            </p>
            <p className="mt-2"><b>Example:</b> She studies English every day.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Present Continuous</h2>
            <p className="mt-2 text-gray-700">
              Одоо яг болж буй үйлдлийг илэрхийлнэ.
            </p>
            <p className="mt-2"><b>Example:</b> She is studying English now.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Past Simple</h2>
            <p className="mt-2 text-gray-700">
              Өнгөрсөн хугацаанд болсон, дууссан үйлдлийг илэрхийлнэ.
            </p>
            <p className="mt-2"><b>Example:</b> I visited Australia last year.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Future Simple</h2>
            <p className="mt-2 text-gray-700">
              Ирээдүйд болох үйлдлийг илэрхийлнэ.
            </p>
            <p className="mt-2"><b>Example:</b> I will apply to university next year.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Exam clue</h2>
            <p className="text-gray-700 mt-2">
              every day, usually, often → Present Simple.  
              now, at the moment → Present Continuous.  
              yesterday, last year → Past Simple.  
              tomorrow, next year → Future Simple.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}