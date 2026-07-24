import Icon from "@/app/components/Icon";
import { Lead } from "./data";

export function LeadsTable({ leads }: { leads: Lead[] }) {
  return (
    <section className="overflow-hidden rounded-xl border border-[#90e0ef] bg-white shadow-xl shadow-[#03045e]/10">
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#90e0ef] bg-[#ade8f4]">
              {[
                "Lead Name",
                "Contact",
                "Property Interest",
                "Status",
                "Assigned Agent",
                "Actions",
              ].map((heading) => (
                <th
                  className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#006399] ${
                    heading === "Actions" ? "text-right" : ""
                  }`}
                  key={heading}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#90e0ef]">
            {leads.map((lead) => (
              <tr
                className="transition-colors hover:bg-[#f5f2fa]"
                key={lead.email}
              >
                <td className="px-6 py-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${lead.avatarClass}`}
                    >
                      {lead.initials}
                    </div>
                    <div>
                      <p className="text-lg font-semibold leading-tight text-slate-900">
                        {lead.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {lead.added}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon name="mail" className="text-base" />
                      {lead.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon name="phone" className="text-base" />
                      {lead.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <p className="text-sm font-semibold text-slate-900">
                    {lead.property}
                  </p>
                  <p className="mt-0.5 text-xs text-[#006399]">{lead.intent}</p>
                </td>
                <td className="px-6 py-6">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold ${lead.statusClass}`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white">
                      {lead.agentInitials}
                    </div>
                    <span className="text-sm text-slate-700">{lead.agent}</span>
                  </div>
                </td>
                <td className="px-6 py-6 text-right">
                  <button
                    aria-label={`Open actions for ${lead.name}`}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white hover:text-[#0077b6]"
                  >
                    <Icon name="more_vert" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-[#90e0ef] lg:hidden">
        {leads.map((lead) => (
          <article className="p-5" key={lead.email}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${lead.avatarClass}`}
                >
                  {lead.initials}
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900">{lead.name}</h2>
                  <p className="text-xs text-slate-500">{lead.added}</p>
                </div>
              </div>
              <button
                aria-label={`Open actions for ${lead.name}`}
                className="rounded-lg p-2 text-slate-400 hover:bg-[#f5f2fa]"
              >
                <Icon name="more_vert" />
              </button>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>{lead.email}</p>
              <p>{lead.phone}</p>
              <p className="font-semibold text-slate-900">{lead.property}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold ${lead.statusClass}`}
                >
                  {lead.status}
                </span>
                <span className="text-xs text-[#006399]">{lead.intent}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-[#90e0ef] bg-[#f5f2fa] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Showing <span className="font-bold text-slate-700">1-4</span> of{" "}
          <span className="font-bold text-slate-700">42</span> leads
        </p>
        <div className="flex items-center gap-2">
          <button
            disabled
            className="rounded-lg border border-[#90e0ef] p-1.5 text-slate-400 opacity-50"
          >
            <Icon name="chevron_left" className="text-lg" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              className={`h-8 w-8 rounded-lg text-xs font-bold ${
                page === 1
                  ? "bg-[#0077b6] text-white"
                  : "text-slate-600 hover:bg-white"
              }`}
              key={page}
            >
              {page}
            </button>
          ))}
          <span className="px-1 text-slate-400">...</span>
          <button className="h-8 w-8 rounded-lg text-xs font-bold text-slate-600 hover:bg-white">
            11
          </button>
          <button className="rounded-lg border border-[#90e0ef] p-1.5 text-slate-600 transition-colors hover:bg-white">
            <Icon name="chevron_right" className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
