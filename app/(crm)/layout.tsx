"use client";

import React from "react";
import { CrmShell } from "../components/crm-shell";
import { CurrentUserProvider } from "../components/CurrentUserProvider";
import { usePathname } from "next/navigation";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <CurrentUserProvider>
      <CrmShell activePath={pathname ?? "/crm/dashboard"}>{children}</CrmShell>
    </CurrentUserProvider>
  );
}
export default Layout;
