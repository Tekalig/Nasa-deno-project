import { Router } from "@oak/oak/router";
import { getHabitablePlanets } from "../controllers/planets-controller.ts";
import {
  addNewLaunch,
  deleteLaunch,
  getAllLaunches,
} from "../controllers/launches-controller.ts";

const router = new Router();

router.get("/planets", getHabitablePlanets);

router.get("/launches", getAllLaunches);
router.post("/launches", addNewLaunch);
router.delete("/launches/:id", deleteLaunch);

export default router;
