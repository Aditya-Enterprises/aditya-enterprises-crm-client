"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
import Logo from "../assets/Logo.png";
import { registerAgent } from "../utils/api-client";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      await registerAgent(form);
      router.push("/?registered=true");
    } catch (caught) {
      try {
        const message = JSON.parse((caught as Error).message).message;
        setError(
          message ||
            "Unable to create your account. Check your details and try again.",
        );
      } catch {
        setError(
          "Unable to create your account. Check your details and try again.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="login-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 text-slate-900">
      <section className="card-shadow z-10 flex w-full max-w-110 flex-col gap-6 rounded-xl border border-[#90e0ef] bg-white p-6 sm:p-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
            <Image src={Logo} alt="Logo" />
          </div>

          <h1 className="text-2xl font-semibold leading-tight text-slate-900">
            Create agent account
          </h1>
          <p className="text-sm text-slate-500">
            Join the Aditya Enterprises team
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1.5">
            <span className="px-1 text-xs font-bold uppercase tracking-wider text-slate-600">
              Admin code
            </span>
            <input
              className="w-full rounded-lg border border-[#90e0ef] bg-white px-4 py-3 text-sm uppercase tracking-[0.2em] outline-none transition-all focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
              maxLength={9}
              onChange={(event) =>
                updateField("adminCode", event.target.value.toUpperCase())
              }
              placeholder="A14R-CF0D"
              pattern="[A-Z0-9]{4}-[A-Z0-9]{4}"
              required
              value={form.adminCode}
            />
            <span className="px-1 text-xs text-slate-500">
              Enter the one-time code provided by an administrator.
            </span>
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(["firstName", "lastName"] as const).map((field) => (
              <label className="flex flex-col gap-1.5" key={field}>
                <span className="px-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                  {field === "firstName" ? "First name" : "Last name"}
                </span>
                <input
                  className="w-full rounded-lg border border-[#90e0ef] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                  onChange={(event) => updateField(field, event.target.value)}
                  required
                  value={form[field]}
                />
              </label>
            ))}
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="px-1 text-xs font-bold uppercase tracking-wider text-slate-600">
              Email address
            </span>
            <span className="relative">
              <Icon
                name="mail"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400"
              />
              <input
                className="w-full rounded-lg border border-[#90e0ef] bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                onChange={(event) => updateField("email", event.target.value)}
                required
                type="email"
                value={form.email}
              />
            </span>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="px-1 text-xs font-bold uppercase tracking-wider text-slate-600">
              Phone number{" "}
              <span className="font-normal normal-case">(optional)</span>
            </span>
            <input
              className="w-full rounded-lg border border-[#90e0ef] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
              onChange={(event) => updateField("phone", event.target.value)}
              type="tel"
              value={form.phone}
            />
          </label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(["password", "confirmPassword"] as const).map((field) => (
              <label className="flex flex-col gap-1.5" key={field}>
                <span className="px-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                  {field === "password" ? "Password" : "Confirm password"}
                </span>
                <input
                  className="w-full rounded-lg border border-[#90e0ef] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                  minLength={8}
                  onChange={(event) => updateField(field, event.target.value)}
                  required
                  type="password"
                  value={form[field]}
                />
              </label>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Password must be at least 8 characters and include an uppercase
            letter, number, and symbol.
          </p>
          <button
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-[#0077b6] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isLoading}
            type="submit"
          >
            <span>{isLoading ? "Creating Account..." : "Create Account"}</span>
            <Icon name="chevron_right" className="text-lg" />
          </button>
          {error ? (
            <p className="text-center text-sm text-red-600">{error}</p>
          ) : null}
        </form>

        <div className="border-t border-slate-100 pt-4 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              className="font-semibold text-[#006399] hover:underline"
              href="/"
            >
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
