"use client";

import { FormEvent, useEffect, useState } from "react";
import Icon from "./Icon";
import {
  createDeal,
  getDealBoard,
  getDealStages,
  getEmployees,
  getLeads,
  getProperties,
} from "../utils/api-client";
import type {
  ApiDealStageSummary,
  ApiEmployee,
  ApiLead,
  ApiProperty,
} from "../utils/api-types";

type Props = { open: boolean; onClose: () => void };
const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none focus:border-[#0077b6] focus:ring-4 focus:ring-sky-100";

export function NewDealModal({ open, onClose }: Props) {
  const [leads, setLeads] = useState<ApiLead[]>([]),
    [properties, setProperties] = useState<ApiProperty[]>([]),
    [employees, setEmployees] = useState<ApiEmployee[]>([]),
    [stages, setStages] = useState<ApiDealStageSummary[]>([]),
    [tags, setTags] = useState<string[]>([]);
  const [form, setForm] = useState({
    leadId: "",
    propertyId: "",
    stageId: "",
    ownerId: "",
    tag: "",
    value: "",
  });
  const [loading, setLoading] = useState(false),
    [saving, setSaving] = useState(false),
    [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    // The modal is opened imperatively, so reset its transient state when it becomes visible.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setError("");
    setLoading(true);
    Promise.all([
      getLeads(1, 100),
      getProperties(1, 100),
      getEmployees(1, 100),
      getDealStages(),
      getDealBoard(),
    ])
      .then(
        ([leadResult, propertyResult, employeeResult, stageResult, board]) => {
          setLeads(leadResult.items);
          setProperties(propertyResult.items);
          setEmployees(employeeResult.items.filter((item) => item.isActive));
          setStages(stageResult);
          setTags(
            Array.from(
              new Set(
                board.flatMap((column) =>
                  column.deals
                    .map((deal) => deal.tag)
                    .filter((tag): tag is string => Boolean(tag)),
                ),
              ),
            ).sort(),
          );
          setForm((current) => ({
            ...current,
            stageId: current.stageId || stageResult[0]?.id || "",
          }));
        },
      )
      .catch((cause) =>
        setError(
          cause instanceof Error
            ? cause.message
            : "Unable to load deal options. Please try again.",
        ),
      )
      .finally(() => setLoading(false));
  }, [open]);

  if (!open) return null;
  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSaving(true);
    try {
      await createDeal({
        leadId: form.leadId,
        propertyId: form.propertyId,
        value: Number(form.value),
        stageId: form.stageId || undefined,
        ownerId: form.ownerId || undefined,
        tag: form.tag || undefined,
      });
      onClose();
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "Unable to create the deal.",
      );
    } finally {
      setSaving(false);
    }
  }
  const label = (text: string, required = false) => (
    <span className="text-sm font-semibold text-slate-700">
      {text} {required && <span className="text-red-500">*</span>}
    </span>
  );
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="new-deal-title"
    >
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0077b6]">
              Pipeline
            </p>
            <h2
              id="new-deal-title"
              className="mt-1 text-2xl font-bold text-slate-900"
            >
              Add new deal
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Create a deal with its related CRM records.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
          >
            <Icon name="close" />
          </button>
        </div>
        <form onSubmit={submit} className="space-y-5 px-6 py-6">
          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}
          {loading ? (
            <p className="py-8 text-center text-sm text-slate-500">
              Loading deal options…
            </p>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  {label("Lead", true)}
                  <select
                    required
                    value={form.leadId}
                    onChange={(e) => update("leadId", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a lead</option>
                    {leads.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.contactName} · {item.status}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2">
                  {label("Property", true)}
                  <select
                    required
                    value={form.propertyId}
                    onChange={(e) => update("propertyId", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a property</option>
                    {properties.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title} · {item.location}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2">
                  {label("Stage", true)}
                  <select
                    required
                    value={form.stageId}
                    onChange={(e) => update("stageId", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a stage</option>
                    {stages.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2">
                  {label("Owner")}
                  <select
                    value={form.ownerId}
                    onChange={(e) => update("ownerId", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Unassigned</option>
                    {employees.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.fullName} · {item.role}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2">
                  {label("Deal value", true)}
                  <input
                    required
                    min="0.01"
                    step="0.01"
                    type="number"
                    value={form.value}
                    onChange={(e) => update("value", e.target.value)}
                    placeholder="e.g. 2500000"
                    className={inputClass}
                  />
                </label>
                <label className="space-y-2">
                  {label("Tag")}
                  <select
                    value={form.tag}
                    onChange={(e) => update("tag", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">No tag</option>
                    {tags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                  <span className="block text-xs text-slate-400">
                    Existing deal tags
                  </span>
                </label>
              </div>
              <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-[#2a2c94] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0077b6] disabled:opacity-60"
                >
                  {saving ? "Creating…" : "Create deal"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
