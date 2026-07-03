"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const questions = [
  {
    question: "Адам Смит ямар онолоороо алдартай вэ?",
    options: ["Чөлөөт зах зээл", "Меркантилизм", "Социализм", "Коммунизм"],
    answer: "Чөлөөт зах зээл",
  },
  {
    question: "Хомсдол гэж юу вэ?",
    options: ["Нөөц хүрэлцэхгүй байх", "Үнэ өсөх", "Орлого буурах", "Импорт ихсэх"],
    answer: "Нөөц хүрэлцэхгүй байх",
  },
  {
    question: "Demand гэж юу вэ?",
    options: ["Нийлүүлэлт", "Эрэлт", "Үнэ", "Орлого"],
    answer: "Эрэлт",
  },
  {
    question: "Соёлын үндсэн бүрэлдэхүүн аль вэ?",
    options: ["Үнэт зүйл", "Үнэ", "Экспорт", "Инфляци"],
    answer: "Үнэт зүйл",
  },
  {
    question: "Нийгмийн хэм хэмжээ гэж юу вэ?",
    options: ["Зан үйлийн дүрэм", "Хууль", "Эдийн засаг", "Улс төр"],
    answer: "Зан үйлийн дүрэм",
  },
  {
    question: "Status гэдэг нь юу вэ?",
    options: ["Нийгмийн байр суурь", "Орлого", "Үнэ", "Ажилгүйдэл"],
    answer: "Нийгмийн байр суурь",
  },
  {
    question: "Role conflict гэж юу вэ?",
    options: ["Үүргийн зөрчил", "Үнэ өсөх", "Эрэлт буурах", "Хууль зөрчих"],
    answer: "Үүргийн зөрчил",
  },
  {
    question: "Нийгмийн институтын үүрэг юу вэ?",
    options: ["Тогтвортой байдал хангах", "Үнэ өсгөх", "Дайн хийх", "Татвар авах"],
    answer: "Тогтвортой байдал хангах",
  },
  {
    question: "Хувьсгал гэж юу вэ?",
    options: ["Хурдан өөрчлөлт", "Удаан өөрчлөлт", "Үнэ өсөх", "Татвар"],
    answer: "Хурдан өөрчлөлт",
  },
  {
    question: "Social mobility гэж юу вэ?",
    options: ["Нийгмийн шилжилт", "Соёлын өөрчлөлт", "Үнэ буурах", "Импорт"],
    answer: "Нийгмийн шилжилт",
  },
  {
    question: "Monopoly гэж юу вэ?",
    options: ["Нэг худалдагчтай зах зээл", "Олон худалдагчтай", "Төрийн зах зээл", "Импорт"],
    answer: "Нэг худалдагчтай зах зээл",
  },
  {
    question: "Tax гэж юу вэ?",
    options: ["Татвар", "Үнэ", "Орлого", "Экспорт"],
    answer: "Татвар",
  },
  {
    question: "Constitution гэж юу вэ?",
    options: ["Үндсэн хууль", "Шүүх", "Парламент", "Сонгууль"],
    answer: "Үндсэн хууль",
  },
  {
    question: "Human rights гэж юу вэ?",
    options: ["Хүний эрх", "Татвар", "Сонгууль", "Инфляци"],
    answer: "Хүний эрх",
  },
  {
    question: "Democracy гэж юу вэ?",
    options: ["Ардчилал", "Дарангуйлал", "Хаант засаг", "Цэрэг"],
    answer: "Ардчилал",
  },
  {
    question: "Imports гэж юу вэ?",
    options: ["Импорт", "Экспорт", "Татвар", "Үнэ"],
    answer: "Импорт",
  },
  {
    question: "Exports гэж юу вэ?",
    options: ["Экспорт", "Импорт", "Үнэ", "Татвар"],
    answer: "Экспорт",
  },
  {
    question: "GDP өсөх нь юу илтгэдэг вэ?",
    options: ["Эдийн засгийн өсөлт", "Хямрал", "Инфляци", "Ажилгүйдэл"],
    answer: "Эдийн засгийн өсөлт",
  },
  {
    question: "Law гэж юу вэ?",
    options: ["Хууль", "Шүүх", "Төр", "Эрх"],
    answer: "Хууль",
  },
  {
    question: "Power гэж юу вэ?",
    options: ["Эрх мэдэл", "Үнэ", "Орлого", "Нөөц"],
    answer: "Эрх мэдэл",
  },
];

export default function SocialMockTest2() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(1200);
  const [submitted, setSubmitted] = useState(false);

  const submitTest = () => {
    if (submitted) return;

    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) correct++;
    });

    setScore(correct);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      submitTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const handleAnswer = (qIndex: number, option: string) => {
    if (submitted) return;

    const newAnswers = [...answers];
    newAnswers[qIndex] = option;
    setAnswers(newAnswers);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/social/mock" className="text-blue-600">
          ← Буцах
        </Link>

        <div className="flex justify-between items-center mt-6">
          <h1 className="text-4xl font-bold">📝 Social Mock Test 2</h1>
          <div className="text-xl font-bold text-red-500">
            ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>

        {submitted && (
          <div className="mt-8 bg-green-100 p-6 rounded-xl">
            <h2 className="text-2xl font-bold">
              Your Score: {score} / {questions.length}
            </h2>
          </div>
        )}

        <div className="space-y-8 mt-10">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold">
                {qIndex + 1}. {q.question}
              </h2>

              <div className="space-y-3 mt-4">
                {q.options.map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      value={option}
                      onChange={() => handleAnswer(qIndex, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!submitted && (
          <button
            onClick={submitTest}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Submit Test
          </button>
        )}
      </section>
    </main>
  );
}