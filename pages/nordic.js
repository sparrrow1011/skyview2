/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

import IndexNavbar2 from "components/Navbars/IndexNavbar2.js";
import Footer from "components/Footers/Footer.js";
import {Fade, Slide, Zoom} from 'react-slideshow-image';
import {AnimatePresence, motion, useInView, useIsPresent} from 'framer-motion/dist/framer-motion';
import {Parallax, useParallax} from 'react-scroll-parallax';
import Gallery from "react-photo-gallery";

const images = [
  "/img/nordic1.png",
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

export default function Nordic({ isVisible }) {
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
      <motion.main


      >
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
                Nordic Lounge
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

        <section className="mt-48 md:mt-20 pb-40 relative ">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-6/12 px-4">
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

                    <div className="w-10/12 md:w-6/12 lg:w-6/12 md:px-4 mr-auto ml-auto ">
                      <Parallax
                          translateY={['-100px', '100px']}
                          scale={[0.75, 1.3]}
                          rotate={[-100, 100]}
                          easing="easeInQuad">
                        <img
                            alt="..."
                            src={images[8]}
                            className="w-full align-middle rounded-t-lg"
                        />
                      </Parallax>
                    </div>
              <div className="w-full mx-auto md:w-8/12 px-4 py-8 md:py-10 my-32 "
                   ref={ref}
                   style={{
                     transform: isInView ? "none" : "translateY(-200px)",
                     opacity: isInView ? 1 : 0,
                     transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                   }}
              >

                <Parallax
                    speed={-5}
                    easing="easeInQuad">
                <h6
                    className="text-6xl mb-1 font-semibold text-center"
                >
                  We are strategic, creative, artistic with a love for breathtaking scenery
                </h6>
                </Parallax>
              </div>

                  </div>
          </div>
          <div className="justify-center text-center bg-black pt-32  mt-24 pb-32" style={{ background: `url('/img/blackbg.png') `, backgroundColor:`#000`, backgroundSize: `cover`}}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-7/12">
                  <img alt="..."
                       src= "/img/nordic/1.png"
                       className="w-full align-middle md:h-24 px-4 py-4 md:py-5" />
                  <img alt="..."
                       src= "/img/nordic/3.png"
                       className="w-full align-middle md:h-24 px-4 py-4 md:py-5" />
                </div>
                <div className="flex flex-col w-full md:w-5/12">
                  <img alt="..."
                       src= "/img/nordic/2.png"
                       className="w-full align-middle px-4 md:px-10 py-4 md:py-5" />
                  <img alt="..."
                       src= "/img/nordic/4.png"
                       className="w-full align-middle px-4 md:px-10 py-4 md:py-5" />
                </div>
              </div>
              {/*<Gallery photos={photos} direction={"column"} columns={2} />;*/}
            </div>
          </div>


          <div className="container mx-auto px-4 pt-1 md:pt-32">
            <div className=" flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-4 md:px-4">
                <Parallax
                    speed={2}
                    easing="easeInQuad">
                  <Zoom {...section4_3_s} >
                    {section4_3.map((each, index) => (
                        <div className="flex flex-row justify-between quality-image">
                          <div
                              className="mt-6">
                            <img alt="..."
                                 src={each}
                                 className="w-full align-middle " />
                          </div>
                        </div>
                    ))}
                  </Zoom>
                </Parallax>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-16 md:pt-22">
                <Parallax
                    speed={-7}
                    easing="easeInQuad">
                  <div className=" flex flex-col justify-between min-h-260-px">
                    <h1 className="text-5xl w-6/12 font-bold">Quality from every point of view</h1>
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
          </div>

        </section>

        <Footer />
      </motion.main>
  );
}
