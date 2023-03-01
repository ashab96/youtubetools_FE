import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/Common/PageTitle";
import KeywordReseracher from "@/components/KeywordResearch";
import ScrollToTop from "next/script";

const Keyword = () => {
  return (
    <>
      <Head>
        <title>Youtube Tools</title>
        <meta content="Youtube Tools Data " name="description"></meta>
        <meta content="Youtube Tools Data " property="og:title"></meta>
        <meta content="Youtube Tools Data " property="og:description"></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Tools For Youtubers"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/favicon.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="Keyword Research" />
        <KeywordReseracher />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Keyword;
