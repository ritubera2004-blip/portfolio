/**
 * Prefix a root-relative asset path with the configured basePath.
 * In local dev basePath is empty, so asset("/foo.png") === "/foo.png".
 * On GitHub Pages project sites basePath === "/<repo>", so asset("/foo.png")
 * resolves correctly under the repo subpath.
 *
 * Use this for raw <img src> and <a href> pointing at files in /public.
 * (Next.js auto-prefixes basePath for metadata icons/images and <Link>.)
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
