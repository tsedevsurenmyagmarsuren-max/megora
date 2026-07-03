"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function StructureLessonPage() {
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
          Нийгэм, нийгмийн бүтэц
        </h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Нийгэм гэж юу вэ?</h2>
            <p className="text-gray-700 mt-2">
              Нийгэм гэдэг нь хүмүүсийн хоорондын харилцаа, хамтын амьдрал,
              хамтын үйл ажиллагааны нийлбэр бөгөөд тодорхой бүтэц, зохион байгуулалттай тогтолцоо юм.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Нийгмийн бүтэц</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн бүтэц гэдэг нь нийгмийн бүрэлдэхүүн хэсгүүдийн хоорондын
              харилцан холбоо, зохион байгуулалт, байр суурийн тогтолцоо юм.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Статус ба үүрэг</h2>
            <p className="text-gray-700 mt-2">
              <b>Статус</b> гэдэг нь нийгэм дэх хувь хүний эзлэх байр суурь.  
              <br />
              <b>Үүрэг</b> гэдэг нь тухайн статусын дагуу хүлээгдэж буй үйлдэл, зан төлөв.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Нийгмийн институт</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн институт нь нийгмийн хэрэгцээг хангах зорилготой тогтсон
              дүрэм, байгууллагын тогтолцоо юм.
            </p>

            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Гэр бүл</li>
              <li>Боловсрол</li>
              <li>Төр</li>
              <li>Шашин</li>
              <li>Эдийн засаг</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Чиг үүрэг</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн хэсэг бүр тодорхой үүрэгтэй бөгөөд тэр нь нийгмийн
              тогтвортой байдлыг хангахад оролцдог.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ-д анхаарах</h2>
            <p className="text-gray-700 mt-2">
              “Статус”, “үүрэг”, “институт”, “нийгмийн бүтэц” гэсэн ойлголтууд
              хамгийн түгээмэл асуугддаг.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}