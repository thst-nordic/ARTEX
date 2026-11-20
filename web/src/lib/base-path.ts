/** URL prefix when the UI is served under a subpath (see NEXT_PUBLIC_BASE_PATH). */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

/** Prefix absolute app paths (`/api`, `/login`, …) for fetch and redirects. */
export function withBasePath(path: string): string {
  if (!basePath || !path.startsWith("/")) return path;
  return `${basePath}${path}`;
}