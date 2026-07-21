import { CrmShell, Icon } from "../components/crm-shell";

type TaskStatus = "Due Today" | "Upcoming" | "Completed" | "Overdue";
type TaskPriority = "High" | "Medium" | "Low";

type Task = {
  title: string;
  description: string;
  contact: string;
  time: string;
  status: TaskStatus;
  priority: TaskPriority;
  icon: string;
  ownerInitials: string;
  ownerClass: string;
};

const summaryCards = [
  {
    label: "DUE TODAY",
    value: "08",
    icon: "assignment_late",
    badge: "3 High",
    badgeClass: "bg-amber-50 text-amber-600",
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    label: "COMPLETED",
    value: "24",
    icon: "check_circle",
    badge: "+6",
    badgeClass: "bg-emerald-50 text-emerald-600",
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "FOLLOW UPS",
    value: "16",
    icon: "call",
    badge: "This Week",
    badgeClass: "bg-sky-50 text-sky-700",
    iconClass: "bg-sky-50 text-[#0077b6]",
  },
  {
    label: "SITE VISITS",
    value: "05",
    icon: "meeting_room",
    badge: "Scheduled",
    badgeClass: "bg-indigo-50 text-indigo-700",
    iconClass: "bg-indigo-50 text-[#070a61]",
  },
];

const tasks: Task[] = [
  {
    title: "Call Rajesh Mehta",
    description: "Follow up on Andheri office space requirements and budget approval.",
    contact: "Rajesh Mehta",
    time: "10:30 AM",
    status: "Due Today",
    priority: "High",
    icon: "call",
    ownerInitials: "MS",
    ownerClass: "bg-sky-600 text-white",
  },
  {
    title: "Viewing: Palm Heights",
    description: "Show 3BHK unit and share parking details with the Shah family.",
    contact: "Shah Family",
    time: "01:00 PM",
    status: "Due Today",
    priority: "High",
    icon: "meeting_room",
    ownerInitials: "PS",
    ownerClass: "bg-[#cde5ff] text-[#004b74]",
  },
  {
    title: "Agreement Review",
    description: "Finalize lease draft for Unit 4B before sending it to legal.",
    contact: "Amit Desai",
    time: "04:15 PM",
    status: "Due Today",
    priority: "Medium",
    icon: "contract_edit",
    ownerInitials: "MS",
    ownerClass: "bg-sky-600 text-white",
  },
  {
    title: "Send Property Shortlist",
    description: "Share Bandra commercial options with updated rental comparison.",
    contact: "Neha Kapoor",
    time: "Tomorrow",
    status: "Upcoming",
    priority: "Medium",
    icon: "domain",
    ownerInitials: "RM",
    ownerClass: "bg-slate-200 text-slate-600",
  },
  {
    title: "Collect KYC Documents",
    description: "Request missing company PAN and authorization letter.",
    contact: "Viraj Holdings",
    time: "May 22",
    status: "Upcoming",
    priority: "Low",
    icon: "assignment",
    ownerInitials: "PS",
    ownerClass: "bg-[#cde5ff] text-[#004b74]",
  },
  {
    title: "Update Deal Notes",
    description: "Add negotiation remarks from the Worli villa inspection.",
    contact: "Dr. Patel",
    time: "Yesterday",
    status: "Overdue",
    priority: "High",
    icon: "contract_edit",
    ownerInitials: "MS",
    ownerClass: "bg-sky-600 text-white",
  },
  {
    title: "Confirm Payment Schedule",
    description: "Record token timeline and milestone payment dates.",
    contact: "Kumar Group",
    time: "Completed",
    status: "Completed",
    priority: "Low",
    icon: "payments",
    ownerInitials: "RM",
    ownerClass: "bg-slate-200 text-slate-600",
  },
];

const schedule = [
  { time: "10:30", title: "Rajesh Mehta call", type: "Follow up", active: true },
  { time: "13:00", title: "Palm Heights viewing", type: "Site visit" },
  { time: "16:15", title: "Agreement review", type: "Documentation" },
];

const filters = ["All Tasks", "Due Today", "High Priority", "Completed"];

function SummaryCard({ card }: { card: (typeof summaryCards)[number] }) {
  return (
    <section className="card-elevation rounded-xl border border-sky-100 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconClass}`}>
          <Icon name={card.icon} />
        </div>
        <span className={`rounded-full px-2 py-1 text-xs font-bold ${card.badgeClass}`}>{card.badge}</span>
      </div>
      <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-slate-400">{card.label}</h2>
      <p className="text-3xl font-bold leading-tight text-slate-900">{card.value}</p>
    </section>
  );
}

