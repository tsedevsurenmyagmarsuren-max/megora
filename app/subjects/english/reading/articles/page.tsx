"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ArticlesReadingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/reading" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">📰 Short Article Reading</h1>
        <p className="text-gray-600 mt-2">Set 1 — Article + questions + vocab</p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">The Power of Daily Reading</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Reading every day is one of the simplest ways to improve language skills.
              It helps students learn new vocabulary, understand sentence structure,
              and develop stronger concentration. Even ten minutes of daily reading can
              make a noticeable difference over time. Students who read regularly often
              find it easier to write essays, understand exam passages, and express their
              ideas clearly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Questions</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-2 text-gray-700">
              <li>What is one benefit of daily reading?</li>
              <li>How much daily reading can make a difference?</li>
              <li>What skill can reading improve besides vocabulary?</li>
              <li>Why might reading help with exams?</li>
              <li>What is the main idea of the article?</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>It improves language skills / vocabulary.</li>
              <li>Ten minutes a day.</li>
              <li>Writing, concentration, or sentence structure.</li>
              <li>It helps students understand passages better.</li>
              <li>Daily reading improves language ability over time.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Vocabulary</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li><b>improve</b> — сайжруулах</li>
              <li><b>vocabulary</b> — үгийн сан</li>
              <li><b>concentration</b> — төвлөрөл</li>
              <li><b>noticeable</b> — мэдэгдэхүйц</li>
              <li><b>regularly</b> — тогтмол</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}