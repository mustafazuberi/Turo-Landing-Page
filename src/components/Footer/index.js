import React from "react";
import "./style.css";
export default function index() {
  return (
    <div>
      <div className="footer1">
        <p>
          * Any personal insurance you may have that covers damage to the host’s
          vehicle would kick in before your protection plan, except in limited
          situations for trips booked in Maryland, but this protects your own
          wallet. Liability insurance is provided under a policy issued to Turo
          by Travelers Excess and Surplus Lines Company. Terms, conditions, and
          exclusions apply. The policy does not provide coverage for damage to a
          host’s vehicle.
        </p>
        <p>
          For questions or information about the third party liability insurance
          that is included in protection plans in the US, consumers in Maryland
          and the licensed states listed here may contact Turo Insurance Agency
          at (415) 508-0283 or claims@turo.agency. For questions about how
          damage to a host’s vehicle is handled, visit the Turo{" "}
          <span style={{ color: "#593cfb" }}>Support</span> site.
        </p>
        <p>
          For questions or information about the third party liability insurance
          that is included in protection plans in the US, consumers in Maryland
          and the licensed states listed here may contact Turo Insurance Agency
          at (415) 508-0283 or claims@turo.agency. For questions about how
          damage to a host’s vehicle is handled, visit the Turo Support site.
        </p>
        <p>** Terms, conditions, and exclusions apply.</p>
      </div>

      <div>
        <footer className="bg-light text-center text-lg-start footer2">
          <div className="container p-4">
            <div className="row row2 ">
              <div className="col-lg-3 col-md-6 mb-4 mb-md  -0">
                <h5 className="footerHeading">Turo</h5>

                <ul className="list-unstyled mb-0 footer2Li">
                  <li>
                    <a href="#!" className="text-dark">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Policies
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Open road
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Turo shop
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0 footerHeading">Locations</h5>

                <ul className="list-unstyled footer2Li">
                  <li>
                    <a href="#!" className="text-dark">
                      USA (EN)
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Canada (EN)
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Canada (FR)
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      UK (EN)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase footerHeading">Explore</h5>

                <ul className="list-unstyled mb-0 footer2Li">
                  <li>
                    <a href="#!" className="text-dark">
                      Book a car
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Weddings
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Trust & safety
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Got help
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                <h5 className="text-uppercase mb-0 footerHeading">Links</h5>

                <ul className="list-unstyled footer2Li above ">
                  <li>
                    <a href="#!" className="text-dark">
                      <img className="appStore" src="appstore.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      <img
                        className="appStore"
                        style={{ marginTop: "20px", marginBottom: "20px" }}
                        src="googleplay.png"
                        alt=""
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#!" className="text-dark">
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          marginLeft: "10px",
                        }}
                        src="flag.webp"
                        alt=""
                      />{" "}
                      &nbsp; English
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
