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

  // Umami Cloud prioritizes these headers over the location of its own edge.
  headers.delete("x-umami-client-country");
  headers.delete("x-umami-client-region");
  headers.delete("x-umami-client-city");
  headers.set("x-umami-client-country", context.geo.country.code);
  if (context.geo.subdivision.code) {
    headers.set("x-umami-client-region", context.geo.subdivision.code);
  }
  if (context.geo.city) {
    headers.set("x-umami-client-city", encodeURIComponent(context.geo.city));
  }

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
