/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

import IndexNavbar2 from "components/Navbars/IndexNavbar2.js";
import Footer from "components/Footers/Footer.js";
import {Fade, Slide, Zoom} from 'react-slideshow-image';
import {AnimatePresence, motion, useInView, useIsPresent} from 'framer-motion/dist/framer-motion';
import {Parallax, useParallax} from 'react-scroll-parallax';
import Gallery from "react-photo-gallery";

const events = [
  {
    title: "Live Music",
    days:
        "Every Tuesdays",
    time: "8pm",
    location: "Skyview Lounge",
    image: "/img/random1.png",
  },
  {
    title: "Live Music",
    days:
        "Every Tuesdays",
    time: "8pm",
    location: "Skyview Lounge",
    image: "/img/random2.png",
  },
  {
    title: "Live Music",
    days:
        "Every Tuesdays",
    time: "8pm",
    location: "Skyview Lounge",
    image: "/img/random3.png",
  },
  {
    title: "Live Music",
    days:
        "Every Tuesdays",
    time: "8pm",
    location: "Skyview Lounge",
    image: "/img/random4.png",
  },
];

const images = [
  "/img/section4-3.png",
  "/img/first_bckgrd.png",
  "/img/second_bckgrd.png",
  "/img/third_bckgrd.png",
  "/img/instagram.png",
  "/img/facebook.png",
  "/img/email_circle.png",
  "/img/call-circle.png",
  "/img/skyview_logo_B_trans.png",
  "/img/nordiclounge.png",
  "/img/blackbg.png",
  "/img/skyview_logo_W.png",
];


const section4_1 = [
  "/img/section4-1.png",
  "/img/section4-1-2.png",
  "/img/section4-1-3.png",
];
const section4_1_s = {
  duration: 2000,
  autoplay: true,
  transitionDuration: 500,
  arrows: false,
  infinite: true,
  easing: "ease",
};

const foods = [
  {
    title: "Potatoes",
    price: "3000",
  },
  {
    title: "Chicken Salmon",
    price: "5000",
  },
  {
    title: "Greek Salad",
    price: "1000",
  },
  {
    title: "Lasagna",
    price: "3000",
  },
  {
    title: "Coleslaw",
    price: "3000",
  },
  {
    title: "Onion Rings",
    price: "3000",
  },
];

const drinks = [
  {
    title: "Soft Drink",
    price: "3000",
  },
  {
    title: "Fresh Juice",
    price: "5000",
  },
  {
    title: "Hinenken",
    price: "1000",
  },
  {
    title: "Origin",
    price: "3000",
  },
  {
    title: "Red Wine",
    price: "3000",
  },
  {
    title: "Bottled Water",
    price: "3000",
  },
];

const section4_3 = [
  "/img/section4-3.png",
  "/img/section4-3-1.png",
  "/img/section4-3-2.png",
];
const section4_3_s = {
  duration: 3000,
  autoplay: true,
  transitionDuration: 500,
  arrows: false,
  infinite: true,
  easing: "ease",
};

const properties = {
  duration: 5000,
  autoplay: true,
  transitionDuration: 1000,
  arrows: false,
  infinite: true,
  easing: "ease",
  // indicators: (i) => <div className="indicator">{i + 1}</div>
};

const buttonStyle = {
  position: "absolute",
  marginLeft: "14rem",
  marginTop: "-2rem",
  width: "20px",
  background: 'none',
  border: '0px'
};
const buttonStyle2 = {
  position: "absolute",
  marginLeft: "16rem",
  marginTop: "-2rem",
  width: "20px",
  background: 'none',
  border: '0px'
};

