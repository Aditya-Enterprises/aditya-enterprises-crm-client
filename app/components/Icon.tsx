import React from "react";
import { iconPaths } from "../data/IconPaths";

function iconSizeClass(className: string) {
  if (className.includes("text-xs")) return "h-3 w-3";
  if (className.includes("text-base")) return "h-4 w-4";
  if (className.includes("text-lg")) return "h-5 w-5";
  if (className.includes("text-xl")) return "h-5 w-5";
  if (className.includes("text-2xl")) return "h-6 w-6";
  return "h-6 w-6";
}

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths = iconPaths[name] ?? iconPaths.help;

  return (
    <svg
      aria-hidden="true"
      className={`shrink-0 ${iconSizeClass(className)} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {paths.map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  );
}
export default Icon;
