const port = Number(Deno.env.get("PORT")) || 3000;
Deno.serve({ port }, (req: Request) => {
  const url = new URL(req.url);
  if (url.pathname === "/healthz") return new Response("ok");
  return Response.json({ runtime: "deno", status: "ok" });
});
// cache-auth-basic test 1773708583
