/* eslint-disable react/jsx-no-target-blank */
import React, {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";

import IndexNavbar2 from "components/Navbars/IndexNavbar2.js";
import Footer from "components/Footers/Footer.js";
import {Fade, Slide, Zoom} from 'react-slideshow-image';
import {AnimatePresence, motion, useInView, useIsPresent} from 'framer-motion/dist/framer-motion';
import {Parallax, useParallax} from 'react-scroll-parallax';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const photos = [
  {
    src: "/img/gallery/IMG_4046.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4127.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/img/gallery/IMG_4128.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4143.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4145.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4146.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4153.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/img/gallery/IMG_4157.jpg",
    width: 4,
    height: 3
  },

  {
    src: "/img/gallery/IMG_4161.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4164.jpg",
    width: 4,
    height: 3
  },

  {
    src: "/img/gallery/IMG_4165.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4168.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4159.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/img/gallery/IMG_4167.jpg",
    width: 4,
    height: 3
  },

  {
    src: "/img/gallery/IMG_4171.jpg",
    width: 4,
    height: 3
  },

  {
    src: "/img/gallery/IMG_4174.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4175.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/img/gallery/IMG_4173.jpg",
    width: 1,
    height: 1
  },
];
export default function Galleries({ isVisible }) {
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
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
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
                Gallery
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

            <Gallery photos={photos} direction={"column"} columns={2} onClick={openLightbox}/>;
            <ModalGateway>
              {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                    />
                  </Modal>
              ) : null}
            </ModalGateway>
          </motion.div>
        </section>

        <Footer />
      </motion.main>
  );
}
