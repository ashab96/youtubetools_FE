import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HomeHero from "@/components/Home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          YouTube Optimization Made Easy - Powerful Tools for Content Creators
        </title>
        <meta
          content="Optimize your YouTube content with our powerful tools. The Thumbnail Downloader, Trending Video Generator, and SEO Analyzer ,to help you create more engaging videos and attract more viewers to your channel. "
          name="description"
        ></meta>
        <meta
          content="Optimize your YouTube content with our powerful tools. The Thumbnail Downloader, Trending Video Generator, and SEO Analyzer ,to help you create more engaging videos and attract more viewers to your channel. "
          property="og:title"
        ></meta>
        <meta
          content="Optimize your YouTube content with our powerful tools. The Thumbnail Downloader, Trending Video Generator, and SEO Analyzer ,to help you create more engaging videos and attract more viewers to your channel. "
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
        <HomeHero />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
