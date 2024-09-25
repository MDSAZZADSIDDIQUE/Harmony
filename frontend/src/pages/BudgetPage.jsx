import React from "react";
import Navbar from "../components/Navbar";

const BudgetPage = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/arduino-data")
      .then((response) => response.json())
      .then((data) => setData(data.feeds));
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Automated Farming Budget
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              Area
              <input type="text" className="grow" placeholder="2000 sq/ft" />
            </label>
            <div className="bg-primary-content">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Soil Moisture Monitoring </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-red-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Temperature & Humidity Monitoring
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Smart Irrigation System </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Weather Monitoring Station</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">pH Level Monitoring</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Pest Detection </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Crop Health Monitoring </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Automated Fertilizer Application{" "}
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Greenhouse Automation </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Water Quality Monitoring</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-primary">{data}</button>
          </div>
        </div>
      </div>
      <footer />
    </>
  );
};

export default BudgetPage;
