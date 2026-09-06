/**
 * Core design system tokens for the 1Fi mobile application.
 */

export const colors = {
  // Primary brand purple — buttons, active states, icons, section accents.
  // Sampled from "Check eligibility", "Fetch my portfolio" buttons and the
  // active Shop pill.
  primary: '#6C3FE0',
  primaryDark: '#4B2A9E', // pressed / darker variant, derived from primary
  primaryLight: '#EDE7FB', // light purple fill, used behind icons (Profile quick actions)

  // Hero gradient (Home banner, "0% INTEREST" card). Two-stop gradient,
  // deep purple to violet.
  gradientStart: '#2E1760',
  gradientEnd: '#7A4AE8',

  // Neutrals
  background: '#F5F5F7', // page background behind white cards
  surface: '#FFFFFF', // card surface
  border: '#ECECEF', // hairline dividers (Profile list rows)

  textPrimary: '#1A1A1F', // headings, e.g. "Profile"
  textSecondary: '#6B6B76', // subtitles, e.g. "Manage your account settings..."
  textMuted: '#9C9CA6', // tertiary / placeholder text

  // Accent colors seen in "Why pay with 1Fi" icon chips
  accentGold: '#E0A324', // "0% interest" percent icon background tint source
  accentGreen: '#1FAE6B', // "Keep growing" icon
  accentBlue: '#3B82C4', // "Quickest approvals" icon

  // Semantic & status colors
  error: '#D64545',
  errorLight: '#FBE9E9',

  white: '#FFFFFF',
  black: '#000000',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999, // fully rounded — CTA buttons, segmented toggle, search bar
} as const;

export const typography = {
  // Screen-level heading, e.g. "Profile"
  h1: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  // Section heading inside a screen, e.g. "Nearby Stores"
  h2: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  // Uppercase section label with accent bar, e.g. "OFFERS", "WHY PAY WITH 1FI"
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700' as const,
    letterSpacing: 0.8,
    color: colors.primary,
    textTransform: 'uppercase' as const,
  },
  // List row title, e.g. "Air India", "Profile details"
  rowTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.textPrimary,
  },
  // List row subtitle, e.g. "No-cost EMIs upto 18 months"
  rowSubtitle: {
    fontSize: 13,
    fontWeight: '400' as const,
    color: colors.textSecondary,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
    color: colors.textPrimary,
  },
  bodySecondary: {
    fontSize: 14,
    fontWeight: '400' as const,
    color: colors.textSecondary,
  },
  // Button label, e.g. "Check eligibility"
  button: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.white,
  },
  caption: {
    fontSize: 11,
    fontWeight: '500' as const,
    color: colors.textMuted,
  },
} as const;

export const shadows = {
  card: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
} as const;

export const durations = {
  fast: 150,
  normal: 300,
  slow: 500,
  carousel: 4000, // auto-scroll interval for carousels
} as const;

export const iconSizes = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 48,
} as const;
