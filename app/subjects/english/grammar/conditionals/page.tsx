"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ConditionalsPage() {
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

        <h1 className="text-4xl font-bold mt-6">🌧️ Conditionals</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Zero Conditional</h2>
            <p className="mt-2 text-gray-700">
              Ерөнхий үнэн, байнга үнэн байдаг зүйлд хэрэглэнэ.
            </p>
            <p className="mt-2">
              <b>Form:</b> If + present simple, present simple
              <br />
              <b>Example:</b> If water boils, it turns into steam.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. First Conditional</h2>
            <p className="mt-2 text-gray-700">
              Ирээдүйд болох боломжтой нөхцөлд хэрэглэнэ.
            </p>
            <p className="mt-2">
              <b>Form:</b> If + present simple, will + verb
              <br />
              <b>Example:</b> If I study hard, I will pass the exam.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Second Conditional</h2>
            <p className="mt-2 text-gray-700">
              Одоо үед бодит бус эсвэл магадлал багатай нөхцөлд хэрэглэнэ.
            </p>
            <p className="mt-2">
              <b>Form:</b> If + past simple, would + verb
              <br />
              <b>Example:</b> If I had more time, I would learn another language.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Third Conditional</h2>
            <p className="mt-2 text-gray-700">
              Өнгөрсөнд болоогүй зүйлийг төсөөлөхөд хэрэглэнэ.
            </p>
            <p className="mt-2">
              <b>Form:</b> If + had + V3, would have + V3
              <br />
              <b>Example:</b> If she had prepared earlier, she would have scored higher.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Exam clue</h2>
            <p className="text-gray-700 mt-2">
              If + present → will. If + past → would. If + had V3 → would have V3.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}