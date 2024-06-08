import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import axiosInstanceToApi from "../api/networking";
import Loader from "../Components/Loader";

const People = () => {
  const [peoples, setPeoples] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstanceToApi.get("/user/all");
        setLoading(false);
        if (response.status === 200) {
          setPeoples(response.data);
          console.log(response.data);
        } else {
          setPeoples(null);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !peoples) return <Loader />;

  return (
    <>
      <Nav id="1" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {peoples.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="User Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name:
                  </label>
                  <p className="bg-gray-100 p-3 rounded-md w-full text-black transition-all duration-200 border rounded-md">
                    {item.name}
                  </p>
                </div>
                <div className="p-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                  </label>
                  <p className="bg-gray-100 p-3 rounded-md w-full text-black transition-all duration-200 border rounded-md">
                    {item.email}
                  </p>
                </div>
                <div className="p-4 flex justify-between">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Add as friend
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default People;
