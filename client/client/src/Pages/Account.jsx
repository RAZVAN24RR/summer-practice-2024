import React, { useEffect, useState } from "react";
import axiosInstanceToApi from "../api/networking";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
import Nav from "../Components/Nav";

const Account = () => {
  const [loading, setLoading] = useState(true);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstanceToApi.get(
          `/user/${localStorage.getItem("jwt")}`
        );

        if (response.status === 200) {
          setUser(response.data.user);
          console.log(response.data);
        } else {
          console.log(response.data.user);
          setShowAlertError(true);
        }
      } catch (err) {
        console.log(err);
        setShowAlertError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const ongoing = () => {
    navigate(`/Home/${localStorage.getItem("jwt")}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <div className="container mx-auto p-4" style={{ marginTop: "5%" }}>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 py-4 bg-white text-white text-3xl text-center">
            <h2
              className="text-2xl text-gray-600 font-semibold"
              style={{ marginBottom: "20%", fontSize: "30px" }}
            >
              Account Information
            </h2>
            {showAlertError && (
              <Alert
                message="Error...Please try again."
                onClose={() => setShowAlertError(false)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Nav id="2" />
      <div className="container mx-auto p-4" style={{ marginTop: "5%" }}>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 py-4 bg-white text-white text-3xl text-center">
            <h2
              className="text-2xl text-gray-600 font-semibold"
              style={{ marginBottom: "20%", fontSize: "30px" }}
            >
              Account Information
            </h2>
            <img
              src={user.image}
              alt="Ad Image"
              className="w-full h-48 object-cover rounded-t-lg mt-5"
            />
          </div>
          {showAlertError && (
            <Alert
              message="Error...Please try again."
              onClose={() => setShowAlertError(false)}
            />
          )}
          {showAlertSuccess && (
            <Alert message="Anunt STERS." onClose={() => ongoing()} />
          )}
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <p className="bg-gray-100 p-3 rounded-md block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">
                {user.name}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <p className="bg-gray-100 p-3 rounded-md block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border rounded-md focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
