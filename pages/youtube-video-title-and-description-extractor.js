import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/Common/PageTitle";
import SEODataFinder from "@/components/SEODataFinder";
import ScrollToTop from "@/components/ScrollToTop";
const SEOData = () => {
  return (
    <>
      <Head>
        <title>
          {" "}
          YouTube Title and Description Extractor Tool | Get Insights for Your
          Video SEO
        </title>
        <meta
          content="Extract titles and descriptions from any YouTube video with our free tool. Analyze your competitors' strategies and improve your own video SEO! "
          name="description"
        ></meta>
        <meta
          content="Extract titles and descriptions from any YouTube video with our free tool. Analyze your competitors' strategies and improve your own video SEO!"
          property="og:title"
        ></meta>
        <meta
          content="Extract titles and descriptions from any YouTube video with our free tool. Analyze your competitors' strategies and improve your own video SEO!"
          property="og:description"
        ></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="Extract titles and descriptions from any YouTube video with our free tool. Analyze your competitors' strategies and improve your own video SEO!"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/favicon.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="YouTube Title and Description Extractor" />
        <SEODataFinder />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default SEOData;
