import { CrmShell, Icon } from "../components/crm-shell";

const metrics = [
  {
    label: "TOTAL LEADS",
    value: "1,284",
    icon: "groups",
    badge: "+12.5%",
    badgeClass: "bg-green-50 text-green-600",
    iconClass: "bg-sky-50 text-[#0077b6]",
  },
  {
    label: "ACTIVE DEALS",
    value: "42",
    icon: "handshake",
    badge: "Active",
    badgeClass: "bg-blue-50 text-blue-600",
    iconClass: "bg-blue-50 text-[#006399]",
  },
  {
    label: "TOTAL REVENUE",
    value: "Rs 2.4Cr",
    icon: "payments",
    badge: "YTD",
    badgeClass: "bg-slate-100 text-slate-500",
    iconClass: "bg-indigo-50 text-[#070a61]",
  },
  {
    label: "PENDING TASKS",
    value: "08",
    icon: "assignment_late",
    badge: "Due Today",
    badgeClass: "bg-amber-50 text-amber-600",
    iconClass: "bg-amber-50 text-amber-600",
  },
];

const tasks = [
  {
    title: "Call Rajesh Mehta",
    description: "Follow up on Andheri office space",
    time: "10:30 AM",
    icon: "call",
    active: true,
  },
  {
    title: "Viewing: Palm Heights",
    description: "Show 3BHK unit to Shah family",
    time: "01:00 PM",
    icon: "meeting_room",
  },
  {
    title: "Agreement Review",
    description: "Finalize lease draft for Unit 4B",
    time: "04:15 PM",
    icon: "contract_edit",
  },
];

const recentLeads = [
  {
    name: "Eleanor Hughes",
    initials: "EH",
    intent: "Luxury Condos, Downtown",
    source: "Website",
    date: "May 20, 2026",
    status: "New Lead",
    statusClass: "bg-blue-100 text-blue-700",
    avatarClass: "bg-[#bfc2ff] text-[#070a61]",
  },
  {
    name: "Robert Palmer",
    initials: "RP",
    intent: "Single Family, Suburbs",
    source: "Referral",
    date: "May 19, 2026",
    status: "In Progress",
    statusClass: "bg-amber-100 text-amber-700",
    avatarClass: "bg-[#ffb4a7] text-[#7a2e23]",
  },
  {
    name: "Alice Morgen",
    initials: "AM",
    intent: "Commercial Space",
    source: "Portal",
    date: "May 18, 2026",
    status: "Closed",
    statusClass: "bg-green-100 text-green-700",
    avatarClass: "bg-[#cde5ff] text-[#004b74]",
  },
];

function MetricCard({ metric }: { metric: (typeof metrics)[number] }) {
  return (
    <section className="card-elevation rounded-xl border border-sky-100 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.iconClass}`}>
          <Icon name={metric.icon} />
        </div>
        <span className={`rounded-full px-2 py-1 text-xs font-bold ${metric.badgeClass}`}>{metric.badge}</span>
      </div>
      <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-slate-400">{metric.label}</h2>
      <p className="text-3xl font-bold leading-tight text-slate-900">{metric.value}</p>
    </section>
  );
}

function SalesChart() {
  return (
    <section className="card-elevation rounded-xl border border-sky-100 bg-white p-5 sm:p-6 lg:col-span-2">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Sales Performance</h2>
          <p className="text-sm text-slate-500">Revenue growth over the last 6 months</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#0077b6]" />
            <span className="text-xs font-medium text-slate-600">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ade8f4]" />
            <span className="text-xs font-medium text-slate-600">Target</span>
          </div>
        </div>
      </div>
      <div className="relative h-56 overflow-hidden sm:h-64">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((line) => (
            <div className="h-0 w-full border-t border-slate-100" key={line} />
          ))}
        </div>
        <svg aria-label="Sales performance chart" className="relative h-full w-full" preserveAspectRatio="none" viewBox="0 0 800 200">
          <path d="M0 180 Q 150 140 200 150 T 400 80 T 600 110 T 800 30" fill="none" stroke="#0077b6" strokeLinecap="round" strokeWidth="4" />
          <path d="M0 190 Q 150 160 200 170 T 400 110 T 600 130 T 800 60" fill="none" stroke="#ade8f4" strokeDasharray="8 4" strokeWidth="3" />
        </svg>
      </div>
      <div className="mt-4 flex justify-between px-1 text-xs font-bold uppercase tracking-widest text-slate-400">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </section>
  );
}

