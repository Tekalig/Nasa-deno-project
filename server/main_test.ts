import { assertEquals } from "@std/assert";
import { readCSV } from "./src/models/planets.ts";

Deno.test({ name: "Planets Test", permissions: { read: true } }, async () => {
  const planets = await readCSV();
  assertEquals(Array.isArray(planets), true);
  assertEquals(planets.length > 0, true);
  for await (const planet of planets) {
    assertEquals(
      Number(planet.koi_prad) > 0.5 && Number(planet.koi_prad) < 1.5,
      true,
    );
    assertEquals(
      Number(planet.koi_smass) > 0.78 && Number(planet.koi_smass) < 1.04,
      true,
    );
    assertEquals(
      Number(planet.koi_srad) > 0.99 && Number(planet.koi_srad) < 1.01,
      true,
    );
  }
});
