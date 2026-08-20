"use client";

import { useEffect, useState } from "react";
import Icon from "@/app/components/Icon";
import { getLeads } from "@/app/utils/api-client";
import type { ApiLead } from "@/app/utils/api-types";

const pageSize = 4;

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function statusClass(status: ApiLead["status"]) {
  const classes: Record<ApiLead["status"], string> = {
    New: "border-sky-200 bg-sky-50 text-sky-700", Contacted: "border-amber-200 bg-amber-50 text-amber-700", Qualified: "border-emerald-200 bg-emerald-50 text-emerald-700", Negotiating: "border-violet-200 bg-violet-50 text-violet-700", Closed: "border-green-200 bg-green-50 text-green-700", Lost: "border-rose-200 bg-rose-50 text-rose-700",
  };
  return classes[status];
}

function addedDate(value: string) {
  return `Added ${new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value))}`;
}

export function LeadsTable({ refreshKey = 0 }: { refreshKey?: number }) {
  const [leads, setLeads] = useState<ApiLead[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    getLeads(page, pageSize)
      .then((result) => {
        if (!mounted) return;
        setError(null);
        setLeads(result.items);
        setTotalCount(result.totalCount);
        setTotalPages(Math.max(result.totalPages, 1));
      })
      .catch(() => mounted && setError("Unable to load leads."))
      .finally(() => mounted && setIsLoading(false));
    return () => { mounted = false; };
  }, [page, refreshKey]);

  if (isLoading) return <p className="rounded-xl border border-[#90e0ef] bg-white p-8 text-slate-500">Loading leads...</p>;
  if (error) return <p className="rounded-xl border border-rose-200 bg-rose-50 p-8 text-rose-700">{error}</p>;

  const firstLead = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const lastLead = Math.min(page * pageSize, totalCount);
  const pages = Array.from({ length: Math.min(totalPages, 3) }, (_, index) => index + 1);
  const navigateToPage = (nextPage: number) => {
    setError(null);
    setIsLoading(true);
    setPage(nextPage);
  };

  return (
    <section className="overflow-hidden rounded-xl border border-[#90e0ef] bg-white shadow-xl shadow-[#03045e]/10">
      <div className="hidden overflow-x-auto lg:block"><table className="w-full border-collapse text-left"><thead><tr className="border-b border-[#90e0ef] bg-[#ade8f4]">{["Lead Name", "Contact", "Property Interest", "Status", "Assigned Agent", "Actions"].map((heading) => <th className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#006399] ${heading === "Actions" ? "text-right" : ""}`} key={heading}>{heading}</th>)}</tr></thead><tbody className="divide-y divide-[#90e0ef]">
        {leads.map((lead) => { const name = lead.contactName || "Unnamed lead"; const agent = lead.assignedEmployeeName || "Unassigned"; return <tr className="transition-colors hover:bg-[#f5f2fa]" key={lead.id}><td className="px-6 py-6"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">{initials(name)}</div><div><p className="text-lg font-semibold leading-tight text-slate-900">{name}</p><p className="mt-0.5 text-xs text-slate-500">{addedDate(lead.createdAtUtc)}</p></div></div></td><td className="px-6 py-6"><div className="space-y-1"><div className="flex items-center gap-2 text-sm text-slate-600"><Icon name="mail" className="text-base" />{lead.email}</div><div className="flex items-center gap-2 text-sm text-slate-600"><Icon name="phone" className="text-base" />{lead.phone || "No phone number"}</div></div></td><td className="px-6 py-6"><p className="text-sm font-semibold text-slate-900">{lead.propertyTitle || "No property selected"}</p><p className="mt-0.5 text-xs text-[#006399]">{lead.intent || "No intent specified"}</p></td><td className="px-6 py-6"><span className={`rounded-full border px-3 py-1 text-xs font-bold ${statusClass(lead.status)}`}>{lead.status}</span></td><td className="px-6 py-6"><div className="flex items-center gap-2"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white">{initials(agent)}</div><span className="text-sm text-slate-700">{agent}</span></div></td><td className="px-6 py-6 text-right"><button aria-label={`Open actions for ${name}`} className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white hover:text-[#0077b6]"><Icon name="more_vert" /></button></td></tr>; })}
      </tbody></table></div>
      <div className="divide-y divide-[#90e0ef] lg:hidden">{leads.map((lead) => { const name = lead.contactName || "Unnamed lead"; return <article className="p-5" key={lead.id}><div className="mb-4 flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">{initials(name)}</div><div><h2 className="font-semibold text-slate-900">{name}</h2><p className="text-xs text-slate-500">{addedDate(lead.createdAtUtc)}</p></div></div><button aria-label={`Open actions for ${name}`} className="rounded-lg p-2 text-slate-400 hover:bg-[#f5f2fa]"><Icon name="more_vert" /></button></div><div className="space-y-2 text-sm text-slate-600"><p>{lead.email}</p><p>{lead.phone || "No phone number"}</p><p className="font-semibold text-slate-900">{lead.propertyTitle || "No property selected"}</p><div className="flex flex-wrap items-center gap-2 pt-1"><span className={`rounded-full border px-3 py-1 text-xs font-bold ${statusClass(lead.status)}`}>{lead.status}</span><span className="text-xs text-[#006399]">{lead.intent || "No intent specified"}</span></div></div></article>; })}</div>
      <div className="flex flex-col gap-4 border-t border-[#90e0ef] bg-[#f5f2fa] px-6 py-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate-500">Showing <span className="font-bold text-slate-700">{firstLead}-{lastLead}</span> of <span className="font-bold text-slate-700">{totalCount}</span> leads</p><div className="flex items-center gap-2"><button disabled={page === 1} onClick={() => navigateToPage(Math.max(page - 1, 1))} className="rounded-lg border border-[#90e0ef] p-1.5 text-slate-400 opacity-50"><Icon name="chevron_left" className="text-lg" /></button>{pages.map((pageNumber) => <button onClick={() => navigateToPage(pageNumber)} className={`h-8 w-8 rounded-lg text-xs font-bold ${pageNumber === page ? "bg-[#0077b6] text-white" : "text-slate-600 hover:bg-white"}`} key={pageNumber}>{pageNumber}</button>)}{totalPages > 3 && <><span className="px-1 text-slate-400">...</span><button onClick={() => navigateToPage(totalPages)} className="h-8 w-8 rounded-lg text-xs font-bold text-slate-600 hover:bg-white">{totalPages}</button></>}<button disabled={page === totalPages} onClick={() => navigateToPage(Math.min(page + 1, totalPages))} className="rounded-lg border border-[#90e0ef] p-1.5 text-slate-600 transition-colors hover:bg-white disabled:opacity-50"><Icon name="chevron_right" className="text-lg" /></button></div></div>
    </section>
  );
}
