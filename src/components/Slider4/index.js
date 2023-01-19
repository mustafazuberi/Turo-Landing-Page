import React, { Component, useState ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
export default function () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.5 ,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 615,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 565,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 515,
          settings: {
            slidesToShow: 1.35,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 418,
          settings: {
            slidesToShow: 1.02,
            slidesToScroll: 1
          }
        }
      ]
  };


  const slider1Cars = [
    { imgSrc: "s4-1.jpg", title: "Electric" },
    { imgSrc: "s4-2.jpg", title: "Deluxe & Super Deluxe" },
    { imgSrc: "s4-3.jpg", title: "Pet-friendly" },
    { imgSrc: "s4-4.jpg", title: "Convertibles" },
    { imgSrc: "s4-5.jpg", title: "All-wheel drive" },
    { imgSrc: "s4-6.jpg", title: "Classic cars" }
  ];

  return (
    <div className="mainSlider4">
      <div>
      <h2 className="slider4Heading mx-4    "> Browse by experience</h2>

        <Slider {...settings} className = "mainSlider" style={{ width : '95%' , margin: '0 auto' }}>
          {slider1Cars.map((carItem) => {
            return (
              <div className="carDiv" key = "{carItem}">
                <Card
                className="sliderCard" id="card4"
                style={{ width: "18rem", marginLeft: "0px" }}
                key = "{carItem}"
              >
                <Card.Img variant="top" src={carItem.imgSrc} />
                <Card.Body>
                  <Card.Title className="titleHeading4"> {carItem.title} </Card.Title>
                </Card.Body>
              </Card>
              </div>
            );
          })}
        </Slider>
        <br /><br /><br /><br />
      </div>
    </div>
  );
}
