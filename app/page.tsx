import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="p-10 flex gap-4">
      <SignInButton mode="modal">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Нэвтрэх
        </button>
      </SignInButton>

      <SignUpButton mode="modal">
        <button className="border px-6 py-3 rounded-xl">
          Бүртгүүлэх
        </button>
      </SignUpButton>

      <UserButton />
    </main>
  );
}