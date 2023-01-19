import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
export default function () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1.35,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 418,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 345,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider1Cars = [
    {
      imgSrc: "s5-1.jpg",
      name: "Kevin M.",
      trips: "492 trips",
      joined: "Aug 2020",
      caption: "He came through for us at last minute",
      reviewDate: "Nov 2022",
      reviewedBy: "Donna S.",
    },
    {
      imgSrc: "s5-2.jpg",
      name: "Phu L",
      trips: "114 trips",
      joined: "Oct 2020",
      caption: "Awesome car and host!!!",
      reviewDate: "Nov 2022",
      reviewedBy: "June@0644 K.",
    },
    {
      imgSrc: "s5-3.jpg",
      name: "Mohamed A.",
      trips: "1,084 trips",
      joined: "Apr 2015",
      caption: "The car was in great condition and drove very well",
      reviewDate: "Nov 2022",
      reviewedBy: "Lisa S.",
    },
    {
      imgSrc: "s5-4.jpg",
      name: "Derrick H.",
      trips: "1,132 trips",
      joined: "Sep 2017",
      caption: "Best service",
      reviewDate: "Nov 2022",
      reviewedBy: "Matteo B.",
    },
    {
      imgSrc: "s5-5.jpg",
      name: "Artem S.",
      trips: "511 trips",
      joined: "Oct 2017",
      caption: "Fantastic car and amazing host. ",
      reviewDate: "Oct 2022",
      reviewedBy: "Michael B.",
    },
    {
      imgSrc: "s5-6.jpg",
      name: "CARS From ARS ..",
      trips: "434 trips",
      joined: "Aug 2015",
      caption: "arsen will be my go to rental in LA from now on.",
      reviewDate: "Nov 2022",
      reviewedBy: "Matt L.",
    },
    {
      imgSrc: "s5-7.jpg",
      name: "Laura W.",
      trips: "338 trips",
      joined: "Jan 2018",
      caption:
        "So easy and awesome folks! The ride was perfect, highly recommended!",
      reviewDate: "Nov 2022",
      reviewedBy: "Syma M.",
    },
    {
      imgSrc: "s5-8.jpg",
      name: "Igor K.",
      trips: "462 trips",
      joined: "Nov 2020",
      caption: "Wonderful wonderful person to rent a car from!",
      reviewDate: "Sep 2022",
      reviewedBy: "Julian D.",
    },
    {
      imgSrc: "s5-9.jpg",
      name: "Ivan A.",
      trips: "4,005 trips",
      joined: "Jun 2019",
      caption: "The car has great mileage.",
      reviewDate: "Nov 2022",
      reviewedBy: "Tina L.",
    },
  ];

  return (
    <div className="mainSlider5">
      <div>
        <h2 className="slider5Heading mx-4"> Top hosts on Turo </h2>

        <Slider
          {...settings}
          className="mainSlider5"
          style={{ width: "95%", margin: "0 auto" }}
        >
          {slider1Cars.map((carItem) => {
            return (
              <div className="carDiv" key="{carItem}">
                <Card
                  className="sliderCard5"
                  id="card5"
                  style={{ width: "18rem", marginLeft: "0px" }}
                  key="{carItem}"
                >
                  <div className="wholeCard">
                    <div className="intro">
                      <div className="introImg">
                        <img src={carItem.imgSrc} alt="" />
                      </div>
                      <div className="introContent">
                        <h2>{carItem.name}</h2>
                        <h4>All-Star Host</h4>
                        <p className="tripsAndDate">
                          <span className="trips">
                            {carItem.trips}  <b>* </b>
                          </span>{" "}
                          Joined <span className="join">{carItem.joined}</span>
                        </p>
                      </div>

                      
                    </div>
                    <div className="mainReview">
                        <p className="stars">
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </p>
                        <p className="caption">{carItem.caption}</p>
                        <p className="reviewedBy"><span className="reviwerName">{carItem.reviewedBy}</span> <span className="reviewDate">{carItem.reviewDate}</span></p>
                      </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </Slider>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
