import type { SVGProps } from 'react'

/** Line icons (24px grid, stroke-based) used across the site. */
const PATHS = {
  suitcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M8 7v13M16 7v13" />
    </>
  ),
  group: (
    <>
      <circle cx="12" cy="8" r="3" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="19" cy="10" r="2" />
      <path d="M6.5 20a5.5 5.5 0 0 1 11 0M2 19a3.5 3.5 0 0 1 4-3.4M22 19a3.5 3.5 0 0 0-4-3.4" />
    </>
  ),
  share: (
    <>
      <rect x="3" y="8" width="15" height="12" rx="2" />
      <path d="M13 4h7v7M20 4l-8 8" />
    </>
  ),
  community: (
    <>
      <rect x="3" y="10" width="18" height="10" rx="2" />
      <path d="M7 10V6h10v4M10 6V4h4v2M8 15h8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  download: <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />,
} as const

export type IconName = keyof typeof PATHS

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  )
}
