import React from "react";
import Logo from "../assets/logoBlack.png";
import { useNavigate } from "react-router-dom";

const PresPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  const handleAbout = () => {
    navigate("/About");
  };

  return (
    <>
      <div className="bg-gradient-to-b from-green-50 to-green-100">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  title=""
                  onClick={handleAbout}
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  About{" "}
                </a>

                <div className="w-px h-5 bg-black/20"></div>

                <a
                  title=""
                  className="text-base font-semibold text-black cursor-pointer transition-all duration-200 hover:text-opacity-80"
                  onClick={handleLogin}
                >
                  {" "}
                  Log in{" "}
                </a>

                <a
                  title=""
                  onClick={handleRegister}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                  role="button"
                >
                  {" "}
                  Try for free{" "}
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Collaborate remotely, with
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      SeriesSpot.
                    </h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  Discover your next favorite show or movie with SeriesSpot. Get
                  personalized recommendations and expert reviews for top-rated
                  films and series. Join now and elevate your viewing
                  experience!
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                    onClick={handleLogin}
                  >
                    {" "}
                    Start exploring{" "}
                  </a>
                </div>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PresPage;
