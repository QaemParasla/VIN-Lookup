import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./vinSearchBar.css";

const VinSearchBar = () => {
  const [vin, setVIN] = useState("");
  const [redirectDashboard, setRedirectDashboard] = useState(false);

  return (
    <>
      {redirectDashboard && <Redirect to={`/dashboard/${vin}`}></Redirect>}
      <div className="form-row">
        <div className="form-group col-md-8">
          <input
            value={vin}
            type="text"
            className="form-control form-control-lg"
            id="vin"
            name="vin"
            placeholder="Enter VIN"
            onChange={(e) => setVIN(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={() => validateVIN()}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );

  function validateVIN() {
    if (vin.length === 17) {
      setRedirectDashboard(true);
    }
  }
};

export default VinSearchBar;
