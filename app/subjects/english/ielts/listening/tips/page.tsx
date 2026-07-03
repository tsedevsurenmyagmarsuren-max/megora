"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ListeningTipsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/listening" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🚀 IELTS Listening Tips</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Predict before listening</h2>
            <p className="mt-2 text-gray-700">
              Асуултаа урьдчилж уншаад ямар төрлийн үг орохыг таамагла: name, number, place, date, noun, adjective гэх мэт.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Listen for keywords</h2>
            <p className="mt-2 text-gray-700">
              Question дээрх exact word биш, synonym сонсогдож магадгүй.
            </p>
            <p className="mt-2 italic">
              cost → price / fee, begin → start, difficult → challenging
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Spelling matters</h2>
            <p className="mt-2 text-gray-700">
              Нэр, газар, олон тоо, тоо, өдөр, сар зэргийг маш анхааралтай бич.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Don’t panic</h2>
            <p className="mt-2 text-gray-700">
              Нэг answer алдсан бол дараагийн асуулт руу шууд шилж. Нэг дээр гацвал дараагийн хэдийг алдана.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Golden Rule</h2>
            <p className="text-gray-700 mt-2">
              Before listening: predict. While listening: follow keywords. After listening: check spelling.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}