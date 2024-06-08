import React, { useState } from "react";

import Alert from "../Components/Alert";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logoBlack.png";
import axiosInstanceToApi from "../api/networking";
import { Link } from "react-router-dom";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axiosInstanceToApi.post("/session/", {
        email: email,
        password: password,
      });
      setLoading(false);
      if (response.data) {
        localStorage.setItem("jwt", response.data);
        navigate(`/Home/${response.data}`);
      } else {
        setShowAlert(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-screen">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <div style={{ marginBottom: "10%" }}>
                <img src={Logo} style={{ borderRadius: "20px" }} />
              </div>

              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in to SeriesSpot
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Start for free today{" "}
                <Link
                  to="/register" // Asigură-te că ruta este corectă
                  className="font-medium text-orange-600 transition-all duration-200 hover:text-orange-700 hover:underline focus:text-orange-700"
                >
                  Create an account
                </Link>
              </p>
              {showAlert && (
                <Alert
                  message="Error...Please try again."
                  onClose={() => setShowAlert(false)}
                />
              )}
              <form onSubmit={handleSubmit} method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-orange-600 focus:bg-white caret-orange-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-orange-600 focus:bg-white caret-orange-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-md focus:outline-none hover:bg-orange-700 focus:bg-orange-700"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3"></div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img
                className="w-full mx-auto"
                src="media/Endpoint-cuate.svg"
                alt=""
              />

              <div className="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 className="text-2xl font-bold text-center text-black">
                  Discover and Enjoy Your Favorite Shows and Movies!
                </h3>
                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                  Get personalized recommendations and expert reviews. Start
                  your journey with SeriesSpot today!
                </p>

                <div className="flex items-center justify-center mt-10 space-x-3">
                  <div className="bg-gray-200 rounded-full w-20 h-1.5"></div>
                  <div className="bg-orange-500 rounded-full w-12 h-1.5"></div>
                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
