"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { getRecentLeads } from "../utils/api-client";
import type { ApiRecentLead } from "../utils/api-types";

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function statusClass(status: ApiRecentLead["status"]) {
  const classes: Record<ApiRecentLead["status"], string> = {
    New: "bg-sky-100 text-sky-700", Contacted: "bg-amber-100 text-amber-700", Qualified: "bg-emerald-100 text-emerald-700", Negotiating: "bg-violet-100 text-violet-700", Closed: "bg-green-100 text-green-700", Lost: "bg-rose-100 text-rose-700",
  };
  return classes[status];
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

export default function RecentLeadsTable() {
  const [leads, setLeads] = useState<ApiRecentLead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    getRecentLeads()
      .then((result) => { if (mounted) { setLeads(result); setError(null); } })
      .catch(() => mounted && setError("Unable to load recent leads."))
      .finally(() => mounted && setIsLoading(false));
    return () => { mounted = false; };
  }, []);

  if (isLoading) return <section className="card-elevation rounded-xl border border-sky-100 bg-white p-6 text-slate-500">Loading recent leads...</section>;
  if (error) return <section className="card-elevation rounded-xl border border-rose-200 bg-rose-50 p-6 text-rose-700">{error}</section>;

  return (
    <section className="card-elevation overflow-hidden rounded-xl border border-sky-100 bg-white">
      <div className="flex items-center justify-between border-b border-sky-50 p-5 sm:p-6"><div><h2 className="text-lg font-semibold text-slate-900">Recent Leads</h2><p className="text-sm text-slate-500">Your latest inbound inquiries</p></div><div className="flex gap-2"><button aria-label="Filter leads" className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50"><Icon name="filter_list" /></button><button aria-label="Download leads" className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50"><Icon name="download" /></button></div></div>
      <div className="hidden overflow-x-auto md:block"><table className="w-full text-left"><thead className="bg-[#ade8f4]/30"><tr>{["LEAD NAME", "PROPERTY INTENT", "SOURCE", "DATE", "STATUS", "ACTION"].map((heading) => <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500" key={heading}>{heading}</th>)}</tr></thead><tbody className="divide-y divide-sky-50">{leads.map((lead) => <tr className="transition-colors hover:bg-sky-50/30" key={lead.id}><td className="px-6 py-4"><div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">{initials(lead.contactName)}</div><div className="text-sm font-semibold text-slate-900">{lead.contactName}</div></div></td><td className="px-6 py-4 text-sm text-slate-600">{lead.intent || "No intent specified"}</td><td className="px-6 py-4"><span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">{lead.source || "Unknown"}</span></td><td className="px-6 py-4 text-sm text-slate-500">{formatDate(lead.createdAtUtc)}</td><td className="px-6 py-4"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClass(lead.status)}`}>{lead.status}</span></td><td className="px-6 py-4"><button aria-label={`Open actions for ${lead.contactName}`} className="text-[#0077b6] transition-colors hover:text-[#48cae4]"><Icon name="more_horiz" className="text-xl" /></button></td></tr>)}</tbody></table></div>
      <div className="divide-y divide-sky-50 md:hidden">{leads.map((lead) => <article className="p-4 sm:p-5" key={lead.id}><div className="flex items-start justify-between gap-3"><div className="flex min-w-0 items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">{initials(lead.contactName)}</div><div className="min-w-0"><h3 className="truncate text-sm font-semibold text-slate-900">{lead.contactName}</h3><p className="truncate text-xs text-slate-500">{lead.intent || "No intent specified"}</p></div></div><span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClass(lead.status)}`}>{lead.status}</span></div><div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500"><span>{lead.source || "Unknown"}</span><span>{formatDate(lead.createdAtUtc)}</span><button className="ml-auto text-[#0077b6]" aria-label={`Open actions for ${lead.contactName}`}><Icon name="more_horiz" className="text-xl" /></button></div></article>)}</div>
    </section>
  );
}
