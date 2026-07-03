"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ListeningSection1Page() {
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

        <h1 className="text-4xl font-bold mt-6">🎧 IELTS Listening Section 1</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          {/* Script */}
          <div>
            <h2 className="text-2xl font-bold">Conversation</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Receptionist: Good morning. How can I help you?
              <br />
              Student: Hi, I’d like to join the gym.
              <br />
              Receptionist: Sure. Can I have your name, please?
              <br />
              Student: Yes, it’s Daniel Brown.
              <br />
              Receptionist: And your phone number?
              <br />
              Student: It’s 98765432.
              <br />
              Receptionist: Great. Which membership would you like?
              <br />
              Student: The monthly membership, please.
            </p>
          </div>

          {/* Questions */}
          <div>
            <h2 className="text-2xl font-bold">Form Completion</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-2 text-gray-700">
              <li>Name: __________</li>
              <li>Phone number: __________</li>
              <li>Membership type: __________</li>
            </ol>
          </div>

          {/* Answers */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>Daniel Brown</li>
              <li>98765432</li>
              <li>Monthly membership</li>
            </ol>
          </div>

          {/* Tip */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h2 className="font-bold">Listening Tip</h2>
            <p className="text-gray-700 mt-2">
              Question-оо уншаад keyword-оо урьдчилж ол. Name, number, date зэрэг дээр маш анхаар.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}