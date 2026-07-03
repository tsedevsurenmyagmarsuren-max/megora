"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function StratificationLessonPage() {
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
          Нийгмийн давхраажилт
        </h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Нийгмийн давхраажилт гэж юу вэ?</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн давхраажилт гэдэг нь хүмүүсийг орлого, боловсрол, эрх мэдэл,
              нэр хүнд зэрэг үзүүлэлтээр ялган ангилж буй тогтолцоо юм.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Давхаргын үндсэн шалгуур</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Орлого</li>
              <li>Эрх мэдэл</li>
              <li>Боловсрол</li>
              <li>Нэр хүнд</li>
              <li>Өмч хөрөнгө</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Нээлттэй ба хаалттай тогтолцоо</h2>
            <p className="text-gray-700 mt-2">
              <b>Нээлттэй:</b> Хүн өөрийн байр сууриа өөрчилж болно (жишээ: боловсролоор дээшлэх).
              <br />
              <b>Хаалттай:</b> Төрөхдөө авсан байр сууриа өөрчлөх боломж бага.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Нийгмийн хөдөлгөөнт байдал</h2>
            <p className="text-gray-700 mt-2">
              Хувь хүн эсвэл бүлэг нийгмийн давхарга хооронд шилжихийг хэлнэ.
            </p>

            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Дээшлэх хөдөлгөөн</li>
              <li>Доошлох хөдөлгөөн</li>
              <li>Хэвтээ хөдөлгөөн</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Давхраажилтын ач холбогдол</h2>
            <p className="text-gray-700 mt-2">
              Нийгэм дэх хүмүүсийн байр суурь, боломж, үүргийг ойлгоход тусалдаг.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ-д анхаарах</h2>
            <p className="text-gray-700 mt-2">
              “Нээлттэй тогтолцоо”, “нийгмийн хөдөлгөөнт байдал”, “орлого ба эрх мэдэл”
              гэдэг түлхүүр ойлголтууд их асуугддаг.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}