"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Task1Page() {
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

        <h1 className="text-4xl font-bold mt-6">📊 IELTS Writing Task 1</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Task 1 гэж юу вэ?</h2>
            <p className="mt-2 text-gray-700">
              Task 1 дээр graph, chart, table, process эсвэл map-ийг тайлбарлаж бичдэг.
              Хамгийн гол нь мэдээллийг summary хийж, гол trend-ийг харуулах.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Structure</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Introduction (question paraphrase)</li>
              <li>Overview (main trends)</li>
              <li>Body paragraph 1</li>
              <li>Body paragraph 2</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Sample Introduction</h2>
            <p className="mt-2 text-gray-700 italic">
              The chart illustrates the percentage of students who used online learning
              platforms between 2010 and 2020.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Useful Overview Phrases</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Overall, it is clear that...</li>
              <li>It can be seen that...</li>
              <li>The most noticeable feature is...</li>
              <li>There was a significant increase in...</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Important Tips</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Do not give your opinion.</li>
              <li>Focus on comparisons and trends.</li>
              <li>Use data correctly.</li>
              <li>Always include an overview.</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Band 7 Tip</h2>
            <p className="text-gray-700 mt-2">
              Overview paragraph is very important. Without it, your score can drop.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}