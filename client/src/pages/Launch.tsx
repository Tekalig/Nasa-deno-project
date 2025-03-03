import { useMemo } from "react";
import Clickable from "../components/Clickable.tsx";

interface Planet {
  kepler_name: string;
}

interface LaunchProps {
  entered: boolean;
  planets: Planet[];
  submitLaunch: (event: React.FormEvent<HTMLFormElement>) => void;
  isPendingLaunch: boolean;
}

const Launch: React.FC<LaunchProps> = ({
  entered,
  planets,
  submitLaunch,
  isPendingLaunch,
}) => {
  const selectorBody = useMemo(() => {
    return planets?.map((planet) => (
      <option value={planet.kepler_name} key={planet.kepler_name}>
        {planet.kepler_name}
      </option>
    ));
  }, [planets]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      id="launch"
      className={`transition-opacity duration-500 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="mb-4 text-lg font-bold">
        Schedule a mission launch for interstellar travel to one of the Kepler
        Exoplanets.
      </h1>
      <p className="mb-4 text-md font-semibold text-gray-600">
        Only confirmed planets matching the following criteria are available for
        the earliest scheduled missions:
      </p>
      <ul className="list-disc list-inside mb-4 text-md font-semibold text-gray-600">
        <li>Planetary radius &gt; 0.5 and &lt; 1.5 times Earth's radius</li>
        <li>Stellar mass &gt; 0.78 and &lt; 1.04 times Sun's mass</li>
        <li>Stellar radius &gt; 0.99 and &lt; 1.01 times Sun's radius</li>
      </ul>

      <form
        onSubmit={submitLaunch}
        className="flex flex-col p-2 rounded-md shadow gap-6 bg-green-600"
      >
        <div className="flex flex-col">
          <label
            htmlFor="launch-day"
            className="mb-2 font-semibold text-gray-700"
          >
            Launch Date
          </label>
          <input
            type="date"
            id="launch-day"
            name="launch-day"
            min={today}
            max="2040-12-31"
            defaultValue={today}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="mission-name"
            className="mb-2 font-semibold text-gray-700"
          >
            Mission Name
          </label>
          <input
            type="text"
            id="mission-name"
            name="mission-name"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="rocket-name"
            className="mb-2 font-semibold text-gray-700"
          >
            Rocket Type
          </label>
          <input
            type="text"
            id="rocket-name"
            name="rocket-name"
            defaultValue="Explorer IS1"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="planets-selector"
            className="mb-2 font-semibold text-gray-700"
          >
            Destination Exoplanet
          </label>
          <select
            id="planets-selector"
            name="planets-selector"
            className="p-2 border border-gray-300 rounded-md text-black"
          >
            {selectorBody}
          </select>
        </div>
        <div className="flex items-center justify-center md:col-span-2">
          <Clickable>
            <button
              type="submit"
              className={`bg-green-400 p-2 rounded-md shadow-md hover:bg-green-600 shadow-green-700 ${
                isPendingLaunch ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isPendingLaunch}
            >
              Launch Mission ✔
            </button>
          </Clickable>
          {isPendingLaunch && <div className="loader small ml-4"></div>}
        </div>
      </form>
    </div>
  );
};

export default Launch;
