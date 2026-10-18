/** Joins truthy class names — a dependency-free `clsx`. */
export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
