import React, { useState } from "react";
import Alert from "../Components/Alert";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logoBlack.png";
import axiosInstanceToApi from "../api/networking";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const signupUsers = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axiosInstanceToApi.post("/user/", {
        name: name,
        email: email,
        password: password,
        image: image,
      });
      console.log(response.status);
      setLoading(false);
      if (response.status === 201) {
        setShowAlertSuccess(true);
      } else {
        setShowAlertError(true);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setShowAlertError(true);
    }
  };

  const ongoing = () => {
    setShowAlertSuccess(false);
    navigate("/Login");
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
              <div style={{ marginBottom: "20%" }}>
                <img src={Logo} style={{ borderRadius: "20px" }} />
              </div>
              {showAlertError && (
                <Alert
                  message="Error...Please try again."
                  onClose={() => setShowAlertError(false)}
                />
              )}
              {showAlertSuccess && (
                <Alert
                  message="Account created, you can now log in."
                  onClose={() => ongoing()}
                />
              )}
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Register to SeriesSpot
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/Login"
                  className="font-medium text-green-600 transition-all duration-200 hover:text-green-700 hover:underline focus:text-green-700"
                >
                  Login
                </Link>
              </p>

              <form onSubmit={signupUsers} method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Full name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-green-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-green-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-green-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password Confirmation
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Verify password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-green-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Image
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleChange}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-green-600"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    >
                      Register
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
                src="{{asset('media/Programmer-bro.svg')}}"
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

                  <div className="bg-green-500 rounded-full w-12 h-1.5"></div>

                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "100px" }}></div>
    </>
  );
};

export default Register;
