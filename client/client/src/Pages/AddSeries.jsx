import React, { useEffect, useState } from "react";
import axiosInstanceToApi from "../api/networking";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
import Nav from "../Components/Nav";

const AddSeries = () => {
  const [loading, setLoading] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstanceToApi.get(
          `/user/${localStorage.getItem("jwt")}`
        );
        if (response.status === 200) {
          setUser(response.data);
        } else {
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

  const ongoing = () => {
    navigate(`/Home/${localStorage.getItem("jwt")}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axiosInstanceToApi.post("/series/", {
        name: name,
        image: image,
        description: description,
        idOwner: String(user.id),
      });
      if (response.status === 201) {
        setShowAlertSuccess(true);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return <Loader />;
  }

  if (loading) return <Loader />;

  return (
    <>
      <Nav id="2" />
      <div
        style={{ marginBottom: "2.5%", marginTop: "5%", textAlign: "center" }}
      >
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl center">
          Add Serie
        </h2>
      </div>
      {showAlertSuccess && (
        <Alert message="Series created successfully!" onClose={ongoing} />
      )}
      {showAlertError && (
        <Alert
          message="Error...Please try again."
          onClose={() => setShowAlertError(false)}
        />
      )}
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "10%",
        }}
      >
        <form onSubmit={handleSubmit} method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <label className="text-base font-medium text-gray-900">
                Serie Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter the serie name"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-orange-600 focus:bg-white caret-orange-600"
                />
              </div>
            </div>

            <div>
              <label className="text-base font-medium text-gray-900">
                Description
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-orange-600 focus:bg-white caret-orange-600"
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
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-orange-600 focus:bg-white caret-orange-600"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
              >
                Add Serie
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSeries;
