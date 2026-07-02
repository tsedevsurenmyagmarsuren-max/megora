import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">Megora</h1>

        <div className="flex items-center gap-4">
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

          <UserButton />
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center py-32 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Өөрөө суралцах систем
        </h2>

        <p className="text-gray-600 text-lg">
          Нийгэм, Англи хэл болон шалгалтын mock тестүүд
        </p>
      </section>
    </main>
  );
}