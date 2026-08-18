"use client";
import { useEffect, useState } from "react";
import { getEmployees } from "../../utils/api-client";
import type { ApiEmployee } from "../../utils/api-types";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<ApiEmployee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getEmployees()
      .then((result) => setEmployees(result.items))
      .catch(() => setError("Unable to load employees."))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-360 px-4 py-6 sm:px-6 lg:p-8">
      <h1 className="text-3xl font-bold text-slate-900">Employees</h1>
      <p className="mt-1 text-slate-500">Manage CRM team members and roles.</p>

      {isLoading ? (
        <p className="mt-8 text-slate-500">Loading employees...</p>
      ) : null}
      {error ? <p className="mt-8 text-red-600">{error}</p> : null}

      {!isLoading && !error ? (
        <div className="mt-8 overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr className="border-t border-slate-100" key={employee.id}>
                  <td className="px-4 py-4 font-medium text-slate-900">
                    {employee.fullName}
                  </td>
                  <td className="px-4 py-4 text-slate-600">{employee.email}</td>
                  <td className="px-4 py-4 text-slate-600">
                    {employee.phone ? employee.phone : "-"}
                  </td>
                  <td className="px-4 py-4 text-slate-600">{employee.role}</td>
                  <td className="px-4 py-4">
                    <span
                      className={
                        employee.isActive
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }
                    >
                      {employee.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
