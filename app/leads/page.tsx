import { CrmShell, Icon } from "../components/crm-shell";

const filters = [
  { label: "Status", options: ["All Statuses", "New", "Contacted", "Qualified", "Negotiating"] },
  { label: "Agent", options: ["All Agents", "Marcus Sterling", "Priya Shah", "Raj Malhotra"] },
  { label: "Property Type", options: ["All Types", "Residential", "Commercial", "Industrial"] },
];

const leads = [
  {
    name: "Julianne Sterling",
    initials: "JS",
    added: "Added 2 hours ago",
    email: "julianne.s@email.com",
    phone: "+91 98765 12340",
    property: "The Azure Penthouse",
    intent: "High Intent - Rs 2.4Cr",
    status: "NEW",
    statusClass: "bg-sky-100 text-sky-700 border-sky-200",
    agent: "Marcus Sterling",
    agentInitials: "MS",
    avatarClass: "bg-[#bfc2ff] text-[#070a61]",
  },
  {
    name: "Marcus Thompson",
    initials: "MT",
    added: "Added yesterday",
    email: "m.thompson@corp.com",
    phone: "+91 99887 65432",
    property: "Industrial Lofts Unit 4B",
    intent: "Viewing Scheduled - Rs 7.1Cr",
    status: "CONTACTED",
    statusClass: "bg-amber-100 text-amber-700 border-amber-200",
    agent: "Priya Shah",
    agentInitials: "PS",
    avatarClass: "bg-[#cde5ff] text-[#004b74]",
  },
  {
    name: "Rebecca Bloom",
    initials: "RB",
    added: "Added 3 days ago",
    email: "rebecca@bloomdesign.io",
    phone: "+91 91234 56780",
    property: "Greenwood Estate",
    intent: "Qualified Lead - Rs 4.2Cr",
    status: "QUALIFIED",
    statusClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    agent: "Marcus Sterling",
    agentInitials: "MS",
    avatarClass: "bg-[#ffdad4] text-[#7a2e23]",
  },
  {
    name: "Kevin Lansing",
    initials: "KL",
    added: "Added 1 week ago",
    email: "klansing@techhub.com",
    phone: "+91 90123 45678",
    property: "Modern Coastal Villa",
    intent: "Nurturing - Rs 3.8Cr",
    status: "NEW",
    statusClass: "bg-sky-100 text-sky-700 border-sky-200",
    agent: "Raj Malhotra",
    agentInitials: "RM",
    avatarClass: "bg-slate-200 text-slate-600",
  },
];

const insights = [
  { label: "Conversion Rate", value: "24.8%", icon: "trending_up", iconClass: "bg-emerald-50 text-emerald-600" },
  { label: "Active Leads", value: "156", icon: "group", iconClass: "bg-sky-50 text-sky-600" },
  { label: "Avg. Response Time", value: "14m", icon: "bolt", iconClass: "bg-amber-50 text-amber-600" },
];

function FilterPanel() {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 rounded-xl border border-[#90e0ef] bg-white p-5 shadow-sm md:grid-cols-4">
      {filters.map((filter) => (
        <label className="space-y-2" key={filter.label}>
          <span className="block text-xs font-bold uppercase tracking-[0.05em] text-slate-500">{filter.label}</span>
          <select className="w-full rounded-lg border-none bg-[#f5f2fa] py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#0077b6]">
            {filter.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      ))}
      <div className="flex items-end">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ade8f4] py-2.5 font-semibold text-[#006399] transition-colors hover:bg-[#67bafd]">
          <Icon name="filter_alt" className="text-lg" />
          <span>Clear Filters</span>
        </button>
      </div>
    </section>
  );
}

function LeadsTable() {
  return (
    <section className="overflow-hidden rounded-xl border border-[#90e0ef] bg-white shadow-xl shadow-[#03045e]/10">
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#90e0ef] bg-[#ade8f4]">
              {["Lead Name", "Contact", "Property Interest", "Status", "Assigned Agent", "Actions"].map((heading) => (
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
              <tr className="transition-colors hover:bg-[#f5f2fa]" key={lead.email}>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${lead.avatarClass}`}>{lead.initials}</div>
                    <div>
                      <p className="text-lg font-semibold leading-tight text-slate-900">{lead.name}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{lead.added}</p>
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
                  <p className="text-sm font-semibold text-slate-900">{lead.property}</p>
                  <p className="mt-0.5 text-xs text-[#006399]">{lead.intent}</p>
                </td>
                <td className="px-6 py-6">
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold ${lead.statusClass}`}>{lead.status}</span>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white">{lead.agentInitials}</div>
                    <span className="text-sm text-slate-700">{lead.agent}</span>
                  </div>
                </td>
                <td className="px-6 py-6 text-right">
                  <button aria-label={`Open actions for ${lead.name}`} className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white hover:text-[#0077b6]">
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
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${lead.avatarClass}`}>{lead.initials}</div>
                <div>
                  <h2 className="font-semibold text-slate-900">{lead.name}</h2>
                  <p className="text-xs text-slate-500">{lead.added}</p>
                </div>
              </div>
              <button aria-label={`Open actions for ${lead.name}`} className="rounded-lg p-2 text-slate-400 hover:bg-[#f5f2fa]">
                <Icon name="more_vert" />
              </button>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>{lead.email}</p>
              <p>{lead.phone}</p>
              <p className="font-semibold text-slate-900">{lead.property}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className={`rounded-full border px-3 py-1 text-xs font-bold ${lead.statusClass}`}>{lead.status}</span>
                <span className="text-xs text-[#006399]">{lead.intent}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-[#90e0ef] bg-[#f5f2fa] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Showing <span className="font-bold text-slate-700">1-4</span> of <span className="font-bold text-slate-700">42</span> leads
        </p>
        <div className="flex items-center gap-2">
          <button disabled className="rounded-lg border border-[#90e0ef] p-1.5 text-slate-400 opacity-50">
            <Icon name="chevron_left" className="text-lg" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              className={`h-8 w-8 rounded-lg text-xs font-bold ${
                page === 1 ? "bg-[#0077b6] text-white" : "text-slate-600 hover:bg-white"
              }`}
              key={page}
            >
              {page}
            </button>
          ))}
          <span className="px-1 text-slate-400">...</span>
          <button className="h-8 w-8 rounded-lg text-xs font-bold text-slate-600 hover:bg-white">11</button>
          <button className="rounded-lg border border-[#90e0ef] p-1.5 text-slate-600 transition-colors hover:bg-white">
            <Icon name="chevron_right" className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}

function InsightCards() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {insights.map((insight) => (
        <article className="flex items-center gap-4 rounded-xl border border-[#90e0ef] bg-white p-6 shadow-sm" key={insight.label}>
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${insight.iconClass}`}>
            <Icon name={insight.icon} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.05em] text-slate-500">{insight.label}</p>
            <p className="text-xl font-bold text-slate-900">{insight.value}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default function LeadsPage() {
  return (
    <CrmShell activePath="/leads" showFab={false}>
      <div className="mx-auto max-w-[1440px] px-4 py-6 pb-28 sm:px-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900">Lead Pipeline</h1>
            <p className="mt-1 text-[15px] text-slate-500">Manage and track potential client engagements across all properties.</p>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0077b6] px-6 py-2.5 font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:bg-[#48cae4] active:scale-95 sm:w-auto">
            <Icon name="add" className="text-lg" />
            <span>Add Lead</span>
          </button>
        </div>

        <FilterPanel />
        <LeadsTable />
        <InsightCards />
      </div>
    </CrmShell>
  );
}
