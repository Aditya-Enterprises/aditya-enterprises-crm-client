import { apiFetch, setAccessToken } from "./api";
import { setCurrentUser } from "./current-user";
import type {
  ApiDeal,
  ApiDealStageSummary,
  ApiEmployee,
  ApiLead,
  ApiPagedResult,
  ApiProperty,
  ApiTask,
  DashboardPipelineItem,
  DashboardSummary,
  LoginResponse,
  RegisterAgentRequest,
} from "./api-types";

export async function login(email: string, password: string) {
  const result = await apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  setAccessToken(result.accessToken);
  const name = result.userName ?? result.email ?? "User";
  const [firstName = "User", ...lastNameParts] = name.trim().split(/\s+/);
  setCurrentUser({
    id: result.userId,
    firstName,
    lastName: lastNameParts.join(" "),
    name,
    email: result.email,
    role: result.roles[0] ?? "Agent",
  });
  return result;
}

export async function registerAgent(request: RegisterAgentRequest) {
  return apiFetch<{
    userId: string;
    employeeId: string;
    email: string;
    role: string;
  }>("/auth/register", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export const getEmployees = (page = 1, pageSize = 20) =>
  apiFetch<ApiPagedResult<ApiEmployee>>(
    `/employees?page=${page}&pageSize=${pageSize}`,
  );

export const getProperties = (page = 1, pageSize = 20) =>
  apiFetch<ApiPagedResult<ApiProperty>>(
    `/properties?page=${page}&pageSize=${pageSize}`,
  );

export const getLeads = (page = 1, pageSize = 20) =>
  apiFetch<ApiPagedResult<ApiLead>>(`/leads?page=${page}&pageSize=${pageSize}`);

export const getDeals = (page = 1, pageSize = 20) =>
  apiFetch<ApiPagedResult<ApiDeal>>(`/deals?page=${page}&pageSize=${pageSize}`);

export const getDealBoard = () =>
  apiFetch<ApiDealStageSummary[]>("/deals/board");

export const getTasks = (page = 1, pageSize = 20) =>
  apiFetch<ApiPagedResult<ApiTask>>(`/tasks?page=${page}&pageSize=${pageSize}`);

export const getDashboardSummary = () =>
  apiFetch<DashboardSummary>("/dashboard/summary");

export const getDashboardPipeline = () =>
  apiFetch<DashboardPipelineItem[]>("/dashboard/pipeline");
