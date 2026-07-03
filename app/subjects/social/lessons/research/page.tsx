"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ResearchLessonPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/social/lessons" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">Нийгмийн судалгаа</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Нийгмийн судалгаа гэж юу вэ?</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн судалгаа гэдэг нь нийгмийн үзэгдэл, харилцаа, зан үйл,
              асуудлыг шинжлэх ухааны аргаар судалж мэдээлэл цуглуулах үйл явц юм.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Судалгааны үндсэн аргууд</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Асуулга</li>
              <li>Ярилцлага</li>
              <li>Ажиглалт</li>
              <li>Баримт бичгийн шинжилгээ</li>
              <li>Туршилт</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Анхдагч ба хоёрдогч мэдээлэл</h2>
            <p className="text-gray-700 mt-2">
              <b>Анхдагч мэдээлэл</b> нь судлаач өөрөө шууд цуглуулсан мэдээлэл.
              <br />
              <b>Хоёрдогч мэдээлэл</b> нь өмнө нь цуглуулагдсан бэлэн мэдээлэл.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Тоон ба чанарын судалгаа</h2>
            <p className="text-gray-700 mt-2">
              <b>Тоон судалгаа</b> нь тоо, хувь, статистик мэдээлэлд тулгуурлана.
              <br />
              <b>Чанарын судалгаа</b> нь утга, тайлбар, үзэл бодол, туршлагыг судална.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ-д анхаарах</h2>
            <p className="text-gray-700 mt-2">
              “Асуулга”, “ярилцлага”, “ажиглалт”, “анхдагч мэдээлэл”,
              “хоёрдогч мэдээлэл”, “тоон ба чанарын судалгаа” гэсэн ойлголтуудыг ялгаарай.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}