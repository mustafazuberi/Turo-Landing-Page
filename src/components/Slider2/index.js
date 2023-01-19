import React from "react";

import "./style.css";

export default function index() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div className="container">
              <div className="img">
                <img src="s2-1.jpg" alt="" />
              </div>
              <div className="content">
                <h1 className="black">
                  Find the perfect car
                  <span className="purple">
                    {" "}
                    to conquer the great outdoors    </span>
                </h1>
                <p className="contentPara">
                  Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.  </p>
                <div className="btnDiv">
                  <button className="browseCar">Browse cars</button>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item">

            <div className="container">
              <div className="img">
                <img src="s2-2.jpg" alt="" />
              </div>
              <div className="content">
                <h1 className="black">
                  Find the perfect car
                  <span className="purple">
                    {" "}
                    to unwind for the weekend
                  </span>
                </h1>
                <p className="contentPara">
                  From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.
                </p>
                <div className="btnDiv">
                  <button className="browseCar">Browse cars</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">

            <div className="container">
              <div className="img">
                <img src="s2-3.jpg" alt="" />
              </div>
              <div className="content">
                <h1 className="black">
                  Find the perfect car
                  <span className="purple">
                    {" "}
                    to upgrade your vacation plans    </span>
                </h1>
                <p className="contentPara">
                  Skip the rental car counter and find the perfect car to complement your vacation vibe.

                </p>
                <div className="btnDiv">
                  <button className="browseCar">Browse cars</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">

            <div className="container">
              <div className="img">
                <img src="s2-4.jpg" alt="" />
              </div>
              <div className="content">
                <h1 className="black">
                  Find the perfect car
                  <span className="purple">
                    {" "}
                    for scenic corners & curves    </span>
                </h1>
                <p className="contentPara">
                  Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.  </p>
                <div className="btnDiv">
                  <button className="browseCar">Browse cars</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">

            <div className="container">
              <div className="img">
                <img src="s2-5.jpg" alt="" />
              </div>
              <div className="content">
                <h1 className="black">
                  Find the perfect car
                  <span className="purple">
                    {" "}
                    to try before you buy    </span>
                </h1>
                <p className="contentPara">
                  Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.

                </p>
                <div className="btnDiv">
                  <button className="browseCar">Browse cars</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">

            <div className="container">
              <div className="img">
                <img src="s2-6.jpg" alt="" />
              </div>
              <div className="content">
                <h1 className="black">
                  Find the perfect car
                  <span className="purple">
                    {" "}
                    to unwind for the weekend
                  </span>
                </h1>
                <p className="contentPara">
                  Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.

                </p>
                <div className="btnDiv">
                  <button className="browseCar">Browse cars</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" style={{ color: 'black', marginTop: '-200px' }} type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" style={{ color: 'black', marginTop: '-200px' }} type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>













    </>
  );
}

