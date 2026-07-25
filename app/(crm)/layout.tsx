"use client";

import React from "react";
import { CrmShell } from "../components/crm-shell";
import { usePathname } from "next/navigation";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <CrmShell activePath={pathname ?? "/crm/dashboard"}>{children}</CrmShell>
  );
}
export default layout;
