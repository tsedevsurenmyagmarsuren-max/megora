"use client";

import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">Megora</h1>

        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">Нүүр</Link>
          <Link href="/subjects" className="hover:text-blue-600">Хичээлүүд</Link>
          <Link href="/exams" className="hover:text-blue-600">Mock Test</Link>
          <Link href="/yesh-test" className="hover:text-blue-600">ЭЕШ Test</Link>

          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
                  Нэвтрэх
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="border px-5 py-2 rounded-xl">
                  Бүртгүүлэх
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Монгол сурагчдад зориулсан
          <br />
          <span className="text-blue-600">
            хамгийн хялбар суралцах платформ
          </span>
        </h2>

        <p className="text-gray-600 text-lg mt-6">
          Онол, тест, тайлбар бүгд нэг дор.
          <br />
          Илүү ухаалаг суралцъя.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/subjects"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Хичээл эхлэх
          </Link>

          <Link
            href="/exams"
            className="border px-8 py-3 rounded-xl hover:bg-gray-100"
          >
            Mock Test
          </Link>

          <Link
            href="/yesh-test"
            className="border px-8 py-3 rounded-xl hover:bg-gray-100"
          >
            ЭЕШ Test
          </Link>
        </div>
      </section>
    </main>
  );
}