const services = {
  duration: 3000,
  autoplay: true,
  transitionDuration: 500,
  arrows: true,
  infinite: true,
  easing: "ease",
  prevArrow: <button className="absolute top-0" style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#333"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button className="absolute top-0 left-0"style={{ ...buttonStyle2 }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#333"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
};

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
];
const experience = {
  slidesToShow: 3,
  duration: 5000,
  autoplay: true,
  transitionDuration: 500,
  arrows: true,
  infinite: true,
  easing: "ease",
  prevArrow: <button className="absolute top-0" style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button className="absolute top-0 left-0"style={{ ...buttonStyle2 }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>,
};


export default function Hall({ isVisible }) {
  const isPresent = useIsPresent();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });
  const isInView4 = useInView(ref4, { once: false });
  const isInView5 = useInView(ref5, { once: false });
  const isInView6 = useInView(ref6, { once: false });
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 300
  };
  return (
      <motion.main>
        <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
        />
        <IndexNavbar2 fixed />

        <section className="header relative items-center h-screen ">
          <div className="flex flex-col md:flex-row mt-32 md:mt-0 min-h-screen justify-between items-end container mx-auto">
            <div className="w-full md:w-6/12 px-4">
              <motion.div
                  animate={{y:0}}
                  initial={{y:"100%"}}
                  transition={{delay:.8,duration: .8, spring}}
                  className="mt-6 pb-6">
                <Link href="/">
                  <a
                      href="#skyview"
                      className={
                        "bg-black text-white px-4 text-center py-6 text-md items-center "
                      }
                  >
                    Make Reservation
                  </a>
                </Link>
              </motion.div>
              <motion.h6
                  animate={{y:0}}
                  initial={{y:"100%"}}
                  transition={{delay:.9,duration: .8, spring}}
                  className="text-6xl md:text-10xl mb-1 mt-3 md:pt-22 overflow-hidden font-semibold">
                Isokin Hall
              </motion.h6>
              <motion.p
                  animate={{y:0}}
                  initial={{y:"100%"}}
                  transition={{delay:1,duration: .8, spring}}
                  className="text-lg md:text-5xl mb-6">Renting a hall can be a great way to host a memorable event, with the right planning and preparation. </motion.p>
            </div>
            <motion.div
                animate={{y:0}}
                initial={{y:"100%"}}
                transition={{delay:1.5,duration: .8, spring}}
                className="w-full md:w-6/12 px-4 md:pl-13 flex justify-end main-image overflow-hidden">
              <img className="lazy" src={images[0]} alt="sample"/>
            </motion.div>
          </div>
        </section>

        <section className="mt-20 pt-32 md:mt-20 pb-40 relative ">
          <div className="container mx-auto ">
            <Parallax
                speed={7}
                easing="easeInQuad">
              <div className=" flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto px-4 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-5xl font-bold">
                   Isokan Hall
                  </h3>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-16 md:pt-22">
                      <div className="md:pl-15">
                        <p className="mt-4 text-xl leading-relaxed text-blueGray-500">
                          Renting a hall can be a great option for hosting events such as weddings, parties, conferences, and more. When renting a hall, there are several factors to consider, including the size and capacity of the space, the amenities and services offered, and the cost. Many halls offer a variety of amenities such as tables, chairs,
                          lighting, and audio-visual equipment, and some may also provide catering and event planning services. All these is what we offer at ISOKIN HALL
                        </p>
                      </div>

              </div>
            </div>
            </Parallax>
          </div>

          <div className="justify-center pt-6 md:pt-12 pb-6 md:pb-20 mt-24" >
            <div className="">

              <Parallax
                  speed={4}
                  easing="easeInQuad">
                <Slide {...experience} responsive={responsiveSettings}>
                  {events.map((each, index) => (

                      <div className="flex flex-wrap items-end mx-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                          <img alt="..."
                               src={each.image}
                               className="w-full align-middle md:h-24 rounded-lg" />
                        </div>
                      </div>
                  ))}
                </Slide>
              </Parallax>

              </div>
          </div>


          <div className="container mx-auto px-4 pt-1 md:pt-32">
            <div className=" flex flex-wrap">
              <Parallax
                  speed={-3}
                  easing="easeInQuad">
                <div className=" flex flex-col justify-between min-h-260-px">
                  <h1 className="text-5xl w-full md:w-8/12 font-bold">It is important to check the availability of the date you want to rent the hall. </h1>
                  <div className="flex-row flex justify-between">
                    <div></div>
                    <button className="bg-black text-white py-2 px-6 my-6">
                      Check  for Availability
                    </button>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>

        </section>

        <Footer />
      </motion.main>
  );
}
