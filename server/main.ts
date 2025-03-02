import { Application } from "jsr:@oak/oak/application";
import api from "./src/routes/api.ts";

const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {
  ctx.response.headers.set(
    "Access-Control-Allow-Origin",
    "http://localhost:5173",
  );
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  console.log(
    `HTTP ${ctx.request.method} on ${ctx.request.url} at ${
      new Date().toISOString()
    } [${time}]`,
  );
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

app.use(api.routes());
app.use(api.allowedMethods());

app.addEventListener("listen", ({ port, serverType }) => {
  console.log(
    `Start listening on http://localhost:${port}`,
  );
  console.log(`using HTTP server: ${serverType}`);
});

if (import.meta.main) {
  await app.listen({ port: PORT });
}
