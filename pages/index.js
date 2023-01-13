/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
//
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {Fade, Slide, Zoom} from 'react-slideshow-image';
import {AnimatePresence, motion, useInView, useIsPresent} from 'framer-motion/dist/framer-motion';
import {Parallax, useParallax} from 'react-scroll-parallax';
const content = [
  {
    title: "Nordic Lounge",
    description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis. ",
    number: "/img/01.png",
    button: "Read More",
    image: "/img/nordiclounge.png",
    user: "/nordic",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Skyview Cafe",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur.",
    number: "/img/02.png",
    button: "Discover",
    image: "/img/skyviewcafe.png",
    user: "/cafe",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Skyview Gym",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    number: "/img/03.png",
    button: "Buy now",
    image: "/img/skyviewgym.png",
    user: "/gym",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  },
  {
    title: "Skyview restaurant",
    description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus.",
    number: "/img/04.png",
    button: "Read More",
    image: "/img/skyviewrestaurant.png",
    user: "/restaurant",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Isokin Hall",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit.",
    number: "/img/05.png",
    button: "Discover",
    image: "/img/isokinhall.png",
    user: "/hall",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Meeting Rooms",
    description:
        "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo.",
    number: "/img/06.png",
    button: "Buy now",
    image: "/img/skyviewhall.png",
    user: "/meeting",
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

const section4_2 = [
  "/img/section4-2.png",
  "/img/section4-2-1.png",
  "/img/section4-2-1.png",
];
const section4_2_s = {
  duration: 4000,
  autoplay: true,
  transitionDuration: 500,
  arrows: false,
  infinite: true,
  easing: "ease",
};
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
      slidesToShow: 3,
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

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 300
};
export default function Index({ isVisible }) {
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
  const isInView6 = useInView(ref6, { once: true });

  return (
      <motion.main>
        <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen z-60"
        />
        <IndexNavbar fixed />

        <section className="header relative items-center h-screen ">
          <div className="flex flex-col absolute z-3 h-screen w-full justify-between">
            <div>
              <div className="flex-row flex items-center w-full justify-between ">

              </div>
            </div>
              <div className="flex-row flex items-center w-full justify-between ">
                <div className="overflow-hidden">
                  <motion.p
                      animate={{y:0}}
                      initial={{y:"100%"}}
                      transition={{delay:.6,duration: .6, spring}}

                      className="text-white pl-3 md:pl-16 text-xs md:text-lg">
                    20 N'Djamena crescent,<br/>off Aminu Kano Cres, Abuja
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                <motion.h1
                    animate={{y:0}}
                    initial={{y:"100%"}}
                    transition={{delay:.8,duration: .8}}
                    className="text-white text-center tangerine-font text-4xl md:w-84 md:text-12xl ">
                  Totality in the Sky
                </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                      animate={{y:0}}
                      initial={{y:"100%"}}
                      transition={{delay:.6,duration: .6}}
                      className="text-white text-right pr-4 md:pr-16 text-xs md:text-lg">
                  7 luxurious services<br/>
                  to be offered
                  </motion.p>
                </div>
              </div>
            <div>
              <div className="flex-row flex  items-center w-full justify-between -mt-8">
                <motion.div animate={{y:0}}
                            initial={{y:"100%"}}
                            transition={{delay:1,duration: .7}}
                            className="flex flex-row overflow-hidden gap-6 pl-3 md:pl-16">
                  <img src={images[3]}
                       className="align-middle icon-w2-px z-3"/>
                  <img src={images[4]}
                       className="align-middle icon-w2-px z-3" />
                </motion.div>
                <motion.div animate={{y:0}}
                            initial={{y:"100%"}}
                            transition={{delay:1,duration: .7}}
                            className="flex flex-row overflow-hidden gap-6 pr-4 md:pr-16">
                  <img src={images[5]}
                       className="align-middle icon-w-px z-3"/>
                  <img src={images[6]}
                       className="align-middle icon-w3-px z-3" />
                </motion.div>
              </div>
            </div>
          </div>
          <Fade {...properties}>
            <div className="each-slide">
                <img src={images[0]} />
            </div>
            <div className="each-slide">
                <img src={images[1]} />
            </div>
            <div className="each-slide">
                <img src={images[2]} />
            </div>
          </Fade>
        </section>

        <section className="mt-32 md:mt-20 pb-40 relative ">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-6/12 px-4 overflow-hidden"
                         ref={ref}
                         style={{
                           transform: isInView ? "none" : "translateY(-100px)",
                           opacity: isInView ? 1 : 0,
                           transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                         }}
                    >
                      <h6
                          className="text-6xl mb-1 font-semibold"
                      >
                        We are strategic, creative, artistic with a love for breathtaking scenery
                      </h6>
                    </div>

                    <div className="w-10/12 md:w-6/12 lg:w-6/12 md:px-4 mr-auto ml-auto ">
                      <Parallax
                          translateY={['-100px', '100px']}
                          scale={[0.75, 1.3]}
                          rotate={[-100, 100]}
                          easing="easeInQuad">
                        <img
                            alt="..."
                            src={images[7]}
                            className="w-full align-middle rounded-t-lg"
                        />
                      </Parallax>
                      {/*<motion.div  className="relative min-w-0 w-full"*/}
                      {/*     animate={{*/}
                      {/*       scale: [.9, 1.3, 1.3, .9, .9],*/}
                      {/*       rotate: [0, 0, 180, 180, 0],*/}
                      {/*       borderRadius: ["0%", "0%", "50%", "50%", "0%"]*/}
                      {/*     }}*/}
                      {/*     transition={{*/}
                      {/*       duration: 5,*/}
                      {/*       ease: "easeInOut",*/}
                      {/*       times: [0, 0.2, 0.5, 0.8, 1],*/}
                      {/*       repeat: Infinity,*/}
                      {/*       repeatDelay: 1*/}
                      {/*     }}*/}
                      {/*>*/}
                      {/*  <img*/}
                      {/*      alt="..."*/}
                      {/*      src={images[7]}*/}
                      {/*      className="w-full align-middle rounded-t-lg"*/}
                      {/*  />*/}
                      {/*</motion.div>*/}
                    </div>

                  </div>
          </div>
          <div className="container px-4 mx-auto">
            <div className="flex md:pl-20 items-center flex-row mb-24">
              <div className="bg-black w-3 h-3  mr-3"></div>
              <h1 className="text-4xl font-bold">What we offer</h1>
            </div>
            <Parallax speed={-5}>
              <Fade {...services} scale={1.4}>
              {content.map((each, index) => (
                  <div className="flex flex-wrap items-end">
                    <div className="w-full md:w-6/12 px-4 md:pl-20 flex flex-col justify-between">
                      <div ref={ref3}
                            style={{
                              transform: isInView3 ? "none" : "translateX(-50px)",
                              opacity: isInView3 ? 1 : 0,
                              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                            className="container min-h-260-px flex flex-col justify-between">
                        <div key={index} className="max-w-200-px  md:max-w-1xl">
                          <img className="lazy" src={each.number} alt="sample" />
                        </div>
                        <div>
                          <h6 className="text-6xl mb-1 font-semibold w-8">
                            {each.title}
                          </h6>
                          <p className="text-lg mb-6">{each.description}</p>
                          <div classname="mt-6">
                            <Link href={each.user} >
                              <a
                                  href="#skyview"
                                  className={
                                    "bg-black text-white px-4 text-center py-6 text-md items-center flex flex-wrap"
                                  }
                              >
                                Explore
                              </a>
                            </Link>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div className="w-10/12 md:w-6/12 lg:w-6/12 md:px-4 mr-auto ml-auto ">
                      <div className="relative min-w-0 w-full   ">
                        <div className="slide-container">
                          <div key={index} ref={ref4}
                               style={{
                                 transform: isInView4 ? "none" : "translateX(100px)",
                                 opacity: isInView4 ? 1 : 0,
                                 transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                               }} className=" max-h-260-px md:px-25">
                            <img className="lazy" src={each.image} alt="sample" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </Fade>
            </Parallax>
          </div>

          <div className="justify-center text-center overflow-hidden bg-black flex flex-wrap mt-24 pb-32" style={{ background: `url('/img/blackbg.png') `, backgroundColor:`#000`, backgroundSize: `cover`}}>
             <div ref={ref5}
                style={{
                  transform: isInView5 ? "none" : "translateY(50px)",
                  opacity: isInView5 ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className="w-full md:w-6/12 px-12 md:px-4 py-12 overflow-hidden">
              <p className="text-xl py-8 text-white">Beautiful Example Pages</p>
              <h2 className="font-semibold text-4xl text-white">Beautiful Events all days</h2>
              <p className="text-lg leading-relaxed text-white mt-4 mb-4">
                Notus NextJS is a completly new product built using our past
                experience in web templates. Take the examples we made for you and
                start playing with them.
              </p>
            </div>
          </div>
          <div ref={ref6}
               style={{
                 transform: isInView6 ? "none" : "translateY(50px)",
                 opacity: isInView6 ? 1 : 0,
                 transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
               }}
               className="-mt-24 overflow-hidden">
            <Slide {...experience} responsive={responsiveSettings}>
              {events.map((each, index) => (
                  <div className="flex flex-wrap items-end mx-4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                      <img alt="..."
                           src={each.image}
                           className="w-full align-middle md:h-14 rounded-t-lg" />
                      <blockquote className="absolute p-8  h-full w-full flex flex-col bg-gradient justify-between bottom-0">
                        <div></div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{each.title}</h4>
                          <p className="text-md font-light mt-2 text-white">
                            {each.days}, {each.time} @ {each.location}</p>
                        </div>
                      </blockquote>
                    </div>
                  </div>
              ))}
            </Slide>
          </div>

          <div>
            <div className="absolute">
              <div className=" flex ">
                <div className="w-full md:w-5/12 ml-auto px-4 md:px-4">
                  <div className="md:pr-12">

                  </div>
                </div>

                <div className="w-full md:w-6/12 mr-auto px-4 pt-16 md:pt-22">
                  <motion.div  className="relative min-w-0 w-full"
                               animate={{
                                 scale: [.9, 1.3, 1.3, .9, .9],
                                 rotate: [0, 0, 180, 180, 0],
                                 borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                               }}
                               transition={{
                                 duration: 10,
                                 ease: "easeInOut",
                                 times: [0, 0.2, 0.5, 0.8, 1],
                                 repeat: Infinity,
                                 repeatDelay: 1
                               }}
                  >
                    <img
                        alt="..."
                        src={images[7]}
                        className="w-full align-middle rounded-t-lg"
                    />
                  </motion.div>

                </div>
              </div>

            </div>
            <div className="flex h-full flex-wrap items-center mt-48 ">
              <div className="md:hidden px-4">
                <h1 className="text-3xl  font-bold w-10/12 text-bold">Quality from every point of view</h1>
                <div className="flex-row flex   justify-between">
                  <div></div>
                  <button className="bg-black text-white py-2 px-6 my-6">
                    Photo Gallery
                  </button>
                </div>
              </div>
              <div className="w-full md:w-6/12">
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
                               className="w-full align-middle md:h-24" />
                        </div>
                      </div>
                  ))}
                </Zoom>
                </Parallax>
                <Parallax
                    speed={5}
                    easing="easeInQuad">
                <Zoom {...section4_2_s} >
                  {section4_2.map((each, index) => (

                      <div className="flex flex-row justify-between ">
                        <div></div>
                        <div
                            className="">
                          <img alt="..."
                               src={each}
                               className="w-full align-middle md:h-24 md:w-84" />
                        </div>
                      </div>
                  ))}
                </Zoom>
                </Parallax>
              </div>
              <div className="w-full md:w-4/12 h-full md:pl-15 flex flex-col-reverse md:flex-col justify-between">
                <Parallax
                    speed={-9}
                    easing="easeInQuad">
                <div className="transparent md:show">
                  <h1 className="text-5xl w-10/12 font-bold">Quality from every point of view</h1>
                  <div className="flex-row flex justify-between">
                    <div></div>
                    <button className="bg-black text-white py-2 px-6 my-6">
                      Photo Gallery
                    </button>
                  </div>
                </div>
                </Parallax>
                <Parallax
                    speed={5}
                    easing="easeInQuad">
                <Zoom {...section4_3_s} >
                  {section4_3.map((each, index) => (

                      <div className="flex flex-row justify-between ">

                        <div
                            className="mt-6">
                          <img alt="..."
                               src={each}
                               className="w-full align-middle md:h-34 md:w-84" />
                        </div>
                      </div>
                  ))}
                </Zoom>
                </Parallax>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-20 md:pb-2 pt-1 md:pt-22">
            <div className=" flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-4 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-4xl font-semibold">
                    Statements from people that has experienced skyview
                  </h3>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-16 md:pt-22">
                <Slide {...testimonial_s} >
                  {testimonial.map((each, index) => (
                      <div className="md:pl-15">
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                          "{each.details}"
                        </p>
                        <h3 className="text-xl font-semibold mt-5">
                          {each.author}
                        </h3>
                      </div>
                  ))}
                </Slide>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </motion.main>
  );
}
