"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SATReadingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <Link href="/subjects/english/reading" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🧠 SAT Reading</h1>
        <p className="text-gray-600 mt-2">
          Set 1 — Inference, evidence, vocabulary in context
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">The Value of Curiosity</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Curiosity has long been considered a driving force behind learning.
              A curious student does not simply memorize information; instead, the
              student asks why ideas matter and how they connect to the wider world.
              Researchers suggest that curiosity can improve attention and make new
              information easier to remember. In this sense, curiosity is not a
              distraction from serious study, but a powerful tool that deepens it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Questions</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-4 text-gray-700">
              <li>
                The main purpose of the passage is to:
                <ul className="list-disc ml-6 mt-2">
                  <li>A. explain why memorization is useless</li>
                  <li>B. argue that curiosity supports learning</li>
                  <li>C. describe a new school system</li>
                  <li>D. criticize researchers</li>
                </ul>
              </li>

              <li>
                As used in the passage, “driving force” most nearly means:
                <ul className="list-disc ml-6 mt-2">
                  <li>A. physical movement</li>
                  <li>B. main cause or motivation</li>
                  <li>C. strict rule</li>
                  <li>D. difficult problem</li>
                </ul>
              </li>

              <li>
                Which idea is best supported by the passage?
                <ul className="list-disc ml-6 mt-2">
                  <li>A. Curious students avoid difficult subjects.</li>
                  <li>B. Curiosity can help students remember information.</li>
                  <li>C. Memorization is always better than questioning.</li>
                  <li>D. Curiosity prevents attention.</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>B</li>
              <li>B</li>
              <li>B</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Vocabulary</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li><b>curiosity</b> — сониуч зан</li>
              <li><b>memorize</b> — цээжлэх</li>
              <li><b>attention</b> — анхаарал</li>
              <li><b>distraction</b> — анхаарал сарниулах зүйл</li>
              <li><b>deepen</b> — гүнзгийрүүлэх</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}