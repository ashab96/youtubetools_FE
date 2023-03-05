import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/Common/PageTitle";
import TrendingVideosGenerator from "@/components/TrendingVideos";
import ScrollToTop from "@/components/ScrollToTop";
const TrendingVideos = () => {
  return (
    <>
      <Head>
        <title>
          YouTube Trending Video Extractor Tool | Find Popular Videos in
          Real-Time
        </title>
        <meta
          content="YouTube Trending Video Extractor Tool | Discover trending videos on YouTube based on the keyword. Find popular videos and inspiration for your content."
          name="description"
        ></meta>
        <meta
          content="YouTube Trending Video Extractor Tool | Discover trending videos on YouTube based on the keyword. Find popular videos and inspiration for your content."
          property="og:title"
        ></meta>
        <meta
          content="YouTube Trending Video Extractor Tool | Discover trending videos on YouTube based on the keyword. Find popular videos and inspiration for your content."
          property="og:description"
        ></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="YouTube Trending Video Extractor Tool | Discover trending videos on YouTube based on the keyword. Find popular videos and inspiration for your content."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/favicon.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="YouTube Trending Videos" />
        <TrendingVideosGenerator />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default TrendingVideos;
