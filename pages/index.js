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
          Create Winning Videos with Free YouTube Tools | Thumbnail Downloader,
          SEO Data Extractor, Trending Videos Extractor
        </title>
        <meta
          content="Free essential tools for YouTubers: Thumbnail downloader, Title and Description Extractor, Tags Extractor and trending videos extractor. Try them out now!"
          name="description"
        ></meta>
        <meta
          content="Free essential tools for YouTubers: Thumbnail downloader, Title and Description Extractor, Tags Extractor and trending videos extractor. Try them out now!"
          property="og:title"
        ></meta>
        <meta
          content="Free essential tools for YouTubers: Thumbnail downloader, Title and Description Extractor, Tags Extractor and trending videos extractor. Try them out now!"
          property="og:description"
        ></meta>
        <meta content="/images/logo/favicon.png" property="og:image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="Free essential tools for YouTubers: Thumbnail downloader, Title and Description Extractor, Tags Extractor and trending videos extractor. Try them out now!"
        ></meta>
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
