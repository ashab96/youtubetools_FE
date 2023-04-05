import React from "react";
import ToolFeatureTitle from "../Common/ToolFeatureTitle";
import Image from "next/image";

const DownloadDetails = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden mb-16 md:mb-20">
        <div className="container">
          <div className="-mx-4 flex  justify-content flex-col lg:flex-row items-center mb-16 md:mb-20">
            <div className="lg:max-w-[50%] text-center md:text-left text-lg font-normal text-black/[80%] px-[15px]">
              <p className="whitespace-pre-wrap leading-8 pb-8">
                A YouTube thumbnail is a small, clickable image that represents
                a video on the YouTube platform. It is displayed on the video
                player page, search results, and other places where YouTube
                videos are promoted. The thumbnail's main purpose is to grab the
                viewer's attention and entice them to click on the video. Very
                often you might need the thumbnail of a video separately for a
                variety of uses: to make a collage of different video thumbnails
                for your blog post, design a cover image for your channel using
                various video thumbnails, use it in a social media post in case
                it’s not generated automatically, and so on.
              </p>
              <p className="leading-8">
                In any case, it’s great to have a tool that allows quickly
                grabbing and downloading the thumbnail on your device. This
                YouTube Thumbnail Downloader does exactly that. It allows you to
                generate the thumbnail of any YouTube video and download it in
                just a few seconds. Let’s quickly go through the steps you need
                to complete to get the thumbnail on your device.
              </p>
            </div>
            <div>
              <img
                className="border-[1.5px] border-body-color/[50%] rounded mt-4 lg:mt-0"
                src="/images/steps/intro.jpg"
              ></img>
            </div>
          </div>
          <div className="mb-16 md:mb-20 ">
            <ToolFeatureTitle Pageh2="Step 1: Copy the Video URL" />
            {/* <img
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4 border-[1.5px] border-body-color/[50%] rounded"
              src="/images/steps/url_copy.png"
            /> */}
            <Image
              src="/images/steps/url_copy.png"
              alt="logo"
              width={512}
              height={30}
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4 border-[1.5px] border-body-color/[50%] rounded"
            />
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              To get the thumbnail, open the video and copy the URL from the
              browser address bar. If you’re using the YouTube mobile app,
              locate the Share button and copy the URL to your clipboard.
            </p>
          </div>
          <div className="mb-16 md:mb-20">
            <ToolFeatureTitle Pageh2="Step 2: Add the URL" />
            <Image
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4  border-[1.5px] border-body-color/[50%]"
              src="/images/steps/add_url.gif"
              alt="logo"
              width={512}
              height={30}
            />
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              Paste the URL in the corresponding field of our thumbnail
              downloader, and submit, you’ll see the thumbnail generated within
              the left-side window.
            </p>
          </div>
          <div className="mb-16 md:mb-20">
            <ToolFeatureTitle Pageh2="Step 3: Download the Thumbnail" />
            {/* <img
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4 border-[1.5px] border-body-color/[50%] rounded"
              src="/images/steps/download.png"
            /> */}
            <Image
              src="/images/steps/download.png"
              alt="logo"
              width={512}
              height={30}
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4 border-[1.5px] border-body-color/[50%] rounded"
            />
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              Now, all you need to do is hit the download button based on the
              size requirement and save the image on your device.
            </p>
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              That’s it. You have the video thumbnail and can use it anywhere.
              However, some images may be subject to copyright, so make sure to
              get this aspect sorted before using the image publicly. You might
              need to ask for the author’s permission, provide an attribution,
              and so on. Enjoy!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadDetails;
