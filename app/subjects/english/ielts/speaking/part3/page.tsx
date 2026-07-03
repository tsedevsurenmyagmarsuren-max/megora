"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SpeakingPart3Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/speaking" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">💭 IELTS Speaking Part 3</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">Topic: Education</h2>

            <p className="mt-4"><b>Q:</b> How has technology changed education?</p>
            <p className="text-gray-700 mt-2">
              Technology has transformed education by making information more accessible.
              Students can now study online, join virtual classes, and use digital tools
              to improve their learning efficiency.
            </p>

            <p className="mt-4"><b>Q:</b> Do you think online learning will replace traditional classrooms?</p>
            <p className="text-gray-700 mt-2">
              I do not think it will completely replace traditional classrooms because
              face-to-face interaction is still important. However, online learning will
              definitely become more common in the future.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Useful High-Level Words</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>accessible</li>
              <li>efficient</li>
              <li>interactive</li>
              <li>flexible</li>
              <li>convenient</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Part 3 Tip</h2>
            <p className="text-gray-700 mt-2">
              Part 3 дээр short answer биш. Reason + example + opinion structure ашигла.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}