/** LinkedIn-style experience date helpers — inclusive month ranges. */

export type ExperienceMonth = `${number}-${number}`; // "YYYY-MM"
export type ExperienceEnd = ExperienceMonth | "present";

const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function parseYearMonth(value: ExperienceMonth): { year: number; month: number } {
  const [y, m] = value.split("-").map(Number);
  if (!y || !m || m < 1 || m > 12) {
    throw new Error(`Invalid experience month: ${value}`);
  }
  return { year: y, month: m };
}

function nowYearMonth(now: Date = new Date()): { year: number; month: number } {
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

/** Inclusive month count from start → end (or now when end is "present"). */
export function monthsBetween(
  start: ExperienceMonth,
  end: ExperienceEnd,
  now: Date = new Date(),
): number {
  const from = parseYearMonth(start);
  const to = end === "present" ? nowYearMonth(now) : parseYearMonth(end);
  return (to.year - from.year) * 12 + (to.month - from.month) + 1;
}

/** LinkedIn-style: "2 mos", "1 yr 8 mos", "4 yrs 3 mos", "1 yr". */
export function formatDuration(totalMonths: number): string {
  if (totalMonths < 1) return "1 mo";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yr = years === 0 ? null : years === 1 ? "1 yr" : `${years} yrs`;
  const mo = months === 0 ? null : months === 1 ? "1 mo" : `${months} mos`;
  if (yr && mo) return `${yr} ${mo}`;
  return yr ?? mo ?? "1 mo";
}

export function formatPeriod(
  start: ExperienceMonth,
  end: ExperienceEnd,
): string {
  const from = parseYearMonth(start);
  const startLabel = `${MONTH_SHORT[from.month - 1]} ${from.year}`;
  if (end === "present") return `${startLabel} — Present`;
  const to = parseYearMonth(end);
  return `${startLabel} — ${MONTH_SHORT[to.month - 1]} ${to.year}`;
}

export function roleDuration(
  start: ExperienceMonth,
  end: ExperienceEnd,
  now: Date = new Date(),
): string {
  return formatDuration(monthsBetween(start, end, now));
}

/** Sum of role lengths (overlaps count twice — LinkedIn convention). */
export function totalExperienceDuration(
  roles: readonly { start: ExperienceMonth; end: ExperienceEnd }[],
  now: Date = new Date(),
): string {
  const total = roles.reduce(
    (sum, role) => sum + monthsBetween(role.start, role.end, now),
    0,
  );
  return formatDuration(total);
}
