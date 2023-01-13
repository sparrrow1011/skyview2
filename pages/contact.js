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

export default function Services({ isVisible }) {
  const isPresent = useIsPresent();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 300
  };

  const [openModal, setOpenModal] = useState(false);

  const isOpenModal = ()=>{
    setOpenModal(true);
  }

  const closeModal = ()=>{
    setOpenModal(false);
  }

  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }
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

        <section className="header relative items-center min-h-screen-75 ">
          <div className="flex flex-col md:flex-row mt-32 md:mt-0 min-h-screen-75 justify-between items-end container mx-auto">
            <div className="w-full md:w-10/12 px-4">
              <motion.p
                  animate={{y:0}}
                  initial={{y:"100%"}}
                  transition={{delay:.9,duration: .9, spring}}
                  className="text-6xl tangerine-font font-bold"
              >
              Contact us
              </motion.p>
              <motion.h6
                  animate={{y:0}}
                  initial={{y:"100%"}}
                  transition={{delay:1,duration: 1, spring}}
                  className="text-5xl md:text-8xl mb-1 mt-3 md:pt-22 overflow-hidden font-semibold">
                If you'd like to learn more about how we can be of service to you, get in touch.
              </motion.h6>
            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-22 pb-40 relative ">
          <motion.div animate={{y:0}}
                      initial={{y:"100%"}}
                      transition={{delay:1,duration: 1, spring}}
                      className=" ">

            <div className="justify-center overflow-hidden bg-black flex flex-wrap md:pt-32 pb-32">
              <div className="container mx-auto px-4 md:pt-22">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-6/12 px-4 pt-12">
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
                  </div>
                  <div className="w-10/12 md:w-6/12 lg:w-6/12 md:px-4 mr-auto ml-auto ">
                      <div className=" flex flex-col justify-between min-h-260-px">
                        <div className="flex-row flex justify-between">
                          <p className="py-2 px-6 md:px-10 text-xl text-white pb-16">
                            <span className="font-bold text-2xl">Address</span><br/>
                            20 N'Djamena crescent,<br/>
                            off Aminu Kano Cres, 900001,<br/>
                            Abuja, Federal Capital Territory<br/>
                          </p>
                        </div>
                        <div className="flex-row flex justify-between">
                          <p className="py-2 px-6 md:px-10 text-xl text-white pb-16">
                            <span className="font-bold text-2xl">Telephone & Email</span><br/>
                            Tel: +234 901 234 5678<br/>
                            Tel: +234 901 234 5678<br/>
                            info@skyview.com <br/>
                          </p>
                        </div>
                        <div className="flex-row flex justify-between ">
                          <p className="py-2 px-6 md:px-10 text-xl text-white pb-16">
                            Customer Service <br/>
                            info@skyview.com <br/>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="relative block py-12">
              <div ref={ref6}
                   style={{
                     transform: isInView6 ? "none" : "translateY(50px)",
                     opacity: isInView6 ? 1 : 0,
                     transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                   }}
                  className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-8/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg">
                      <div className="flex-auto p-5 lg:p-10">

                        <p className="leading-relaxed text-4xl mt-1 mb-4 font-bold">
                          You can also Complete this form and we will get back to you in 24
                          hours.
                        </p>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="full-name"
                          >
                            Full Name
                          </label>
                          <input
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Full Name"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Email"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="message"
                          >
                            Message
                          </label>
                          <textarea
                              rows="4"
                              cols="80"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                              placeholder="Type a message..."
                          />
                        </div>
                        <div className="text-center mt-6">
                          <button
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

        </section>

        <Footer />
      </motion.main>
  );
}
