"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ListeningSection4Page() {
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

        <h1 className="text-4xl font-bold mt-6">🎓 IELTS Listening Section 4</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Academic Lecture</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Today’s lecture focuses on renewable energy. Renewable energy comes from
              natural sources such as sunlight, wind, and water. Unlike fossil fuels,
              these sources can be replaced naturally and produce less pollution.
              Many governments are investing in solar panels and wind farms to reduce
              carbon emissions. However, renewable energy also has challenges, including
              high initial costs and dependence on weather conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Note Completion</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-2 text-gray-700">
              <li>Renewable energy comes from natural __________.</li>
              <li>Examples include sunlight, wind, and __________.</li>
              <li>Renewable energy produces less __________.</li>
              <li>One challenge is high initial __________.</li>
              <li>Another challenge is dependence on __________ conditions.</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>sources</li>
              <li>water</li>
              <li>pollution</li>
              <li>costs</li>
              <li>weather</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Key Vocabulary</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li><b>renewable energy</b> — сэргээгдэх эрчим хүч</li>
              <li><b>fossil fuels</b> — чулуужсан түлш</li>
              <li><b>carbon emissions</b> — нүүрстөрөгчийн ялгарал</li>
              <li><b>initial costs</b> — анхны зардал</li>
              <li><b>weather conditions</b> — цаг агаарын нөхцөл</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}