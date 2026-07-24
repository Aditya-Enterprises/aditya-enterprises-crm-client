export type Lead = {
  name: string;
  initials: string;
  added: string;
  email: string;
  phone: string;
  property: string;
  intent: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED";
  statusClass: string;
  agent: string;
  agentInitials: string;
  avatarClass: string;
};

export type FilterOption = {
  label: string;
  options: string[];
};

export type Insight = {
  label: string;
  value: string;
  icon: string;
  iconClass: string;
};

export const leadsFilters: FilterOption[] = [
  {
    label: "Status",
    options: ["All Statuses", "New", "Contacted", "Qualified", "Negotiating"],
  },
  {
    label: "Agent",
    options: ["All Agents", "Marcus Sterling", "Priya Shah", "Raj Malhotra"],
  },
  {
    label: "Property Type",
    options: ["All Types", "Residential", "Commercial", "Industrial"],
  },
];

export const leadsData: Lead[] = [
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

export const leadsInsights: Insight[] = [
  {
    label: "Conversion Rate",
    value: "24.8%",
    icon: "trending_up",
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Active Leads",
    value: "156",
    icon: "group",
    iconClass: "bg-sky-50 text-sky-600",
  },
  {
    label: "Avg. Response Time",
    value: "14m",
    icon: "bolt",
    iconClass: "bg-amber-50 text-amber-600",
  },
];
