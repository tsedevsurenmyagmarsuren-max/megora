"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function WritingPhrasesPage() {
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

        <h1 className="text-4xl font-bold mt-6">💬 Useful Phrases</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>It is widely believed that...</li>
              <li>In recent years, there has been growing concern about...</li>
              <li>This essay will discuss...</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Giving Opinion</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>From my perspective...</li>
              <li>I strongly believe that...</li>
              <li>In my view...</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Adding Ideas</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Furthermore...</li>
              <li>In addition...</li>
              <li>Moreover...</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Contrast</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>However...</li>
              <li>On the other hand...</li>
              <li>Although this may be true...</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Conclusion</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>In conclusion...</li>
              <li>To sum up...</li>
              <li>Overall, it can be argued that...</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}