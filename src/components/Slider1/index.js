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
    slidesToShow: 4.5 ,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4.3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 3.6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 615,
          settings: {
            slidesToShow: 2.6,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 565,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 515,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1.9,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 418,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 2
          }
        }
      ]
  };


  const slider1Cars = [
    { imgSrc: "s1-1.jpg", title: "Jeep" },
    { imgSrc: "s1-2.jpg", title: "Tesla" },
    { imgSrc: "s1-3.jpg", title: "Subaru" },
    { imgSrc: "s1-4.jpg", title: "Porsche" },
    { imgSrc: "s1-5.jpg", title: "BMW" },
    { imgSrc: "s1-6.jpg", title: "Mercedes-Benz" },
    { imgSrc: "s1-8.jpg", title: "Toyota" },
    { imgSrc: "s1-9.jpg", title: "Nissan" },
    { imgSrc: "s1-10.jpg", title: "Lamborghini" },
    { imgSrc: "s1-11.jpg", title: "Ford" },
  ];

  return (
    <div>
      <div>
      <h2 className="slider1Heading mx-4    "> Browse by make</h2>

        <Slider {...settings} className = "mainSlider" style={{ width : '95%' , margin: '0 auto' }}>
          {slider1Cars.map((carItem) => {
            return (
              <div className="carDiv" key = "{carItem}">
                <Card
                className="sliderCard" id="card"
                style={{ width: "18rem", marginLeft: "0px" }}
                key = "{carItem}"
              >
                <Card.Img variant="top" src={carItem.imgSrc} />
                <Card.Body>
                  <Card.Title className="titleHeading"> {carItem.title} </Card.Title>
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
