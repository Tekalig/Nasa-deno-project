import { Application } from "jsr:@oak/oak/application";

const app = new Application();
const PORT = 8000;

app.use(async(ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url} at ${new Date().toISOString()} [${time}]`);
});

app.use(async(ctx, next)=> {
  const start = Date.now();
  await next();
  const delta = Date.now()- start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
})

app.use(async(ctx) => {
  ctx.response.body = "Hello, World!";
});

app.use((ctx) => {
  ctx.response.body = `
  +----------------------------------+
  |          Mission Control         |
  +----------------------------------+
  | Status: All systems operational  |
  | Next Check: 2023-10-01 12:00 UTC |
  +----------------------------------+
  `;
});


if (import.meta.main) {
  await app.listen({ port: PORT });
}
