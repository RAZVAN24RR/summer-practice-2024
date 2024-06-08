import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { useSearchParams } from "react-router-dom";
import Loader from "../Components/Loader";
import axiosInstanceToApi from "../api/networking";

const Home = () => {
  const [series, setSeries] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstanceToApi.get("/series/all");
        setLoading(false);
        if (response.status === 200) {
          setSeries(response.data);
          console.log(response.data);
        } else {
          setSeries(null);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const seriesData = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Breaking Bad",
      description:
        "A high school chemistry teacher turned methamphetamine producer.",
      postedBy: "John Doe",
      likes: 124,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Stranger Things",
      description: "A group of kids uncovers a secret government experiment.",
      postedBy: "Jane Smith",
      likes: 98,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "The Crown",
      description: "The story of Queen Elizabeth II.",
      postedBy: "Emily Johnson",
      likes: 87,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Breaking Bad",
      description:
        "A high school chemistry teacher turned methamphetamine producer.",
      postedBy: "John Doe",
      likes: 34,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Breaking Bad",
      description:
        "A high school chemistry teacher turned methamphetamine producer.",
      postedBy: "John Doe",
      likes: 124,
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      title: "Breaking Bad",
      description:
        "A high school chemistry teacher turned methamphetamine producer.",
      postedBy: "John Doe",
      likes: 54,
    },
  ];

  if (loading) return <Loader />;

  return (
    <>
      <Nav id="1" />
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Discover the Best Series and Movies
            </h2>
            <p className="mt-4 text-2xl font-medium">
              Curated Recommendations Just for You
            </p>

            <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md sm:w-auto hover:bg-orange-600 focus:bg-orange-600"
                role="button"
              >
                {" "}
                Start Watching Now{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white"
                role="button"
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Support
              </a>
            </div>

            <p className="mt-6 text-base text-black">
              Already have an account?{" "}
              <a
                href="#"
                title=""
                className="text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
        <div style={{ marginTop: 80 }}></div>
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl text-center mb-8">
            Series and Movies Recommendations
          </h2>
          <div style={{ marginTop: 60 }}></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {series?.map((series) => (
              <div
                key={series.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex items-center p-4 border-b">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">
                      {series.postedBy}
                    </p>
                    <p className="text-xs text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {series.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{series.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2M12 1v5m-7 7h14"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600">
                        {series.likes} likes
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        View Profile
                      </button>
                      <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="ml-2">Comment</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {seriesData.map((series) => (
              <div
                key={series.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex items-center p-4 border-b">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">
                      {series.postedBy}
                    </p>
                    <p className="text-xs text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {series.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{series.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2M12 1v5m-7 7h14"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600">
                        {series.likes} likes
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        View Profile
                      </button>
                      <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="ml-2">Comment</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
