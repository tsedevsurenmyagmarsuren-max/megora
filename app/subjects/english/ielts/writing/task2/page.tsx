"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Task2Page() {
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

        <h1 className="text-4xl font-bold mt-6">📝 IELTS Writing Task 2</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Opinion Essay Structure</h2>
            <p className="mt-2 text-gray-700">
              Introduction → Body 1 → Body 2 → Conclusion
            </p>

            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Paraphrase the question</li>
              <li>State your opinion clearly</li>
              <li>Give 2 strong reasons</li>
              <li>Summarize your view</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Discussion Essay Structure</h2>
            <p className="mt-2 text-gray-700">
              Introduction → One side → Other side → Opinion → Conclusion
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Problem / Solution Structure</h2>
            <p className="mt-2 text-gray-700">
              Introduction → Problems → Solutions → Conclusion
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Sample Introduction</h2>
            <p className="mt-2 text-gray-700 italic">
              In recent years, many people have argued that university education should be free for everyone. 
              While this idea has several benefits, I believe it may also create certain challenges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Useful Phrases</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>It is widely believed that...</li>
              <li>From my perspective...</li>
              <li>One major reason is that...</li>
              <li>On the other hand...</li>
              <li>In conclusion...</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Band 7 Tip</h2>
            <p className="text-gray-700 mt-2">
              Always answer the question directly. Clear structure + strong examples = higher score.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}