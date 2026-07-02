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
          <Link href="/">Нүүр</Link>
          <Link href="/subjects">Хичээлүүд</Link>
          <Link href="/exams">Mock Test</Link>
          <Link href="/yesh-test">ЭЕШ Test</Link>

          {isSignedIn ? (
            <UserButton />
          ) : (
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
      </section>
    </main>
  );
}