import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/Common/PageTitle";
import ThumbnailGenerator from "@/components/Thumbnail";
import ThumbnailToolFlow from "@/components/Thumbnail/ThumbnailToolFlow";
import ScrollToTop from "@/components/ScrollToTop";

const Thumbnail = () => {
  return (
    <>
      <Head>
        <title>
          Download YouTube Thumbnail – YouTube Thumbnail Downloader Free
        </title>
        <meta
          content="A free tool that lets you generate the thumbnail of any YouTube video and download it to your device without registration. Give it a try! "
          name="description"
        ></meta>
        <meta
          content="A free tool that lets you generate the thumbnail of any YouTube video and download it to your device without registration. Give it a try! "
          property="og:title"
        ></meta>
        <meta
          content="A free tool that lets you generate the thumbnail of any YouTube video and download it to your device without registration. Give it a try! "
          property="og:description"
        ></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="A free tool that lets you generate the thumbnail of any YouTube video and download it to your device without registration. Give it a try!"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/favicon.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="YouTube Thumbnail Downloader" />
        <ThumbnailGenerator />
        <ThumbnailToolFlow />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Thumbnail;
