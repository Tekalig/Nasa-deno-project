import { useCallback, useEffect, useState } from "react";
import { httpGetPlanets } from "./requests.ts";

interface Planet {
  // Define the properties of a Planet object
  name: string;
  // Add other properties as needed
}

function usePlanets() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  const getPlanets = useCallback(async () => {
    const fetchedPlanets = await httpGetPlanets();
    setPlanets(fetchedPlanets);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return planets;
}

export default usePlanets;
