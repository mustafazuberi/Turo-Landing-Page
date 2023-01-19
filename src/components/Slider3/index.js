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
    slidesToShow: 5.5 ,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 5.4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 4.8,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 4.2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 3.8,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 3.4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 565,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 515,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 418,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 2
          }
        }
      ]
  };


  const slider3Cars = [
    { imgSrc: "s3-1.png", title: "Los Angeles" },
    { imgSrc: "s3-2.png", title: "Miami" },
    { imgSrc: "s3-3.png", title: "Honolulu" },
    { imgSrc: "s3-4.png", title: "Denver" },
    { imgSrc: "s3-5.png", title: "London" },
    { imgSrc: "s3-6.png", title: "Toronto" },
    { imgSrc: "s3-7.png", title: "Jersey City" },
    { imgSrc: "s3-8.png", title: "San Francisco" },
    { imgSrc: "s3-9.png", title: "Atlanta" },
    { imgSrc: "s3-10.png", title: "Phoenix" },
    { imgSrc: "s3-11.png", title: "Orlando" },
    { imgSrc: "s3-12.png", title: "Las Vegas" },
    { imgSrc: "s3-13.png", title: "Dallas" },
    { imgSrc: "s3-14.png", title: "Washington" },
    { imgSrc: "s3-15.png", title: "Chicago" },
    { imgSrc: "s3-16.png", title: "Houston" },
    { imgSrc: "s3-17.png", title: "San Diego" },
  ];

  return (
    <div>
      <div>
      <h2 className="slider1Heading mx-4    "> Browse by destination</h2>

        <Slider {...settings} className = "mainSlider" style={{ width : '95%' , margin: '0 auto' }}>
          {slider3Cars.map((car3Item) => {
            return (
              <div className="carDiv" key = "{car3Item}">
                <Card
                className="sliderCard" id="card3"
                style={{ width: "18rem", marginLeft: "0px" }}
                key = "{carItem}"
              >
                <Card.Img variant="top" src={car3Item.imgSrc} className='cityItem' style={{color:'black'}} />
                <Card.Body>
                  <Card.Title className="titleHeading"> {car3Item.title} </Card.Title>
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
