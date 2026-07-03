"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ChangeLessonPage() {
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

        <h1 className="text-4xl font-bold mt-6">Нийгмийн өөрчлөлт</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Нийгмийн өөрчлөлт гэж юу вэ?</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн өөрчлөлт гэдэг нь нийгмийн бүтэц, харилцаа, үнэт зүйл,
              институт, амьдралын хэв маяг цаг хугацааны явцад өөрчлөгдөх үйл явц юм.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Өөрчлөлтийн шалтгаан</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Техник, технологийн хөгжил</li>
              <li>Эдийн засгийн өөрчлөлт</li>
              <li>Соёлын нөлөө</li>
              <li>Хүн амын өсөлт, шилжилт хөдөлгөөн</li>
              <li>Улс төрийн шинэчлэл</li>
              <li>Даяаршил</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Өөрчлөлтийн хэлбэр</h2>
            <p className="text-gray-700 mt-2">
              <b>Аажим өөрчлөлт:</b> Урт хугацаанд бага багаар явагдана.
              <br />
              <b>Огцом өөрчлөлт:</b> Богино хугацаанд хүчтэй өөрчлөлт гарна.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Шинэчлэл ба хувьсгал</h2>
            <p className="text-gray-700 mt-2">
              <b>Шинэчлэл</b> нь нийгмийн тогтолцоог бүхэлд нь нураахгүйгээр сайжруулах өөрчлөлт.
              <br />
              <b>Хувьсгал</b> нь нийгмийн тогтолцоонд гүн, огцом өөрчлөлт хийх үйл явц.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Даяаршил</h2>
            <p className="text-gray-700 mt-2">
              Даяаршил гэдэг нь улс орнууд эдийн засаг, соёл, мэдээлэл, технологи,
              харилцааны хувьд харилцан хамааралтай болох үйл явц юм.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ-д анхаарах</h2>
            <p className="text-gray-700 mt-2">
              “Даяаршил”, “шинэчлэл”, “хувьсгал”, “технологийн нөлөө”,
              “нийгмийн бүтэц өөрчлөгдөх” гэдэг түлхүүрүүдийг сайн ялгаарай.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}