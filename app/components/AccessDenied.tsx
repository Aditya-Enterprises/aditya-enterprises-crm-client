import Link from "next/link";
import Icon from "./Icon";

export default function AccessDenied({
  pageName = "this page",
  requiredRole = "an administrator",
}: {
  pageName?: string;
  requiredRole?: string;
}) {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-360 items-center justify-center px-4 py-10 sm:px-6 lg:p-8">
      <section className="card-shadow w-full max-w-2xl rounded-2xl border border-sky-100 bg-white px-6 py-12 text-center sm:px-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-[#0077b6]">
          <Icon name="lock" className="text-2xl" />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          You don&apos;t have access to this page
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
          The {pageName} is only available to {requiredRole}. If you need
          access, please contact your administrator.
        </p>
        <Link
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0077b6]"
          href="/dashboard"
        >
          <Icon name="dashboard" className="text-base" />
          Back to dashboard
        </Link>
      </section>
    </div>
  );
}
