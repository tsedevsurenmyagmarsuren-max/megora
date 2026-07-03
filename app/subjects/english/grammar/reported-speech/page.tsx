"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ReportedSpeechPage() {
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

        <h1 className="text-4xl font-bold mt-6">🗣️ Reported Speech</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Reported Speech гэж юу вэ?</h2>
            <p className="mt-2 text-gray-700">
              Хэн нэгний хэлсэн үгийг шууд биш, дам байдлаар хэлэхийг reported speech гэнэ.
            </p>
            <p className="mt-2">
              Direct: She said, “I am tired.”
              <br />
              Reported: She said that she was tired.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Tense change</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>am/is/are → was/were</li>
              <li>do/does → did</li>
              <li>will → would</li>
              <li>can → could</li>
              <li>have/has → had</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Time words</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>today → that day</li>
              <li>tomorrow → the next day</li>
              <li>yesterday → the day before</li>
              <li>now → then</li>
              <li>here → there</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Exam clue</h2>
            <p className="text-gray-700 mt-2">
              said/told гарвал tense ихэвчлэн нэг шат ухарна. “I” → тухайн хүний төлөөний нэр болж өөрчлөгдөнө.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}