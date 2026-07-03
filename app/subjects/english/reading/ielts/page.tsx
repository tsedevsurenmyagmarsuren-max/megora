"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function IELTSReadingPage() {
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

        <h1 className="text-4xl font-bold mt-6">🎯 IELTS Reading</h1>
        <p className="text-gray-600 mt-2">Set 1 — Academic passage practice</p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          {/* Passage */}
          <div>
            <h2 className="text-2xl font-bold">The Importance of Sleep</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Sleep is one of the most essential functions of the human body.
              During sleep, the body repairs itself, strengthens the immune system,
              and processes information learned during the day. Studies have shown
              that students who sleep at least eight hours perform better in exams
              than those who sleep less. Lack of sleep can lead to poor concentration,
              weaker memory, and increased stress levels. In modern society, however,
              many young people sacrifice sleep because of social media, homework,
              or entertainment. Experts recommend maintaining a regular sleep schedule
              to improve both mental and physical health.
            </p>
          </div>

          {/* True False Not Given */}
          <div>
            <h2 className="text-2xl font-bold">Questions 1–3 (True / False / Not Given)</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-2 text-gray-700">
              <li>Sleep helps the body repair itself.</li>
              <li>Students who sleep six hours always perform best in exams.</li>
              <li>Experts recommend sleeping at the same time every day.</li>
            </ol>
          </div>

          {/* Multiple Choice */}
          <div>
            <h2 className="text-2xl font-bold">Questions 4–5 (Multiple Choice)</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-2 text-gray-700">
              <li>
                What can lack of sleep cause?
                <ul className="list-disc ml-6 mt-2">
                  <li>A. Better memory</li>
                  <li>B. Poor concentration</li>
                  <li>C. Stronger immune system</li>
                </ul>
              </li>

              <li>
                Why do many young people sacrifice sleep?
                <ul className="list-disc ml-6 mt-2">
                  <li>A. Work</li>
                  <li>B. Travel</li>
                  <li>C. Social media and homework</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Answer Key */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>True</li>
              <li>False</li>
              <li>Not Given</li>
              <li>B</li>
              <li>C</li>
            </ol>
          </div>

          {/* Vocabulary */}
          <div>
            <h2 className="text-2xl font-bold">Key Vocabulary</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li><b>essential</b> — маш чухал</li>
              <li><b>repairs</b> — сэргээх, засах</li>
              <li><b>immune system</b> — дархлааны систем</li>
              <li><b>concentration</b> — төвлөрөл</li>
              <li><b>sacrifice</b> — золиослох</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}