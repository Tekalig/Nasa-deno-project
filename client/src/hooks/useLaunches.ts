import { useCallback, useEffect, useState } from "react";
import {
  httpAbortLaunch,
  httpGetLaunches,
  httpSubmitLaunch,
} from "./requests.ts";

interface Launch {
  flightNumber: number;
  mission: string;
  rocket: string;
  target: string;
  launchDate: string;
  // Add other properties as needed
}

function useLaunches() {
  const [launches, saveLaunches] = useState<Launch[]>([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    saveLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPendingLaunch(true);
      const data = new FormData(e.currentTarget);
      const launchDate = new Date(data.get("launch-day") as string);
      const mission = data.get("mission-name") as string;
      const rocket = data.get("rocket-name") as string;
      const target = data.get("planets-selector") as string;
      const response = await httpSubmitLaunch({
        launchDate,
        mission,
        rocket,
        target,
      });

      const success = response.ok;
      if (success) {
        getLaunches();
        setTimeout(() => {
          setPendingLaunch(false);
        }, 800);
      } else {
        setPendingLaunch(false);
      }
    },
    [getLaunches],
  );

  const abortLaunch = useCallback(async (id: number) => {
    const response = await httpAbortLaunch(id);

    const success = response.ok;
    if (success) {
      getLaunches();
    } else {
      console.error("Failed to abort launch");
    }
  }, [getLaunches]);

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  };
}

export default useLaunches;
