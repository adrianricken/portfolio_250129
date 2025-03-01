import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function ProjectsCarousel({ images }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-full w-full">
      <div className="w-full h-full m-auto">
        <Slider {...settings} className="z-1 h-full w-full">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full bg-white">
              <div className="w-full h-full">
                <img
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className="w-full h-full object-cover block m-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
