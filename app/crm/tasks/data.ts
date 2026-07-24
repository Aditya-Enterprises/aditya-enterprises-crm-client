export type TaskStatus = "Due Today" | "Upcoming" | "Completed" | "Overdue";
export type TaskPriority = "High" | "Medium" | "Low";

export type Task = {
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

export type SummaryCard = {
  label: string;
  value: string;
  icon: string;
  badge: string;
  badgeClass: string;
  iconClass: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  type: string;
  active?: boolean;
};

export const summaryCards: SummaryCard[] = [
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

export const tasks: Task[] = [
  {
    title: "Call Rajesh Mehta",
    description:
      "Follow up on Andheri office space requirements and budget approval.",
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
    description:
      "Show 3BHK unit and share parking details with the Shah family.",
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
    description:
      "Share Bandra commercial options with updated rental comparison.",
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

export const schedule: ScheduleItem[] = [
  {
    time: "10:30",
    title: "Rajesh Mehta call",
    type: "Follow up",
    active: true,
  },
  { time: "13:00", title: "Palm Heights viewing", type: "Site visit" },
  { time: "16:15", title: "Agreement review", type: "Documentation" },
];

export const filters = ["All Tasks", "Due Today", "High Priority", "Completed"];
