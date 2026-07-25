"use client";
import React from "react";
import { CrmShell } from "../../components/crm-shell";
import { useState } from "react";
type Props = {};

function page({}: Props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
}

export default page;
