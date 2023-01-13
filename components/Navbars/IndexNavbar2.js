import React, {useEffect, useState} from "react";
import Link from "next/link";
import {AnimatePresence, motion, useIsPresent} from 'framer-motion/dist/framer-motion';
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import useScroll from "../useScroll";

export default function Navbar2({ visible }) {
  const isPresent = useIsPresent();
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScroll();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 250 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
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
  return (
      <>
        <nav className={navClassList.join(" z-20 ")}>
          <AnimatePresence>
            {
                open &&(
                    <motion.div className="menu_container flex justify-between"
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
                      <div className="flex justify-between container mx-auto py-8">
                        <img
                            alt="..."
                            src="/img/skyview_logo_W1.png"
                            className="max-w-100-px md:max-w-100-px"
                        />
                        <div className=" text-white  cursor-pointer" onClick={closeMenu}>

                          <motion.p
                              initial={{y:80,opacity:0}}
                              animate={{y:0, opacity:1}}
                              transition={{delay:.1}}
                              exit={{
                                opacity:0,
                                y:90,
                                transition:{
                                  ease:"easeInOut",
                                  delay:.1
                                }
                              }}
                              className="font-bold px-12 py-4 overflow-hidden">Close X</motion.p></div>
                      </div>

                      <div className="flex items-end  justify-between ">
                        <motion.div className="container flex justify-center w-6/12 md:w-7/12 flex flex-col px-4 md:pl-16">
                          <motion.a href="/"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{delay:.8}}
                                    exit={{
                                      opacity:0,
                                      y:90,
                                      transition:{
                                        ease:"easeInOut",
                                        delay:1
                                      }
                                    }}
                                    className="text-white text-center tangerine-font">
                            Home</motion.a>
                          <motion.a href="/about"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{delay:.7}}
                                    exit={{
                                      opacity:0,
                                      y:90,
                                      transition:{
                                        ease:"easeInOut",
                                        delay:.8
                                      }
                                    }}
                                    className="text-white text-center tangerine-font">
                            About</motion.a>
                          <motion.a href="/services"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{delay:.6}}
                                    exit={{
                                      opacity:0,
                                      y:90,
                                      transition:{
                                        ease:"easeInOut",
                                        delay:.6
                                      }
                                    }}
                                    className="text-white text-center tangerine-font"
                          >Services</motion.a>
                          <motion.a href="/gallery"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{delay:.5}}
                                    exit={{
                                      opacity:0,
                                      y:90,
                                      transition:{
                                        ease:"easeInOut",
                                        delay:.4
                                      }
                                    }}
                                    className="text-white text-center tangerine-font"
                          >Gallery</motion.a>
                          <motion.a href="/contact"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{delay:.4}}
                                    exit={{
                                      opacity:0,
                                      y:90,
                                      transition:{
                                        ease:"easeInOut",
                                        delay:.2
                                      }
                                    }}
                                    className="text-white text-center tangerine-font"
                          >Contact</motion.a>
                        </motion.div>
                        <div className="container flex flex-col  w-6/12 md:w-4/12 md:pr-16 pb-6">
                          <div></div>
                          <motion.div href="/"
                                      initial={{y:80,opacity:0}}
                                      animate={{y:0, opacity:1}}
                                      transition={{delay:1.1}}
                                      exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                          ease:"easeInOut",
                                          delay:1
                                        }
                                      }}

                                      className="text-white ">
                            <p className="text-white text-sm text-left font-light md:text-2xl py-4 w-8/12 md:w-8/12">20 N'Djamena crescent,
                              off Aminu Kano Cres, 900001,
                              Abuja, Federal Capital Territory</p>
                          </motion.div>
                          <motion.div href="mailto:info@skyview.com"
                                      initial={{y:80,opacity:0}}
                                      animate={{y:0, opacity:1}}
                                      transition={{delay:1}}
                                      exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                          ease:"easeInOut",
                                          delay:.8
                                        }
                                      }}>
                            <p className="text-white text-sm text-left font-light md:text-2xl py-4">info@skyview.com</p></motion.div>

                          <motion.div href="tel:2349021111119"
                                      initial={{y:80,opacity:0}}
                                      animate={{y:0, opacity:1}}
                                      transition={{delay:.9}}
                                      exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                          ease:"easeInOut",
                                          delay:.4
                                        }
                                      }}

                          ><p className="text-white text-sm text-left font-light md:text-2xl py-4">+23490 211 11119</p> </motion.div>

                        </div>
                      </div>


                    </motion.div>
                )
            }
          </AnimatePresence>
          <div className="bg-white">
            <div className="container mx-auto flex flex-row items-center justify-between py-3 navbar-expand-lg">
              <div className="flex items-center md:text-lg align-middle text-xs font-bold leading-relaxed text-black mr-4 py-2  cursor-pointer" onClick={isOpen}>
                <img
                    alt="..."
                    src="/img/menu-b.png"
                    className="max-w-20-px md:max-w-40-px mr-1 md:mr-4"
                />
                Explore Skyview

              </div>
              <div>
                <img
                    alt="..."
                    src="/img/skyview_logo_b.png"
                    className="max-w-50-px md:max-w-100-px"
                />
              </div>
              <div className="">
                <div className="flex flex-row overflow-hidden gap-6 pr-4">
                  <Link href="/">
                    <a
                        className="flex items-center  align-middle text-xs md:text-lg font-bold leading-relaxed py-2 "
                        href="#skyview"
                    >
                      <img
                          alt="..."
                          src="/img/calendar-b.png"
                          className="max-w-20-px md:max-w-40-px ml-1"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a
                        className="flex items-center  align-middle text-xs md:text-lg font-bold leading-relaxed py-2 "
                        href="#skyview"
                    >
                      <img
                          alt="..."
                          src="/img/call-circle-b.png"
                          className="max-w-20-px md:max-w-40-px ml-1"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
}
