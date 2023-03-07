import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/Common/PageTitle";
import SEODataFinder from "@/components/SEODataFinder";
import SEOToolFlow from "@/components/SEODataFinder/SEOToolFlow";
import ScrollToTop from "@/components/ScrollToTop";
const SEOData = () => {
  return (
    <>
      <Head>
        {/* <title>
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
        <link rel="icon" href="/images/logo/favicon.png" /> */}
        <title>
          YouTube Title and Description Extractor Tool | Get Insights for Your
          Video SEO
        </title>
        <meta
          name="title"
          content=" YouTube Title and Description Extractor Tool | Get Insights for Your
          Video SEO"
        />
        <meta
          name="description"
          content="Extract titles and descriptions from any YouTube video with our free tool. Analyze your competitors' strategies and improve your own video SEO!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toolsforyoutubers.info/" />
        <meta
          property="og:title"
          content=" YouTube Title and Description Extractor Tool | Get Insights for Your
          Video SEO"
        />
        <meta
          property="og:description"
          content="Extract titles and descriptions from any YouTube video with our free tool. Analyze your competitors' strategies and improve your own video SEO!"
        />
        <meta property="og:image" content="/images/logo/Logo_og.png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://toolsforyoutubers.info/"
        />
        <meta
          property="twitter:title"
          content=" YouTube Title and Description Extractor Tool | Get Insights for Your
          Video SEO"
        />
        <meta
          property="twitter:description"
          content="Extract titles and descriptions from any YouTube video with our free tool. Analyze your competitors' strategies and improve your own video SEO!"
        />
        <meta property="twitter:image" content="/images/logo/Logo_og.png" />
      </Head>
      <div>
        <Header />
        <PageTitle pageName="YouTube Title and Description Extractor" />
        <SEODataFinder />
        <SEOToolFlow />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default SEOData;
