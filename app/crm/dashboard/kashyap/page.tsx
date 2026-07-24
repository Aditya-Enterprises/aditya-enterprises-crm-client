import { CrmShell } from "@/app/components/crm-shell";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <CrmShell activePath="/dashboard/kashyap">
      <div>Kashyap</div>
    </CrmShell>
  );
}

export default page;
