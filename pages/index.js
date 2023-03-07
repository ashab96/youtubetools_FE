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
        {/* <title>
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
        <meta
          name="google-site-verification"
          content="CN9gDdgRncyX95FmRPo4UjxrIxOq4VeCaW8z1HntMb0"
        /> */}

        <title>
          Create Winning Videos with Free YouTube Tools | Thumbnail Downloader,
          SEO Data Extractor, Trending Videos Extractor
        </title>
        <meta
          name="title"
          content=" Create Winning Videos with Free YouTube Tools | Thumbnail Downloader,
          SEO Data Extractor, Trending Videos Extractor"
        />
        <meta
          name="description"
          content="Free essential tools for YouTubers: Thumbnail downloader, Title and Description Extractor, Tags Extractor and trending videos extractor. Try them out now!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toolsforyoutubers.info/" />
        <meta
          property="og:title"
          content=" Create Winning Videos with Free YouTube Tools | Thumbnail Downloader,
          SEO Data Extractor, Trending Videos Extractor"
        />
        <meta
          property="og:description"
          content="Free essential tools for YouTubers: Thumbnail downloader, Title and Description Extractor, Tags Extractor and trending videos extractor. Try them out now!"
        />
        <meta property="og:image" content="/images/logo/favicon.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://toolsforyoutubers.info/"
        />
        <meta
          property="twitter:title"
          content=" Create Winning Videos with Free YouTube Tools | Thumbnail Downloader,
          SEO Data Extractor, Trending Videos Extractor"
        />
        <meta
          property="twitter:description"
          content="Free essential tools for YouTubers: Thumbnail downloader, Title and Description Extractor, Tags Extractor and trending videos extractor. Try them out now!"
        />
        <meta property="twitter:image" content="/images/logo/favicon.png" />
        <meta
          name="google-site-verification"
          content="CN9gDdgRncyX95FmRPo4UjxrIxOq4VeCaW8z1HntMb0"
        />
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
