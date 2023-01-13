/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

import IndexNavbar2 from "components/Navbars/IndexNavbar2.js";
import Footer from "components/Footers/Footer.js";
import {Fade, Slide, Zoom} from 'react-slideshow-image';
import {AnimatePresence, motion, useInView, useIsPresent} from 'framer-motion/dist/framer-motion';
import {Parallax, useParallax} from 'react-scroll-parallax';
import Gallery from "react-photo-gallery";
const content = [
  {
    title: "Nordic Lounge",
    description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis. ",
    number: "/img/01.png",
    button: "Read More",
    image: "/img/nordiclounge.png",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Skyview Cafe",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur.",
    number: "/img/02.png",
    button: "Discover",
    image: "/img/skyviewcafe.png",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Skyview Gym",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    number: "/img/03.png",
    button: "Buy now",
    image: "/img/skyviewgym.png",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  },
  {
    title: "Skyview restaurant",
    description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus.",
    number: "/img/04.png",
    button: "Read More",
    image: "/img/skyviewrestaurant.png",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Isokin Hall",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit.",
    number: "/img/05.png",
    button: "Discover",
    image: "/img/isokinhall.png",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Skyview Hall",
    description:
        "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo.",
    number: "/img/06.png",
    button: "Buy now",
    image: "/img/skyviewhall.png",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

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

const testimonial = [
  {
    details: "We recently stayed at one of your serviced apartments for a family vacation and were blown away by the comfort and amenities. The apartment was spacious, clean, and well-appointed, and the location was perfect for us. " +
        "We will definitely be using your company again for future trips.",
    author: "Kora Obili",
  },
  {
    details: "We recently stayed at one of your serviced apartments for a family vacation and were blown away by the comfort and amenities. The apartment was spacious, clean, and well-appointed, and the location was perfect for us. " +
        "We will definitely be using your company again for future trips.",
    author: "Abdullahi",
  },
  {
    details: "We recently stayed at one of your serviced apartments for a family vacation and were blown away by the comfort and amenities. The apartment was spacious, clean, and well-appointed, and the location was perfect for us. " +
        "We will definitely be using your company again for future trips.",
    author: "Temilade",
  },
  {
    details: "We recently stayed at one of your serviced apartments for a family vacation and were blown away by the comfort and amenities. The apartment was spacious, clean, and well-appointed, and the location was perfect for us. " +
        "We will definitely be using your company again for future trips.",
    author: "Tiwa Savage",
  },
];
const testimonial_s = {
  duration: 4000,
  autoplay: true,
  transitionDuration: 500,
  arrows: false,
  infinite: true,
  easing: "ease",
};

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

export const photos = [
  {
    src: "/img/nordic/1.png",
    width: 4,
    height: 3
  },
  {
    src: "/img/nordic/2.png",
    width: 1,
    height: 1
  },
  {
    src: "/img/nordic/3.png",
    width: 3,
    height: 4
  },
  {
    src: "/img/nordic/4.png",
    width: 3,
    height: 4
  },
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
  prevArrow: <button className="absolute top-0" style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#333"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button className="absolute top-0 left-0"style={{ ...buttonStyle2 }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#333"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>,
};


export default function Gym({ isVisible }) {
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
                Skyview Gym
              </motion.h6>
              <motion.p
                  animate={{y:0}}
                  initial={{y:"100%"}}
                  transition={{delay:1,duration: .8, spring}}
                  className="text-lg md:text-5xl mb-6">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis. </motion.p>
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

        <section className="mt-20 md:mt-20 pb-40 relative ">
          <div className="container mx-auto ">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-6/12 md:px-4 mr-auto ml-auto ">
                <Parallax
                    speed={7}
                    easing="easeInQuad">
                  <div className=" flex flex-col justify-between  min-h-160-px">
                    <h1 className="text-5xl w-6/12 md:w-8/12 font-bold">Building a Gym that Works</h1>
                    <div className="flex-row flex justify-between">
                      <p className="py-2 px-6 md:px-15 text-xl">
                        The Skyview Gym creates environments where we take training seriously and do what works so that our customers experience their most powerful selves.
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
              <div className="w-full md:w-6/12 px-4 pt-32">
                <Parallax
                    speed={-5}
                    easing="easeInQuad">
                  <Zoom {...section4_1_s} >
                    {section4_1.map((each, index) => (

                        <div className="flex flex-wrap items-end ">
                          <div
                              className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 bg-blueGray-700">
                            <img alt="..."
                                 src={each}
                                 className="w-full align-middle md:h-14" />
                          </div>
                        </div>
                    ))}
                  </Zoom>
                </Parallax>
              </div>
            </div>
          </div>
          <div className="container mx-auto pt-32">
            <div className="flex flex-wrap flex-col-reverse md:flex-row items-center">
              <div className="w-full md:w-5/12 px-4 pt-48 md:pt-0">
                <Parallax
                    speed={-5}
                    easing="easeInQuad">
                  <img alt="..."
                       src= "/img/gym/3.png"
                       className="w-full align-middle px-4 md:px-10 py-4 md:py-5" />

                </Parallax>
              </div>
              <div className="w-10/12 md:w-7/12 md:px-4 mr-auto ml-auto ">
                <Parallax
                    speed={5}
                    easing="easeInQuad">
                  <div className=" flex flex-col justify-between min-h-260-px">
                    <h1 className="text-5xl w-6/12 font-bold">Better Personal Trainer</h1>
                    <div className="flex-row flex justify-between">
                      <p className="py-2 px-6 md:px-10 text-xl">
                        We train in groups of up to four people at a time and every group has its own dedicated coach. All fitness levels are welcome and beginners are
                        encouraged to join. We proved the equipment, the programming the coaching and everything else you need to succeed. All you have to do is show up and we'll take care of the rest.
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
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
                <div className=" flex flex-col justify-between h-260-px">
                  <h1 className="text-5xl w-full md:w-8/12 font-bold">We offer up to three different meeting rooms to choose from.</h1>
                  <div className="flex-row flex justify-between">
                    <div></div>
                    <button className="bg-black text-white py-2 px-6 my-6">
                      Check for Availability
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
