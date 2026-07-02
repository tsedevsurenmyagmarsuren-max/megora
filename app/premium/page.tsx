"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>

        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-16 text-center">
        <span className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
          Coming Soon 🚀
        </span>

        <h1 className="text-5xl font-bold mt-6">
          Megora Premium 🔒
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Илүү хүчтэй бэлтгэл, илүү гүн тайлбар, илүү олон тест.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-bold text-xl">🏛️ Нийгэм Premium</h2>
            <p className="text-gray-500 mt-2">
              20+ advanced mock test, ЭЕШ full sets, тайлбар
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-bold text-xl">🇬🇧 English Premium</h2>
            <p className="text-gray-500 mt-2">
              IELTS writing, speaking practice, advanced vocab
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-bold text-xl">📐 Math Premium</h2>
            <p className="text-gray-500 mt-2">
              Hard EYESH problems + step-by-step solutions
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-bold text-xl">🧠 SAT Premium</h2>
            <p className="text-gray-500 mt-2">
              Full SAT mocks + explanations
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-2xl font-bold text-lg">
            Unlock Soon
          </button>
        </div>
      </section>
    </main>
  );
}