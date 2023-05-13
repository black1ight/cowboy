import React from "react";
import { myContext } from "../../App";
import style from "./header.module.scss";
import logoCowboy from "../../assets/logo2.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const menuRef = React.useRef();
  const { headerSticky } = React.useContext(myContext);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !event.composedPath().includes(menuRef.current)) {
        setShowMenu(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`flex justify-between items-center px-4 md:px-6 lg:px-10 h-20 ${
        headerSticky ? "sticky" : "absolute"
      } z-[50] top-0 left-0 right-0 bg-zinc-950/50 lg:bg-zink-950/20 backdrop-blur-sm`}
    >
      <Link to="/">
        <img className="w-28" src={logoCowboy} alt="logo" />
      </Link>
      {!showMenu ? (
        <svg
          onClick={() => {
            setShowMenu(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      ) : (
        <svg
          ref={menuRef}
          onClick={() => {
            setShowMenu(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      <ul
        onClick={() => {
          setShowMenu(false);
        }}
        className={`absolute right-0 ${
          !showMenu && "max-lg:translate-x-[100%]"
        } transition-transform lg:traslate-x-[100%] top-20 gap-4 p-4 flex flex-col max-lg:bg-zinc-950/80 max-lg:rounded-md max-lg:border max-lg:border-orange-950 lg:flex-row lg:justify-center lg:gap-8 lg:static`}
      >
        <li>
          <Link to="/" className={style.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/bikes" className={style.link}>
            Bikes
          </Link>
        </li>
        <li>
          <Link to="/specs" className={style.link}>
            Specs
          </Link>
        </li>
        {/* <li>
          <Link to="/test" className={style.link}>
            Test Ride
          </Link>
        </li> */}
        <li>
          <Link to="/services" className={style.link}>
            Service & Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
