"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>

        <UserButton />
      </nav>

      {/* Welcome */}
      <section className="max-w-6xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-bold">
          Сайн байна уу, {user?.firstName || "Сурагч"} 👋
        </h1>

        <p className="text-gray-600 mt-2">
          Өнөөдөр сурах зүйлээ сонгоорой.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          
          <Link
            href="/subjects"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">📚 Хичээлүүд</h2>
            <p className="text-gray-500 mt-2">Онолын хичээлүүд үзэх</p>
          </Link>

          <Link
            href="/exams"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">📝 Mock Tests</h2>
            <p className="text-gray-500 mt-2">Шалгалтын тест ажиллах</p>
          </Link>

          <Link
            href="/yesh-test"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">🎯 ЭЕШ Test</h2>
            <p className="text-gray-500 mt-2">ЭЕШ бэлтгэл тестүүд</p>
          </Link>

          <Link
            href="/profile"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">👤 Profile</h2>
            <p className="text-gray-500 mt-2">Өөрийн мэдээлэл харах</p>
          </Link>
        </div>
      </section>
    </main>
  );
}