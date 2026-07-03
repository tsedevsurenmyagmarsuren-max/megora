"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function PassivePage() {
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

        <h1 className="text-4xl font-bold mt-6">🔁 Passive Voice</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Passive Voice гэж юу вэ?</h2>
            <p className="mt-2 text-gray-700">
              Үйлдлийг хэн хийснээс илүү тухайн үйлдэл хэнд/юунд тохиолдсоныг онцлох үед хэрэглэнэ.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Үндсэн бүтэц</h2>
            <p className="mt-2 text-gray-700">
              <b>Subject + be + V3/past participle</b>
            </p>
            <p className="mt-2">
              Active: People speak English worldwide.
              <br />
              Passive: English is spoken worldwide.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Tense examples</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Present Simple: The book is written in English.</li>
              <li>Past Simple: The house was built in 1990.</li>
              <li>Future Simple: The test will be checked tomorrow.</li>
              <li>Present Perfect: The work has been completed.</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Exam clue</h2>
            <p className="text-gray-700 mt-2">
              by + хүн, эсвэл үйлдэл хийгдэж байгаа объект онцлогдвол Passive байх магадлалтай.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}