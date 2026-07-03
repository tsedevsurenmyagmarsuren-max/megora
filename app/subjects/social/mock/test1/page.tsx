"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const questions = [
  {
    question: "Хүн үйлдвэрийн барилга байгуулж ажиллуулахад хөрөнгө оруулж байна. Энэ нь ямар хөрөнгө оруулалт вэ?",
    options: ["Портфелийн", "Шууд", "Дотоодын", "Төрийн"],
    answer: "Шууд",
  },
  {
    question: "Меркантилизмын гол зорилго юу вэ?",
    options: ["Импорт нэмэх", "Экспорт нэмэх", "Татвар бууруулах", "Үйлдвэрлэл зогсоох"],
    answer: "Экспорт нэмэх",
  },
  {
    question: "Нийгмийн давхраажилт гэж юу вэ?",
    options: ["Нийгмийн ялгарал", "Соёлын өөрчлөлт", "Улс төр", "Гэр бүл"],
    answer: "Нийгмийн ялгарал",
  },
  {
    question: "Бүтэц-чиг үүргийн онолд хамаарах эрдэмтэн аль вэ?",
    options: ["К.Маркс", "Э.Дюркгейм", "Ж.Мид", "А.Тойнби"],
    answer: "Э.Дюркгейм",
  },
  {
    question: "Мөргөлдөөний онолын гол санаа юу вэ?",
    options: ["Тогтвортой байдал", "Зөрчил ба эрх мэдэл", "Бэлгэдэл", "Соёл"],
    answer: "Зөрчил ба эрх мэдэл",
  },
  {
    question: "Нийгэмшил гэж юу вэ?",
    options: ["Соёл, хэм хэмжээ сурах үйл явц", "Үнэ өсөх", "Хууль батлах", "Сонгууль"],
    answer: "Соёл, хэм хэмжээ сурах үйл явц",
  },
  {
    question: "Девиац гэж юу вэ?",
    options: ["Хэвийн зан үйл", "Хэм хэмжээнээс гажсан үйлдэл", "Сонгууль", "Инфляци"],
    answer: "Хэм хэмжээнээс гажсан үйлдэл",
  },
  {
    question: "Инфляци гэж юу вэ?",
    options: ["Үнэ буурах", "Үнэ өсөх", "Ажилгүйдэл", "Экспорт"],
    answer: "Үнэ өсөх",
  },
  {
    question: "ДНБ гэж юу вэ?",
    options: ["Дотоодын нийт бүтээгдэхүүн", "Татвар", "Импорт", "Зээл"],
    answer: "Дотоодын нийт бүтээгдэхүүн",
  },
  {
    question: "Эрэлт өсөхөд үнэ ихэвчлэн яах вэ?",
    options: ["Буурна", "Өснө", "Өөрчлөгдөхгүй", "Алга болно"],
    answer: "Өснө",
  },
  {
    question: "Нийлүүлэлт гэж юу вэ?",
    options: ["Supply", "Demand", "Price", "Tax"],
    answer: "Supply",
  },
  {
    question: "Ардчиллын үндсэн шинж аль вэ?",
    options: ["Сонгууль", "Дарангуйлал", "Хаант засаг", "Цэргийн засаг"],
    answer: "Сонгууль",
  },
  {
    question: "Хууль дээдлэх зарчим гэж юу вэ?",
    options: ["Хүн бүр хуульд захирагдах", "Зөвхөн төр хууль дагах", "Хууль хэрэггүй", "Шүүх байхгүй"],
    answer: "Хүн бүр хуульд захирагдах",
  },
  {
    question: "Даяаршил гэж юу вэ?",
    options: ["Дэлхийн уялдаа холбоо", "Тусгаарлалт", "Дайн", "Хаалт"],
    answer: "Дэлхийн уялдаа холбоо",
  },
  {
    question: "Соёлын диффузи гэж юу вэ?",
    options: ["Соёл тархах", "Соёл устах", "Соёл мартагдах", "Соёл хаагдах"],
    answer: "Соёл тархах",
  },
  {
    question: "Нийгмийн институтын жишээ аль вэ?",
    options: ["Гэр бүл", "Үнэ", "Инфляци", "Экспорт"],
    answer: "Гэр бүл",
  },
  {
    question: "Олдмол статусын жишээ аль вэ?",
    options: ["Мэргэжил", "Хүйс", "Нас", "Төрсөн газар"],
    answer: "Мэргэжил",
  },
  {
    question: "Төрөлх статусын жишээ аль вэ?",
    options: ["Эмч", "Багш", "Хүйс", "Дарга"],
    answer: "Хүйс",
  },
  {
    question: "Бэлгэдлийн харилцан үйлдлийн онол юуг онцолдог вэ?",
    options: ["Бэлгэдэл ба өдөр тутмын харилцаа", "Экспорт", "Татвар", "ДНБ"],
    answer: "Бэлгэдэл ба өдөр тутмын харилцаа",
  },
  {
    question: "Элитийн онолын гол санаа юу вэ?",
    options: ["Цөөн элит эрх мэдэлтэй", "Бүх хүн тэгш эрх мэдэлтэй", "Үнэ өсдөг", "Соёл тархдаг"],
    answer: "Цөөн элит эрх мэдэлтэй",
  },
];

export default function SocialMockTest1() {
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
  const percentage =
    score !== null ? Math.round((score / questions.length) * 100) : null;

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
          <h1 className="text-4xl font-bold">📝 Social Mock Test 1</h1>
          <div className="text-xl font-bold text-red-500">
            ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>

        {submitted && (
          <div className="mt-8 bg-green-100 border border-green-300 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Оноо: {score} / {questions.length}
            </h2>
            <p className="mt-2 text-gray-700">Хувь: {percentage}%</p>
          </div>
        )}

        <div className="space-y-8 mt-10">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold">
                {qIndex + 1}. {q.question}
              </h2>

              <div className="space-y-3 mt-4">
                {q.options.map((option) => {
                  const isSelected = answers[qIndex] === option;
                  const isCorrect = q.answer === option;
                  const isWrongSelected =
                    submitted && isSelected && !isCorrect;

                  return (
                    <label
                      key={option}
                      className={`block p-3 rounded-xl border ${
                        submitted && isCorrect
                          ? "bg-green-100 border-green-400"
                          : isWrongSelected
                          ? "bg-red-100 border-red-400"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswer(qIndex, option)}
                        disabled={submitted}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  );
                })}
              </div>

              {submitted && (
                <p className="mt-4 text-sm text-gray-600">
                  Зөв хариулт: <b>{q.answer}</b>
                </p>
              )}
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