import React from "react";
import {Slide} from "react-slideshow-image";

const instagram = [
  "/img/section4-2.png",
  "/img/section4-2-1.png",
  "/img/section4-2-1.png",
  "/img/section4-2.png",
  "/img/section4-2-1.png",
  "/img/section4-2-1.png",
];
const images = [
  "/img/skyview_logo_W2.png",
];
const instagram_s = {
  slidesToShow: 6,
  duration: 4000,
  autoplay: true,
  transitionDuration: 500,
  arrows: false,
  infinite: true,
  easing: "ease",
};
const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  }
];
export default function Footer() {
  return (
      <>
        <footer className="relative bg-black  pb-6">
          <div className="mb-12">
            <Slide {...instagram_s} responsive={responsiveSettings}>
              {instagram.map((each, index) => (
                  <div className="">
                    <div
                        className="">
                      <img alt="..."
                           src={each}
                           className="w-full align-middle md:h-4 " />
                    </div>
                  </div>
              ))}
            </Slide>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-row items-center ">
                  <img alt="..."
                       src={images[0]}
                       className="w-full align-middle md:w-44 max-w-100-px " />
                  <div className="h-full text-left">
                    <h4 className="text-2xl md:text-6xl font-semibold text-white pb-4">Skyview</h4>
                    <h5 className="text-sm  md:text-lg mt-0 mb-2 text-white">
                      20 N'Djamena crescent, <br/>off Aminu Kano Cres, 900001, <br/>Abuja, Federal Capital Territory
                    </h5>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-baseline justify-end mb-6">

                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © {new Date().getFullYear()} Skyview by{" "}
                  <a
                      href="https://www.gidanka.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                  >
                    Gidanka
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
}
