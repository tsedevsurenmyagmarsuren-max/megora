"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function WritingStructurePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/writing" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🏗 Essay Structure</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="mt-2 text-gray-700">
              Introduction дээр question-ийг paraphrase хийгээд өөрийн main idea-г товч хэлнэ.
            </p>
            <p className="mt-2 italic">
              Example: Nowadays, many people believe that technology has changed education significantly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Body Paragraph 1</h2>
            <p className="mt-2 text-gray-700">
              Эхний гол санаагаа гаргаж, тайлбарлаад example өгнө.
            </p>
            <p className="mt-2">
              <b>Structure:</b> Main idea → Explanation → Example
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Body Paragraph 2</h2>
            <p className="mt-2 text-gray-700">
              Хоёр дахь гол санаагаа мөн адил тайлбарлаж, жишээ өгнө.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Conclusion</h2>
            <p className="mt-2 text-gray-700">
              Main idea-гаа товч дүгнэж, opinion-оо дахин бататгана.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Band 7 Tip</h2>
            <p className="text-gray-700 mt-2">
              Paragraph бүр clear байх ёстой. Нэг paragraph = нэг гол санаа.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}