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

export type Property = {
  title: string;
  location: string;
  price: string;
  transaction: "Sale" | "Rent";
  status: "Active" | "Pending" | "Sold";
  beds: number;
  baths: number;
  area: string;
  image: string;
  imageAlt: string;
};

export type PropertyTab = {
  label: string;
  count: number;
  active?: boolean;
};

export type Amenity = {
  label: string;
  icon: string;
};

export type Deal = {
  client: string;
  property: string;
  value: string;
  tag: string;
  tagClass: string;
  tagIcon?: string;
  owner: string;
  ownerClass: string;
};

export type DealColumn = {
  title: string;
  count: number;
  value: string;
  dotClass: string;
  closed?: boolean;
  deals: Deal[];
};

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
