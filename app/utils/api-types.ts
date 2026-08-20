export type ApiPagedResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export type LoginResponse = {
  accessToken: string;
  expiresAtUtc: string;
  userId: string;
  email?: string;
  userName?: string;
  roles: string[];
};

export type RegisterAgentRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  adminCode: string;
};

export type AdminCodeResponse = { code: string; expiresAtUtc: string };

export type EmployeeRole = "Agent" | "Manager" | "Administrator";

export type ApiEmployee = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone?: string;
  role: EmployeeRole;
  isActive: boolean;
  createdAtUtc: string;
};

export type ApiProperty = {
  id: string;
  title: string;
  location: string;
  price: number;
  type: "Residential" | "Commercial" | "Industrial" | "Land";
  transactionType: "Sale" | "Rent";
  status: "Active" | "Pending" | "Sold";
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  imageUrl?: string;
  amenities: string[];
};

export type ApiLead = {
  id: string;
  contactName: string;
  email: string;
  phone?: string;
  intent?: string;
  expectedValue?: number;
  source?: string;
  status: "New" | "Contacted" | "Qualified" | "Negotiating" | "Closed" | "Lost";
  propertyId?: string;
  propertyTitle?: string;
  assignedEmployeeId?: string;
  assignedEmployeeName?: string;
  createdAtUtc: string;
};

export type ApiRecentLead = {
  id: string;
  contactName: string;
  intent?: string;
  status: ApiLead["status"];
  source?: string;
  createdAtUtc: string;
  assignedEmployeeName?: string;
};

export type ApiDeal = {
  id: string;
  client: string;
  leadId: string;
  property: string;
  propertyId: string;
  value: number;
  tag?: string;
  ownerId?: string;
  owner?: string;
  stageId: string;
  stage: string;
  createdAtUtc: string;
};

export type ApiDealStageSummary = {
  id: string;
  name: string;
  sortOrder: number;
  isClosed: boolean;
  dealCount: number;
  totalValue: number;
  deals: ApiDeal[];
};

export type ApiTask = {
  id: string;
  title: string;
  description?: string;
  contactName?: string;
  dueAtUtc: string;
  status: "Pending" | "InProgress" | "Completed" | "Cancelled";
  priority: "Low" | "Medium" | "High";
  taskType?: string;
  assignedEmployeeId?: string;
  assignedEmployeeName?: string;
  leadId?: string;
  dealId?: string;
  propertyId?: string;
  completedAtUtc?: string;
};

export type DashboardSummary = {
  totalLeads: number;
  activeLeads: number;
  activeDeals: number;
  totalRevenue: number;
  pendingTasks: number;
  conversionRate: number;
};

export type DashboardPipelineItem = {
  stageId: string;
  stage: string;
  sortOrder: number;
  isClosed: boolean;
  dealCount: number;
  totalValue: number;
};

export type DashboardScheduleItem = {
  id: string;
  title: string;
  contactName?: string;
  dueAtUtc: string;
  status: "Pending" | "InProgress" | "Completed" | "Cancelled";
  priority: "Low" | "Medium" | "High";
  taskType?: string;
  assignedEmployeeName?: string;
};
