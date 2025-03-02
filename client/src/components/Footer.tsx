import Centered from "./Centered.tsx";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full shadow-lg">
      <Centered className="flex justify-center flex-col items-center">
        <p className="text-xs my-2">
          This site is a project for educational purposes and is not affiliated
          with NASA or SpaceX.
        </p>

        <p className="text-xs my-2 flex items-center">
          Follow us on:
          <a
            href="https://twitter.com"
            className="text-blue-400 ml-2 hover:text-blue-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            className="text-blue-600 ml-2 hover:text-blue-700"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-400 ml-2 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </p>
      </Centered>
    </footer>
  );
};

export default Footer;
