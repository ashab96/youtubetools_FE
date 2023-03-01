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
        <title>Get a List of YouTube Trending Videos Based on Keyword</title>
        <meta
          content="A free tool that lets you obtain  the trending YouTube Videos List Based on the keyword. Give it a try! "
          name="description"
        ></meta>
        <meta
          content="A free tool that lets you obtiain the trending YouTube Videos List Based on the keyword. Give it a try! "
          property="og:title"
        ></meta>
        <meta
          content="A free tool that lets you obtiain the trending YouTube Videos List Based on the keyword. Give it a try! "
          property="og:description"
        ></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Tools For Youtubers"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/favicon.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="Trending Videos" />
        <TrendingVideosGenerator />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default TrendingVideos;
