"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function MathPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold">📐 Математик</h1>

        <p className="text-gray-600 mt-2">
          Суурь ойлголт, томьёо, ЭЕШ бодлого болон тестүүд.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Link href="/subjects/math/basics" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h2 className="text-xl font-bold">📘 Суурь ойлголт</h2>
            <p className="text-gray-500 mt-2">Алгебр, функц, геометр</p>
          </Link>

          <Link href="/subjects/math/formulas" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h2 className="text-xl font-bold">🧾 Томьёо</h2>
            <p className="text-gray-500 mt-2">Чухал томьёонууд</p>
          </Link>

          <Link href="/subjects/math/yesh" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
            <h2 className="text-xl font-bold">🎯 ЭЕШ бодлого</h2>
            <p className="text-gray-500 mt-2">Шалгалтын бодлого</p>
          </Link>
        </div>
      </section>
    </main>
  );
}