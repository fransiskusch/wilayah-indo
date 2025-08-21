import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
const BASE = "https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data";

app.use("/*", cors({ origin: "*", allowMethods: ["GET"] }));

app.get("/api/health", (c) =>
  c.json({ ok: true, ts: new Date().toISOString() })
);

app.get("/api/provinces", async (c) => {
  const r = await fetch(`${BASE}/provinces.json`, {
    cf: { cacheTtl: 86400, cacheEverything: true },
  });
  if (!r.ok) return c.json({ error: "not found" }, 404);
  return new Response(r.body, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=86400",
      "access-control-allow-origin": "*",
    },
  });
});

app.get("/api/regencies/:prov", async (c) => {
  const { prov } = c.req.param();
  const r = await fetch(`${BASE}/regencies/${prov}.json`, {
    cf: { cacheTtl: 86400, cacheEverything: true },
  });
  if (!r.ok) return c.json({ error: "not found" }, 404);
  return new Response(r.body, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=86400",
      "access-control-allow-origin": "*",
    },
  });
});

app.get("/api/districts/:reg", async (c) => {
  const { reg } = c.req.param(); // contoh: 31.74
  const r = await fetch(`${BASE}/districts/${reg}.json`, {
    cf: { cacheTtl: 86400, cacheEverything: true },
  });
  if (!r.ok) return c.json({ error: "not found" }, 404);
  return new Response(r.body, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=86400",
      "access-control-allow-origin": "*",
    },
  });
});

app.get("/api/postal/:p/:r/:d", async (c) => {
  const { p, r, d } = c.req.param(); // 31 / 74 / 06
  const r2 = await fetch(`${BASE}/postal/${p}/${r}/${d}.json`, {
    cf: { cacheTtl: 86400, cacheEverything: true },
  });
  if (!r2.ok) return c.json({ error: "not found" }, 404);
  return new Response(r2.body, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=86400",
      "access-control-allow-origin": "*",
    },
  });
});

export default app; // Workers cukup export default app
