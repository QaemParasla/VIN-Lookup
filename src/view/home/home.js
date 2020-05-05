import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [vin, setVIN] = useState("");

  return (
    <>
      <div className="landing-page-image">
        <div className="landing-page-image-dark-overlay"></div>
        <div className="container-fluid" id="hero-content">
          <div className="col-md-12">
            <h1 className="display-4 text-center text-white py-5">
              <strong>Vehicle Identification Number Lookup</strong>
            </h1>
          </div>
          <form action="dashboard" method="GET">
            <div className="jumbotron container">
              <div className="container-fluid">
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <input
                      value={vin}
                      type="text"
                      className="form-control form-control-lg"
                      id="licence-plate"
                      name="licence-plate"
                      placeholder="Enter VIN"
                      onChange={(e) => setVIN(e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <Link to={`/dashboard/${vin}`}>
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                      >
                        Search
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <i className="fa fa-lock">
                      <small> All Searches are 100% Confidential</small>
                    </i>
                  </div>
                  <div className="col-md-3">
                    <i className="fa fa-calendar">
                      <small> Database update regularly</small>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container-fluid">
        <div className="py-5 px-5">
          <h2>
            <strong>
              PERFORM AN INSTANT VIN CHECK WITH{" "}
              <div class="text-success">VINLOOKUP.COM</div>
            </strong>
          </h2>
          <div className="lead">
            Our Comprehensive Background Report will uncover a wealth of
            information including if a person was ever Arrested, Sued, has a
            Criminal Record, filed for Bankruptcy, was Married, Divorced, owns a
            Property or a Business, has an active Warrant, served time in Jail
            and much more! We have one of the most extensive databases in the
            industry with over 2 billion records covering all 50 states.
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
