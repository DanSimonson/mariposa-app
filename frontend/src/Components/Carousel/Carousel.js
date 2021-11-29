import React from "react";
import "./Carousel.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
    // responsive: [
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 400,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  //https://res.cloudinary.com/dmglopmul/image/upload/v1623451582/projectPhotos/dossier/shop.jpg
  //https://res.cloudinary.com/dmglopmul/image/upload/v1539024962/projectPhotos/mariposaweb/code.jpg
  //mariposa spa website

  const slidesData = [
    {
      id: 1,
      title: "mariposa store",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638171619/mariposa-app/store.jpg",
    },
    {
      id: 2,
      title: "mariposa spa",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638172063/mariposa-app/spa.jpg",
    },
    {
      id: 3,
      title: "Avenger App",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638177525/mariposa-app/marvel.jpg",
    },
    {
      id: 4,
      title: "Wysiwyg Keeper",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638173254/mariposa-app/documents.jpg",
    },
    {
      id: 5,
      title: "Shining Nature",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638173583/mariposa-app/nature.jpg",
    },
    {
      id: 6,
      title: "Hangman Game",
      label: "",
      url: "https://res.cloudinary.com/dmglopmul/image/upload/v1638177702/mariposa-app/hangm.jpg",
    },
  ];

  const goToProject = (id) => {
    //.target.innerText
    console.log("slide id: ", id);
    //console.log("slidesData: ", slidesData);
    const idArr = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < idArr.length; i++) {
      if ((idArr[i] = id)) {
        console.log("id: ", id);
      }
    }
  };

  return (
    <div className="Carousel">
      <div className="slider-wrapper">
        <Slider {...settings} dots="false">
          {slidesData.map((slide) => (
            <div
              className="slick-slide"
              key={slide.id}
              onClick={() => goToProject(slide.id)}
            >
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={`${slide.url}`} />
              <label className="slick-slide-label">{slide.label}</label>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
