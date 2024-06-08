import React from "react";
import Logo from "../assets/logoBlack.png";
import { useNavigate } from "react-router-dom";
import BackAboutImg from "../assets/backGroundAboutPage.png";

const About = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-white">
        <header className="">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="w-auto h-8"
                    src={Logo}
                    alt="SeriesSpot Logo"
                  />
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

              <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <div className="w-px h-5 bg-black/20"></div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  About{" "}
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      SeriesSpot.
                    </h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  SeriesSpot is your ultimate destination for discovering new TV
                  shows and movies. Our platform offers personalized
                  recommendations based on your viewing preferences, alongside
                  expert reviews to help you decide what to watch next. Join
                  SeriesSpot and elevate your entertainment experience!
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600"
                    role="button"
                    onClick={handleBack}
                  >
                    {" "}
                    Go Back{" "}
                  </a>
                </div>
              </div>

              <div>
                <img
                  className="w-full"
                  src={BackAboutImg}
                  alt="About SeriesSpot"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
