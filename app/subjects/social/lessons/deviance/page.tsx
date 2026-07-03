"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function DevianceLessonPage() {
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

        <h1 className="text-4xl font-bold mt-6">
          Нийгмийн гажуудал
        </h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Нийгмийн гажуудал гэж юу вэ?</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн гажуудал гэдэг нь нийгэмд тогтсон хэм хэмжээ, дүрэм,
              хүлээлтээс зөрсөн зан үйл юм.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Нийгмийн хэм хэмжээ</h2>
            <p className="text-gray-700 mt-2">
              Хүмүүс хэрхэн зөв амьдрах, биеэ авч явахыг зохицуулдаг нийтлэг дүрэм,
              ёс суртахууны шаардлагыг нийгмийн хэм хэмжээ гэнэ.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Гажуудлын төрөл</h2>
            <p className="text-gray-700 mt-2">
              <b>Эерэг гажуудал:</b> Нийгмийн хэвшмэл ойлголтыг эвдэж шинэ сайн зүйл бий болгох.
              <br />
              <b>Сөрөг гажуудал:</b> Хууль, ёс зүй зөрчих, хор хөнөөлтэй үйлдэл.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Гажуудал үүсэх шалтгаан</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Ядуурал</li>
              <li>Боловсролын ялгаа</li>
              <li>Орчны нөлөө</li>
              <li>Гэр бүлийн асуудал</li>
              <li>Нийгмийн тэгш бус байдал</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Нийгмийн хяналт</h2>
            <p className="text-gray-700 mt-2">
              Нийгэм гажуудлыг хязгаарлахын тулд хууль, дүрэм, ёс суртахуун,
              шийтгэл, урамшууллыг ашигладаг.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ-д анхаарах</h2>
            <p className="text-gray-700 mt-2">
              “Хэм хэмжээ зөрчих”, “эерэг ба сөрөг гажуудал”, “нийгмийн хяналт”
              гэдэг ойлголтууд их гардаг.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}