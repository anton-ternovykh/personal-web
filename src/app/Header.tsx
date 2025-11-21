import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex space-x-4 p-4 bg-gray-800 text-white text-xl font-bold">
        <div>
          <Link to={"/about"}>About</Link>
        </div>
        <div>
          <Link to={"/resume"}>Resume</Link>
        </div>
        <div>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
