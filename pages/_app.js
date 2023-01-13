import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import {AnimatePresence} from 'framer-motion/dist/framer-motion';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "swiper/swiper.scss";
import "swiper/components/autoplay";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import 'react-slideshow-image/dist/styles.css';
import {ParallaxProvider} from "react-scroll-parallax";


export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (

          <ParallaxProvider>
            <Head>
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>Skyview by Gidanka</title>
              <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
            </Head>
            <Layout>
              <AnimatePresence>
              <Component {...pageProps} />
              </AnimatePresence>
            </Layout>
          </ParallaxProvider>


    );
  }
}
