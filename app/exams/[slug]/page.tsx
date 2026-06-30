"use client";

import { exams } from "@/data/exams";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExamPage() {
  const params = useParams();
  const slug = params.slug as string;

  const exam = exams.find((item) => item.slug === slug);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 минут

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  if (!exam) {
    return <main className="p-10">Шалгалт олдсонгүй.</main>;
  }

  const score = exam.questions.filter(
    (q, index) => answers[index] === q.answer
  ).length;

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-4xl font-bold">{exam.title}</h1>

        <p className="text-gray-500 mt-2">{exam.description}</p>

        <p className="text-gray-500 mt-2">
          ⏱️ Нийт хугацаа: {exam.duration}
        </p>

        <p className="text-red-500 font-bold mt-3 text-xl">
          ⏰ Үлдсэн хугацаа: {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </p>

        <div className="mt-10 space-y-8">
          {exam.questions.map((q, index) => (
            <div key={index} className="border rounded-xl p-5">
              <h2 className="font-bold mb-4">
                {index + 1}. {q.question}
              </h2>

              <div className="space-y-3">
                {q.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [index]: option,
                      }))
                    }
                    className={`block w-full text-left border rounded-lg p-3 ${
                      answers[index] === option
                        ? "bg-blue-100 border-blue-500"
                        : "hover:bg-gray-50"
                    } ${submitted ? "cursor-not-allowed" : ""}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {submitted && (
                <div className="mt-4">
                  <p
                    className={
                      answers[index] === q.answer
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {answers[index] === q.answer
                      ? "✅ Зөв"
                      : `❌ Буруу. Зөв хариу: ${q.answer}`}
                  </p>

                  <p className="text-gray-600 mt-2">💡 {q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {!submitted && (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Дуусгах
          </button>
        )}

        {submitted && (
          <div className="mt-8 text-2xl font-bold">
            Оноо: {score} / {exam.questions.length}
          </div>
        )}
      </div>
    </main>
  );
}