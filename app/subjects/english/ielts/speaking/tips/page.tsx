"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SpeakingTipsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/speaking" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🚀 IELTS Speaking Tips</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Fluency</h2>
            <p className="mt-2 text-gray-700">
              Хэт удаан зогсолт хийхгүйгээр санаагаа үргэлжлүүлж ярь. Perfect grammar хүлээж битгий удаашир.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Vocabulary</h2>
            <p className="mt-2 text-gray-700">
              Easy word-оо арай academic word-оор сольж сур.
            </p>
            <p className="mt-2 italic">
              good → beneficial / useful / impressive
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Grammar Range</h2>
            <p className="mt-2 text-gray-700">
              Simple sentence + complex sentence хольж ярь.
            </p>
            <p className="mt-2 italic">
              Although it is difficult, I think it is useful.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Pronunciation</h2>
            <p className="mt-2 text-gray-700">
              Accent төгс байх албагүй. Харин үгээ тод, ойлгомжтой хэлэх хэрэгтэй.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Answer Structure</h2>
            <p className="mt-2 text-gray-700">
              Point → Reason → Example бүтэц ашигла.
            </p>
            <p className="mt-2 italic">
              I prefer online learning because it is flexible. For example, I can study anytime.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Golden Rule</h2>
            <p className="text-gray-700 mt-2">
              Don’t memorize full answers. Memorize useful structures and ideas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}