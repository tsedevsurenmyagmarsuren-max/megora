"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SATMathPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold">🧠 SAT Math</h1>

        <p className="text-gray-600 mt-2">
          SAT Math-ийн бүх үндсэн хэсгүүдийг эндээс үзэж, тест ажиллаарай.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <Link
            href="/subjects/sat-math/algebra"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">➕ Algebra</h2>
            <p className="text-gray-500 mt-2">Linear equations, systems</p>
          </Link>

          <Link
            href="/subjects/sat-math/advanced"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">📈 Advanced Math</h2>
            <p className="text-gray-500 mt-2">Quadratics, functions</p>
          </Link>

          <Link
            href="/subjects/sat-math/problem-solving"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">🧩 Problem Solving</h2>
            <p className="text-gray-500 mt-2">Ratios, percentages, data</p>
          </Link>

          <Link
            href="/subjects/sat-math/mock"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">📝 Full Mock</h2>
            <p className="text-gray-500 mt-2">Complete SAT practice tests</p>
          </Link>
        </div>
      </section>
    </main>
  );
}