import { useMemo } from "react";
import Clickable from "../components/Clickable.tsx";

interface Planet {
  keplerName: string;
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
      <option value={planet.keplerName} key={planet.keplerName}>
        {planet.keplerName}
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
        <li>Planetary radius &lt; 1.6 times Earth's radius</li>
        <li>
          Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11
          times Earth's value
        </li>
      </ul>

      <form
        onSubmit={submitLaunch}
        className="flex flex-col p-2 rounded-md shadow gap-6 bg-orange-400"
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
            className="p-2 border border-gray-300 rounded-md"
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
