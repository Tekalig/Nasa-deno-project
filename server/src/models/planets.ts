import { parse } from "@std/csv";
import { join } from "https://deno.land/std/path/mod.ts";
import * as _ from "https://raw.githubusercontent.com/lodash/lodash/refs/heads/es/lodash.js";

interface Planet {
  [key: string]: string;
}

export async function readCSV() {
  const path = join("src", "assets", "kepler_exoplanet.csv");
  const data = await Deno.readTextFile(path);
  const record = parse(data, {
    columns: [
      "kepid",
      "kepoi_name",
      "kepler_name",
      "koi_disposition",
      "koi_pdisposition",
      "koi_score",
      "koi_fpflag_nt",
      "koi_fpflag_ss",
      "koi_fpflag_co",
      "koi_fpflag_ec",
      "koi_period",
      "koi_period_err1",
      "koi_period_err2",
      "koi_time0bk",
      "koi_time0bk_err1",
      "koi_time0bk_err2",
      "koi_impact",
      "koi_impact_err1",
      "koi_impact_err2",
      "koi_duration",
      "koi_duration_err1",
      "koi_duration_err2",
      "koi_depth",
      "koi_depth_err1",
      "koi_depth_err2",
      "koi_prad",
      "koi_prad_err1",
      "koi_prad_err2",
      "koi_teq",
      "koi_teq_err1",
      "koi_teq_err2",
      "koi_insol",
      "koi_insol_err1",
      "koi_insol_err2",
      "koi_model_snr",
      "koi_tce_plnt_num",
      "koi_tce_delivname",
      "koi_steff",
      "koi_steff_err1",
      "koi_steff_err2",
      "koi_slogg",
      "koi_slogg_err1",
      "koi_slogg_err2",
      "koi_srad",
      "koi_srad_err1",
      "koi_srad_err2",
      "koi_smass",
      "koi_smass_err1",
      "koi_smass_err2",
      "ra",
      "dec",
      "koi_kepmag",
    ],
    skipFirstRow: true,
    header: true,
    comment: "#",
  });

  const habitablePlanets = record.filter((planet: Planet) => {
    const disposition = String(planet["koi_disposition"]);
    const planetaryRadius = Number(planet["koi_prad"]);
    const stellarMass = Number(planet["koi_smass"]);
    const stellarRadius = Number(planet["koi_srad"]);

    return (
      disposition === "CONFIRMED" &&
      planetaryRadius > 0.5 &&
      planetaryRadius < 1.5 &&
      stellarMass > 0.78 &&
      stellarMass < 1.04 &&
      stellarRadius > 0.99 &&
      stellarRadius < 1.01
    );
  });

  return habitablePlanets.map((planet: Planet) =>
    _.pick(planet, [
      "kepler_name",
      "koi_prad",
      "koi_smass",
      "koi_srad",
      "koi_steff",
    ])
  );
}
