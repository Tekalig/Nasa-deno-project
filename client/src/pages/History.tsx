import { useMemo } from "react";

interface Launch {
  flightNumber: number;
  launchDate: string;
  mission: string;
  rocket: string;
  customers: string[];
  upcoming: boolean;
  success: boolean;
}

interface HistoryProps {
  entered: boolean;
  launches: Launch[];
}

const History: React.FC<HistoryProps> = ({ entered, launches }) => {
  const tableBody = useMemo(() => {
    return launches
      ?.filter((launch) => !launch.upcoming)
      .map((launch) => (
        <tr key={String(launch.flightNumber)} className="hover:bg-gray-100">
          <td className="px-4 py-2">
            <span style={{ color: launch.success ? "greenyellow" : "red" }}>
              █
            </span>
          </td>
          <td className="px-4 py-2">{launch.flightNumber}</td>
          <td className="px-4 py-2">
            {new Date(launch.launchDate).toDateString()}
          </td>
          <td className="px-4 py-2">{launch.mission}</td>
          <td className="px-4 py-2">{launch.rocket}</td>
          <td className="px-4 py-2">{launch.customers?.join(", ")}</td>
        </tr>
      ));
  }, [launches]);

  return (
    <article
      id="history"
      className={`transition-opacity duration-500 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="transition-opacity duration-500 ${entered ? 'opacity-100' : 'opacity-0'}">
        <p className="mb-4 text-center text-lg font-semibold">
          History of mission launches including SpaceX launches starting from
          the year 2006.
        </p>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mission
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rocket
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customers
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableBody}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
};

export default History;
