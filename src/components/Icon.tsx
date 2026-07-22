import type { ContactIcon } from "../data/profile";

const PATHS: Record<ContactIcon, string> = {
  email: "M4 4h16v16H4V4zm0 0 8 8 8-8",
  phone: "M6 4h4l1.5 4.5L9 10a10 10 0 0 0 5 5l1.5-2.5L20 14v4a2 2 0 0 1-2 2c-8.28 0-16-7.72-16-16a2 2 0 0 1 2-2z",
  linkedin: "M4 4h16v16H4V4zm4 5v7m0-9.5v0M12 11v5m0-5c0-2 2-2.5 3.5-1.8S17 11 17 13v3",
  github: "M12 3a9 9 0 0 0-2.85 17.55c.45.08.6-.2.6-.43v-1.68c-2.5.55-3-1.2-3-1.2-.4-1-.98-1.28-.98-1.28-.8-.55.06-.54.06-.54.88.06 1.35.9 1.35.9.79 1.35 2.07.96 2.57.73.08-.57.3-.96.55-1.18-1.98-.22-4.05-.99-4.05-4.4 0-.97.35-1.76.9-2.38-.09-.22-.4-1.12.09-2.33 0 0 .75-.24 2.45.9a8.5 8.5 0 0 1 4.46 0c1.7-1.15 2.45-.9 2.45-.9.5 1.21.18 2.11.09 2.33.56.62.9 1.4.9 2.38 0 3.42-2.08 4.18-4.06 4.4.32.28.6.82.6 1.65v2.45c0 .23.14.51.6.43A9 9 0 0 0 12 3z",
  location: "M12 21s7-6.4 7-11.5S16 3 12 3 5 5.4 5 9.5 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  website: "M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16M12 4v16",
};

interface IconProps {
  name: ContactIcon;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
