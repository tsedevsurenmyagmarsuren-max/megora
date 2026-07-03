"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ListeningSection3Page() {
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

        <h1 className="text-4xl font-bold mt-6">👥 IELTS Listening Section 3</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          {/* Dialogue */}
          <div>
            <h2 className="text-2xl font-bold">Academic Discussion</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Emma: Have you finished the biology project?
              <br />
              Jack: Not yet. I’m still collecting data from the survey.
              <br />
              Emma: I already completed the research part, but I need help with the conclusion.
              <br />
              Jack: I can help with that. When is the deadline?
              <br />
              Emma: Next Friday.
              <br />
              Jack: That should be enough time if we work together.
            </p>
          </div>

          {/* Questions */}
          <div>
            <h2 className="text-2xl font-bold">Questions</h2>

            <ol className="list-decimal ml-6 mt-3 space-y-4 text-gray-700">
              <li>
                What is Jack still doing?
                <ul className="list-disc ml-6 mt-2">
                  <li>A. Writing the conclusion</li>
                  <li>B. Collecting survey data</li>
                  <li>C. Checking grammar</li>
                </ul>
              </li>

              <li>
                What does Emma need help with?
                <ul className="list-disc ml-6 mt-2">
                  <li>A. Research</li>
                  <li>B. Survey</li>
                  <li>C. Conclusion</li>
                </ul>
              </li>

              <li>
                When is the deadline?
                <ul className="list-disc ml-6 mt-2">
                  <li>A. Next Monday</li>
                  <li>B. Next Friday</li>
                  <li>C. Tomorrow</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Answer key */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>B</li>
              <li>C</li>
              <li>B</li>
            </ol>
          </div>

          {/* Tip */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h2 className="font-bold">Listening Tip</h2>
            <p className="text-gray-700 mt-2">
              Section 3 дээр speakers-ийн opinion, agreement/disagreement их гардаг. Signal words (but, however, actually)-ийг сайн барь.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}