import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="border-4 border-amber-400">{children}</div>;
}
export default layout;
