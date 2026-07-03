"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ModalsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/grammar" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">⚡ Modals</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Can</h2>
            <p className="mt-2 text-gray-700">
              Чадвар, боломжийг илэрхийлнэ.
            </p>
            <p className="mt-2">
              <b>Example:</b> I can speak English.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Could</h2>
            <p className="mt-2 text-gray-700">
              Өнгөрсөн чадвар эсвэл эелдэг хүсэлт.
            </p>
            <p className="mt-2">
              <b>Example:</b> She could swim when she was five.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Should</h2>
            <p className="mt-2 text-gray-700">
              Зөвлөгөө, санал.
            </p>
            <p className="mt-2">
              <b>Example:</b> You should study more.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Must</h2>
            <p className="mt-2 text-gray-700">
              Хүчтэй шаардлага, үүрэг.
            </p>
            <p className="mt-2">
              <b>Example:</b> Students must wear uniforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. May / Might</h2>
            <p className="mt-2 text-gray-700">
              Магадлал илэрхийлнэ.
            </p>
            <p className="mt-2">
              <b>Example:</b> It might rain tomorrow.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Exam clue</h2>
            <p className="text-gray-700 mt-2">
              ability → can/could  
              advice → should  
              obligation → must  
              possibility → may/might
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}