function StatusBadge({ status }: { status: TaskStatus }) {
  const classes: Record<TaskStatus, string> = {
    "Due Today": "border-amber-200 bg-amber-50 text-amber-700",
    Upcoming: "border-sky-200 bg-sky-50 text-sky-700",
    Completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
    Overdue: "border-red-200 bg-red-50 text-red-700",
  };

  return <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${classes[status]}`}>{status}</span>;
}

function PriorityBadge({ priority }: { priority: TaskPriority }) {
  const classes: Record<TaskPriority, string> = {
    High: "bg-red-50 text-red-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  return <span className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${classes[priority]}`}>{priority}</span>;
}

function TaskCard({ task }: { task: Task }) {
  const highlighted = task.status === "Due Today" || task.status === "Overdue";

  return (
    <article
      className={`rounded-xl border bg-white p-4 shadow-sm transition-all hover:border-[#0077b6] hover:shadow-lg hover:shadow-[#03045e]/10 ${
        highlighted ? "border-[#90e0ef]" : "border-sky-100"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl ${highlighted ? "bg-sky-50 text-[#0077b6]" : "bg-slate-50 text-slate-400"}`}>
          <Icon name={task.icon} className="text-lg" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <StatusBadge status={task.status} />
            <PriorityBadge priority={task.priority} />
          </div>
          <h2 className="text-base font-semibold leading-tight text-slate-900">{task.title}</h2>
          <p className="mt-1 text-sm leading-5 text-slate-500">{task.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1">
              <Icon name="schedule" className="text-base" />
              {task.time}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="group" className="text-base" />
              {task.contact}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button aria-label={`Open actions for ${task.title}`} className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-50 hover:text-slate-600">
            <Icon name="more_vert" />
          </button>
          <div className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold ${task.ownerClass}`}>{task.ownerInitials}</div>
        </div>
      </div>
    </article>
  );
}

function TaskBoard() {
  return (
    <section className="card-elevation overflow-hidden rounded-xl border border-sky-100 bg-white">
      <div className="flex flex-col gap-4 border-b border-sky-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Task Queue</h2>
          <p className="text-sm text-slate-500">Follow ups, site visits, and documentation work.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              className={`rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
                index === 0 ? "bg-[#0077b6] text-white" : "bg-[#f5f2fa] text-slate-600 hover:bg-[#ade8f4]"
              }`}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 p-5 sm:p-6 xl:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard key={`${task.title}-${task.contact}`} task={task} />
        ))}
      </div>
    </section>
  );
}

function SchedulePanel() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
      <section className="rounded-xl border border-sky-100 bg-white p-5 shadow-xl shadow-[#03045e]/10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Today</h2>
            <p className="text-sm text-slate-500">May 20, 2026</p>
          </div>
          <button aria-label="Change date" className="rounded-lg p-2 text-[#0077b6] transition-colors hover:bg-sky-50">
            <Icon name="calendar_month" />
          </button>
        </div>
        <div className="space-y-3">
          {schedule.map((item) => (
            <article className={`rounded-lg border-l-4 p-3 ${item.active ? "border-[#0077b6] bg-[#f5f2fa]" : "border-transparent bg-slate-50"}`} key={item.title}>
              <p className="text-xs font-bold uppercase tracking-[0.05em] text-slate-400">{item.time}</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-sky-100 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Quick Add</h2>
        <div className="space-y-3">
          <input className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100" placeholder="Task title" type="text" />
          <select className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100">
            <option>Follow Up</option>
            <option>Site Visit</option>
            <option>Documentation</option>
          </select>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800">
            <Icon name="add" className="text-lg" />
            <span>Add Task</span>
          </button>
        </div>
      </section>
    </aside>
  );
}

export default function TasksPage() {
  return (
    <CrmShell activePath="/tasks">
      <div className="mx-auto max-w-[1440px] px-4 py-6 pb-28 sm:px-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">Tasks</h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">Track priority follow ups, visits, and deal paperwork for the team.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50">
              <Icon name="filter_list" className="text-lg" />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition-all hover:bg-[#48cae4] active:scale-95">
              <Icon name="add" className="text-lg" />
              <span>New Task</span>
            </button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <SummaryCard card={card} key={card.label} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <TaskBoard />
          <SchedulePanel />
        </div>
      </div>
    </CrmShell>
  );
}