function TasksWidget() {
  return (
    <section className="card-elevation flex flex-col rounded-xl border border-sky-100 bg-white">
      <div className="border-b border-sky-50 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-slate-900">Today&apos;s Tasks</h2>
        <p className="text-sm text-slate-500">Priority focus for May 20</p>
      </div>
      <div className="flex-1 space-y-4 p-5 sm:p-6">
        {tasks.map((task) => (
          <article
            className={`flex items-start gap-3 rounded-lg border-l-4 p-3 transition-colors ${
              task.active ? "border-[#0077b6] bg-[#f5f2fa]" : "border-transparent hover:bg-slate-50"
            }`}
            key={task.title}
          >
            <Icon name={task.icon} className={`mt-0.5 ${task.active ? "text-[#0077b6]" : "text-slate-400"}`} />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">{task.title}</h3>
              <p className="text-xs text-slate-500">{task.description}</p>
              <div className="mt-2 flex items-center text-[10px] font-bold text-slate-400">
                <Icon name="schedule" className="mr-1 text-xs" />
                {task.time}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="rounded-b-xl border-t border-sky-50 bg-slate-50 p-4">
        <button className="w-full py-2 text-xs font-bold uppercase tracking-widest text-[#0077b6] transition-colors hover:text-[#48cae4]">
          View All Tasks
        </button>
      </div>
    </section>
  );
}

function RecentLeadsTable() {
  return (
    <section className="card-elevation overflow-hidden rounded-xl border border-sky-100 bg-white">
      <div className="flex items-center justify-between border-b border-sky-50 p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Recent Leads</h2>
          <p className="text-sm text-slate-500">Your latest inbound inquiries</p>
        </div>
        <div className="flex gap-2">
          <button aria-label="Filter leads" className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50">
            <Icon name="filter_list" />
          </button>
          <button aria-label="Download leads" className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50">
            <Icon name="download" />
          </button>
        </div>
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          <thead className="bg-[#ade8f4]/30">
            <tr>
              {["LEAD NAME", "PROPERTY INTENT", "SOURCE", "DATE", "STATUS", "ACTION"].map((heading) => (
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.05em] text-slate-500" key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-sky-50">
            {recentLeads.map((lead) => (
              <tr className="transition-colors hover:bg-sky-50/30" key={lead.name}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${lead.avatarClass}`}>{lead.initials}</div>
                    <div className="text-sm font-semibold text-slate-900">{lead.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{lead.intent}</td>
                <td className="px-6 py-4"><span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">{lead.source}</span></td>
                <td className="px-6 py-4 text-sm text-slate-500">{lead.date}</td>
                <td className="px-6 py-4"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${lead.statusClass}`}>{lead.status}</span></td>
                <td className="px-6 py-4">
                  <button aria-label={`Open actions for ${lead.name}`} className="text-[#0077b6] transition-colors hover:text-[#48cae4]">
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

export default function Home() {
  return (
    <CrmShell activePath="/dashboard">
      <div className="mx-auto max-w-[1440px] px-4 py-6 pb-28 sm:px-6 lg:p-6">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">Performance Overview</h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">Welcome back, Marcus. Here is what is happening with your pipeline today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50">
              <Icon name="calendar_month" className="text-lg" />
              <span>This Month</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition-all hover:bg-[#48cae4] active:scale-95">
              <Icon name="add" className="text-lg" />
              <span>New Deal</span>
            </button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <SalesChart />
          <TasksWidget />
        </div>

        <RecentLeadsTable />
      </div>
    </CrmShell>
  );
}
