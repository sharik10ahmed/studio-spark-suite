import type { SVGProps } from "react";

const paths: Record<string, string> = {
  badge: "M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8 9.5 8z",
  bolt: "M13 2L4 14h6l-1 8 9-12h-6z",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  star: "M12 3.5l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.8l6-.7z",
  pulse: "M2 12h4l2-6 4 12 3-8 2 2h5",
  users: "M8 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5M17 11a3 3 0 100-6M16 20c0-2 1-3.5 3-4",
  phone: "M4 4h4l2 5-2.5 1.5a12 12 0 006 6L15 14l5 2v4c-9 0-16-7-16-16z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  pin: "M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l4 2",
  arrow: "M5 12h14M13 6l6 6-6 6",
  close: "M6 6l12 12M18 6L6 18",
  menu: "M4 7h16M4 12h16M4 17h16",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  music: "M9 18V6l10-2v12M9 18a3 3 0 11-3-3 3 3 0 013 3zm10-2a3 3 0 11-3-3 3 3 0 013 3z",
  dumbbell: "M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12",
  sparkles: "M12 3v6M9 6h6M6 13v5M4 15.5h4M16 12l1.5 3.5L21 17l-3.5 1.5L16 22l-1.5-3.5L11 17l3.5-1.5z",
  image: "M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6",
  calendar: "M4 6h16v14H4zM8 3v4M16 3v4M4 11h16",
  quote:
    "M10 6H5a2 2 0 00-2 2v3a2 2 0 002 2h3v1a3 3 0 01-3 3M21 6h-5a2 2 0 00-2 2v3a2 2 0 002 2h3v1a3 3 0 01-3 3",

  inbox: "M3 13l3-9h12l3 9v7H3zM3 13h5l1 3h6l1-3h5",
  settings:
    "M12 15a3 3 0 100-6 3 3 0 000 6zM4 12l-1.5-.9 1.2-3 1.7.4M20 12l1.5-.9-1.2-3-1.7.4M12 4V2h0M12 20v2",
  logout: "M15 12H4m7-5l-5 5 5 5M14 4h6v16h-6",
  external: "M14 4h6v6M20 4l-9 9M17 14v6H4V7h6",
  plus: "M12 5v14M5 12h14",
  edit: "M4 20h4l10-10-4-4L4 16zM14 4l4 4",
  trash: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",
  eye: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6zm10 2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  check: "M4 12l5 5L20 6",
};

export function Icon({
  name,
  className = "h-5 w-5",
  ...rest
}: { name: keyof typeof paths | string; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d={paths[name] ?? paths["sparkles"]} />
    </svg>
  );
}
