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
        <title>YouTube Video SEO Data Obtainer</title>
        <meta
          content="A free tool that lets you generate the SEO data of any YouTube video and copy it to your device in just a few seconds without registration. Give it a try! "
          name="description"
        ></meta>
        <meta
          content="A free tool that lets you generate the SEO data of any YouTube video and copy it to your device in just a few seconds without registration. Give it a try! "
          property="og:title"
        ></meta>
        <meta
          content="A free tool that lets you generate the SEO data of any YouTube video and copy it to your device in just a few seconds without registration. Give it a try! "
          property="og:description"
        ></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="A free tool that lets you generate the SEO data of any YouTube video and copy it to your device in just a few seconds without registration. Give it a try!"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/favicon.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="SEO Data Finder" />
        <SEODataFinder />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default SEOData;
