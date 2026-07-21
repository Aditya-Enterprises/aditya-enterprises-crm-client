"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "./components/crm-shell";

const authStorageKey = "aditya-crm-authenticated";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem(authStorageKey) === "true") {
      router.replace("/dashboard");
    }
  }, [router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !password) {
      return;
    }
    if (email == "admin@aditya.in" && password == "Aditya") {
      window.localStorage.setItem(authStorageKey, "true");
      router.push("/dashboard");
    } else {
    }
  }

  return (
    <main className="login-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 text-slate-900">
      <section className="card-shadow z-10 flex w-full max-w-110 flex-col gap-6 rounded-xl border border-[#90e0ef] bg-white p-6 sm:p-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Icon name="domain" className="text-2xl" />
          </div>
          <h1 className="text-2xl font-semibold leading-tight text-slate-900">
            Aditya Enterprises CRM
          </h1>
          <p className="text-sm text-slate-500">
            Professional Real Estate Management
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1.5">
            <span className="px-1 text-xs font-bold uppercase tracking-wider text-slate-600">
              Email Address
            </span>
            <span className="relative">
              <Icon
                name="mail"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400"
              />
              <input
                className="w-full rounded-lg border border-[#90e0ef] bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="agent@adityaenterprises.in"
                required
                type="email"
                value={email}
              />
            </span>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Password
              </span>
              <a
                className="text-sm text-[#0077b6] transition-colors hover:text-[#48cae4]"
                href="#"
              >
                Forgot Password?
              </a>
            </span>
            <span className="relative">
              <Icon
                name="lock"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400"
              />
              <input
                className="w-full rounded-lg border border-[#90e0ef] bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="********"
                required
                type="password"
                value={password}
              />
            </span>
          </label>

          <button
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-[#0077b6] active:scale-[0.98]"
            type="submit"
          >
            <span>Sign In</span>
            <Icon name="chevron_right" className="text-lg" />
          </button>
        </form>

        <div className="border-t border-slate-100 pt-4 text-center">
          <p className="text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <a
              className="font-semibold text-[#006399] hover:underline"
              href="#"
            >
              Contact your admin
            </a>
          </p>
        </div>
      </section>

      <footer className="absolute bottom-6 z-10 flex flex-col items-center gap-3 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {["Privacy Policy", "Terms of Service", "Support"].map((item) => (
            <a
              className="text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-900"
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
          (c) 2026 Aditya Enterprises CRM. All rights reserved.
        </p>
      </footer>

      <div className="absolute right-[-5%] top-[-10%] h-100 w-100 rounded-full bg-[#ade8f4]/30 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] h-75 w-75 rounded-full bg-[#00b4d8]/10 blur-[80px]" />
    </main>
  );
}
