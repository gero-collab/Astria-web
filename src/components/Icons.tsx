"use client";

import { useId } from "react";

const strokeProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ChromeDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset=".55" stopColor="#c4cad2" />
        <stop offset="1" stopColor="#7c828c" />
      </linearGradient>
    </defs>
  );
}

export function BoltIcon() {
  const uid = useId();
  return (
    <svg {...strokeProps} stroke={`url(#${uid})`}>
      <ChromeDefs id={uid} />
      <path d="M13 2 4.5 13.2h6.2L11 22l8.5-11.2H13z" fill={`url(#${uid})`} fillOpacity={0.16} />
    </svg>
  );
}

export function AiIcon() {
  const uid = useId();
  return (
    <svg {...strokeProps} stroke={`url(#${uid})`}>
      <ChromeDefs id={uid} />
      <circle cx="12" cy="12" r="3.1" fill={`url(#${uid})`} fillOpacity={0.22} />
      <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(28 12 12)" />
      <circle cx="20.4" cy="8.6" r="1.15" fill={`url(#${uid})`} />
      <circle cx="3.6" cy="15.4" r="1.15" fill={`url(#${uid})`} />
    </svg>
  );
}

export function DesignIcon() {
  const uid = useId();
  return (
    <svg {...strokeProps} stroke={`url(#${uid})`}>
      <ChromeDefs id={uid} />
      <path d="M12 2 3 8v8l9 6 9-6V8z" fill={`url(#${uid})`} fillOpacity={0.1} />
      <path d="M12 2v20" />
      <path d="M3 8l9 6 9-6" />
    </svg>
  );
}

export function SatIcon() {
  const uid = useId();
  return (
    <svg {...strokeProps} stroke={`url(#${uid})`}>
      <ChromeDefs id={uid} />
      <rect x="9" y="9" width="6" height="6" rx="1" transform="rotate(45 12 12)" fill={`url(#${uid})`} fillOpacity={0.2} />
      <path d="M6.5 6.5 3 3M17.5 6.5 21 3M6.5 17.5 3 21M17.5 17.5 21 21" />
      <circle cx="12" cy="12" r="1.4" fill={`url(#${uid})`} />
    </svg>
  );
}

