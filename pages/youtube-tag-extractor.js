import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/Common/PageTitle";
import YoutubeTag from "@/components/TagExtractor";
import TagToolFlow from "@/components/TagExtractor/TagToolFlow";
import ScrollToTop from "@/components/ScrollToTop";

const TagExtractor = () => {
  return (
    <>
      <Head>
        <title>
          YouTube Tag Extractor Tool | Improve Your Video SEO with Relevant Tags
        </title>
        <meta
          content="Extract tags from any YouTube video and optimize your own video SEO. Our free tool helps you find relevant tags and increase your video's visibility. "
          name="description"
        ></meta>
        <meta
          content="Extract tags from any YouTube video and optimize your own video SEO. Our free tool helps you find relevant tags and increase your video's visibility. "
          property="og:title"
        ></meta>
        <meta
          content="Extract tags from any YouTube video and optimize your own video SEO. Our free tool helps you find relevant tags and increase your video's visibility. "
          property="og:description"
        ></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="Extract tags from any YouTube video and optimize your own video SEO. Our free tool helps you find relevant tags and increase your video's visibility."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/favicon.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="YouTube Tag Extractor" />
        <YoutubeTag />
        <TagToolFlow />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default TagExtractor;
