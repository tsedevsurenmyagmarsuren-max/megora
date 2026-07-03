"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function YESHReadingPage() {
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

        <h1 className="text-4xl font-bold mt-6">📘 ЭЕШ Reading</h1>
        <p className="text-gray-600 mt-2">
          Set 1 — ЭЕШ-style reading practice
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          {/* Passage */}
          <div>
            <h2 className="text-2xl font-bold">Healthy Habits</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Healthy habits are important for a happy life. Eating nutritious food,
              exercising regularly, and getting enough sleep can improve both physical
              and mental health. Many students, however, spend too much time on their
              phones and do not exercise enough. Experts say that even 30 minutes of
              walking each day can make a big difference.
            </p>
          </div>

          {/* Questions */}
          <div>
            <h2 className="text-2xl font-bold">Questions</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-2 text-gray-700">
              <li>Why are healthy habits important?</li>
              <li>What can improve mental health?</li>
              <li>What do many students spend too much time on?</li>
              <li>How long should people walk each day?</li>
              <li>What is the main idea of the passage?</li>
            </ol>
          </div>

          {/* Answer Key */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>They help people live a happy and healthy life.</li>
              <li>Eating well, exercising, and sleeping enough.</li>
              <li>On their phones.</li>
              <li>30 minutes.</li>
              <li>Healthy habits improve life and health.</li>
            </ol>
          </div>

          {/* Vocabulary */}
          <div>
            <h2 className="text-2xl font-bold">Key Vocabulary</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li><b>nutritious</b> — тэжээллэг</li>
              <li><b>exercise</b> — дасгал хийх</li>
              <li><b>regularly</b> — тогтмол</li>
              <li><b>mental health</b> — сэтгэцийн эрүүл мэнд</li>
              <li><b>difference</b> — өөрчлөлт, ялгаа</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}