import React from "react";
import Icon from "./Icon";
import { recentLeads } from "../data/data";
export default function RecentLeadsTable() {
  return (
    <section className="card-elevation overflow-hidden rounded-xl border border-sky-100 bg-white">
      <div className="flex items-center justify-between border-b border-sky-50 p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Recent Leads</h2>
          <p className="text-sm text-slate-500">
            Your latest inbound inquiries
          </p>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Filter leads"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50"
          >
            <Icon name="filter_list" />
          </button>
          <button
            aria-label="Download leads"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50"
          >
            <Icon name="download" />
          </button>
        </div>
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          <thead className="bg-[#ade8f4]/30">
            <tr>
              {[
                "LEAD NAME",
                "PROPERTY INTENT",
                "SOURCE",
                "DATE",
                "STATUS",
                "ACTION",
              ].map((heading) => (
                <th
                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500"
                  key={heading}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-sky-50">
            {recentLeads.map((lead) => (
              <tr
                className="transition-colors hover:bg-sky-50/30"
                key={lead.name}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${lead.avatarClass}`}
                    >
                      {lead.initials}
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {lead.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {lead.intent}
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
                    {lead.source}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  {lead.date}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${lead.statusClass}`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    aria-label={`Open actions for ${lead.name}`}
                    className="text-[#0077b6] transition-colors hover:text-[#48cae4]"
                  >
                    <Icon name="more_horiz" className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
