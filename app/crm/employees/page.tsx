import React from "react";
import { CrmShell } from "../../components/crm-shell";

type Props = {};

function page({}: Props) {
  return (
    <CrmShell activePath="/crm/employees">
      <div>Employees</div>
    </CrmShell>
  );
}

export default page;
