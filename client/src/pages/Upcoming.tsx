import { useMemo } from "react";
import Clickable from "../components/Clickable.tsx";

interface Launch {
  flightNumber: number;
  launchDate: string;
  mission: string;
  rocket: string;
  target: string;
  upcoming: boolean;
}

interface UpcomingProps {
  entered: boolean;
  launches: Launch[];
  abortLaunch: (flightNumber: number) => void;
}

const Upcoming: React.FC<UpcomingProps> = ({
  entered,
  launches,
  abortLaunch,
}) => {
  const tableBody = useMemo(() => {
    return launches
      ?.filter((launch) => launch.upcoming)
      .map((launch) => (
        <tr
          key={String(launch.flightNumber)}
          className="bg-white border-b hover:bg-gray-100"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <Clickable>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => abortLaunch(launch.flightNumber)}
              >
                ✖
              </button>
            </Clickable>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {launch.flightNumber}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {new Date(launch.launchDate).toDateString()}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {launch.mission}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {launch.rocket}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {launch.target}
          </td>
        </tr>
      ));
  }, [launches, abortLaunch]);

  return (
    <div
      id="upcoming"
      className={`transition-opacity duration-500 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="m-2">
        <p>
          Upcoming missions including both SpaceX launches and newly scheduled
          Zero to Mastery rockets.
        </p>
        <p className="text-red-600 font-semibold">
          Warning! Clicking on the ✖ aborts the mission.
        </p>
      </div>

      <div
        className={`transition-opacity duration-500 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rocket
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableBody}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
