import React from "react";

import Logo from "../assets/logoBlack.png";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };
  const handleAddSeries = () => {
    navigate("/AddSeries");
  };
  const handlePeoplePage = () => {
    navigate("/People");
  };
  return (
    <>
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-8" src={Logo} alt="" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center cursor-pointer lg:justify-center lg:space-x-10">
              <a
                title=""
                className="text-base font-semibold text-black cursor-pointer transition-all duration-200 hover:text-opacity-80"
                onClick={handlePeoplePage}
              >
                {" "}
                Peoples{" "}
              </a>
              <a
                title=""
                className="text-base font-semibold text-black cursor-pointer transition-all duration-200 hover:text-opacity-80"
                onClick={handleAddSeries}
              >
                {" "}
                +Add Series{" "}
              </a>
              <a
                title=""
                onClick={() =>
                  props.id === "1"
                    ? navigate(`/Account/${localStorage.getItem("jwt")}`)
                    : navigate(`/Home/${localStorage.getItem("jwt")}`)
                }
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {props.id === "1" ? "Account" : "Home"}
              </a>

              <div className="w-px h-5 bg-black/20"></div>

              <a
                title=""
                className="text-base font-semibold text-black cursor-pointer transition-all duration-200 hover:text-opacity-80"
                onClick={handleLogOut}
              >
                {" "}
                Log out{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
