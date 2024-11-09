import { Link } from "react-router-dom";
import { BsFillRocketTakeoffFill as LaunchIcon, BsFillCalendarCheckFill as UpdateIcon, BsFillClockFill as HistoryIcon, BsFillGearFill as FaviconIcon } from "react-icons/bs";
import Clickable from "./Clickable.tsx";
import Centered from "./Centered.tsx";


const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 w-full">
      <Centered className="flex flex-row items-center justify-evenly h-20" >
        <div className="flex justify-center items-center">
          <FaviconIcon className="hidden md:block h-12 w-auto mx-2 animate-spin text-yellow-200" />
          <h1 className="hidden md:block font-bold mx-2 text-2xl text-sky-600">
            NASA Mission Control
          </h1>
          <h1 className="md:hidden font-bold mx-2 text-2xl text-purple-800">
            NMc
          </h1>
        </div>
        <nav className="flex">
          <Clickable className="text-lg" >
            <div className="px-2">
              <Link className="no-underline flex flex-col justify-center items-center text-green-600" to="/launch">
                <i className="mr-2 text-xl"><LaunchIcon /></i><span className="">Launch</span>
              </Link>
            </div>
          </Clickable>
          <Clickable className="text-lg" >
            <div className="px-2">
              <Link className="no-underline flex flex-col justify-center items-center text-orange-600" to="/upcoming">
                <i className="mr-2 text-xl"><UpdateIcon /></i><span className="">Upcoming</span>
              </Link>
            </div>
          </Clickable>
          <Clickable className="text-lg" >
            <div className="px-2">
              <Link className="no-underline flex flex-col justify-center items-center text-red-600" to="/history">
                <i className="mr-2 text-xl"><HistoryIcon /></i><span className="">History</span>
              </Link>
            </div>
          </Clickable>
        </nav>
      </Centered>
    </header>
  );
};

export default Header;
