import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const [vehicleData, setVehicleData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  let { vin } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
      );
      const data = await response.json();

      console.log("DATA: " + data);

      setVehicleData(data.Results);
      setIsLoaded(true);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="report-title">VIN: {vin}</div>

      <div className="report-grid">
        <div className="report-grid-success">Report Sucessfull Generated</div>

        {isLoaded &&
          vehicleData.map((data, index) => {
            return (
              <div className="report-grid-data">
                {data.Variable} == {data.Value}
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Dashboard;
