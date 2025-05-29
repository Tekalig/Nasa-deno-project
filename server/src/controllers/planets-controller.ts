import { RouterContext } from "@oak/oak/router";
import { readCSV } from "../models/planets.ts";

export const getHabitablePlanets = async (ctx: RouterContext<string>) => {
  const planets = await readCSV();
  console.log(`Total number of habitable planets found: ${planets.length}`);
  ctx.response.body = planets;
};
