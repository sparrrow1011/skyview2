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
  return (
      <motion.main>
        <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
        />
        <AnimatePresence>
          {
              openModal &&(
                  <motion.div className="  "
                              variants={item}
                              initial={{height:0,opacity:0}}
                              animate={{height:"100vh", opacity:1}}
                              transition={{duration:.5}}
                              exit="exit"
                  >
                    <motion.div
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
                        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
                        style={{ originX: isPresent ? 0 : 1 }}
                        className="privacy-screen"
                    />
                    <div className="flex h-screen items-center justify-center">
                      <div className="max-h-260-px bg-black">
                        hello this is middle
                      </div>
                    </div>


                  </motion.div>
              )
          }
        </AnimatePresence>

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
                Services
              </motion.p>
              <motion.h6
                  animate={{y:0}}
                  initial={{y:"100%"}}
                  transition={{delay:.9,duration: .8, spring}}
                  className="text-5xl md:text-8xl mb-1 mt-3 md:pt-22 overflow-hidden font-semibold">
                Our design and development approach creates impactful, engaging brands and immersive digital experiences.
              </motion.h6>
            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-32 pb-40 relative ">
          <motion.div animate={{y:0}}
                      initial={{y:"100%"}}
                      transition={{delay:1,duration: 1, spring}}
                      className="container px-4 mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.map((each, index) => (
                        <div className="pb-16 md:pb-32">
                          <div className=" md:px-4 mr-auto ml-auto ">
                            <a href={each.user}>
                            <div className="relative min-w-0 w-full   ">
                              <div className="slide-container">
                                <div key={index} className=" max-h-260-px md:px-25">
                                  <img className="lazy" src={each.image} alt="sample"/>
                                </div>
                              </div>
                              <div className="flex flex-row bg-white">
                                <div className="-mt-8 md:-mt-0 bg-white flex flex-row px-2 min-w-240-px md:min-w-340-px ">
                                  <h6 className="text-5xl md:text-6xl mb-1 bg-white px-0 md:px-4 font-semibold w-8">
                                    {each.title}
                                  </h6>
                                </div>
                              </div>
                            </div>
                            </a>
                          </div>
                        </div>
                  ))}

              </div>

          </motion.div>
        </section>

        <Footer />
      </motion.main>
  );
}
