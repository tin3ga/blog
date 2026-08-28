import type { Config, Context } from "@netlify/edge-functions";

const UMAMI_HOST = "https://cloud.umami.is";
const ROUTE_PREFIX = "/init";

export default async function handler(
  request: Request,
  context: Context,
): Promise<Response> {
  const incomingUrl = new URL(request.url);
  const upstreamPath = incomingUrl.pathname.slice(ROUTE_PREFIX.length) || "/";
  const headers = new Headers(request.headers);

  // Never forward first-party cookies or a caller-supplied client IP.
  headers.delete("cookie");
  headers.delete("x-client-ip");
  headers.set("x-real-ip", context.ip);
  headers.set("x-forwarded-for", context.ip);

  // Preserve the public filename while serving Umami's canonical tracker.
  if (incomingUrl.pathname.endsWith(".js")) {
    const upstreamResponse = await fetch(`${UMAMI_HOST}/script.js`, {
      method: "GET",
      headers,
      redirect: "follow",
    });
    const responseHeaders = new Headers(upstreamResponse.headers);

    if (upstreamResponse.ok) {
      responseHeaders.set(
        "Netlify-CDN-Cache-Control",
        "public, s-maxage=86400, stale-while-revalidate=604800",
      );
    }

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  }

  const upstreamUrl = new URL(
    `${upstreamPath}${incomingUrl.search}`,
    UMAMI_HOST,
  );
  const method = request.method.toUpperCase();
  const hasBody = method !== "GET" && method !== "HEAD";

  return fetch(upstreamUrl, {
    method,
    headers,
    body: hasBody ? request.body : undefined,
    redirect: "follow",
  });
}

export const config: Config = {
  path: "/init/*",
  cache: "manual",
};
