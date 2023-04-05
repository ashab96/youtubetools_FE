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
                YouTube Video Tags are keywords which are attached to a YouTube
                video. They are used by the YouTube engine to search and
                categorise videos and provide the user the best matching video
                based on other YouTube ranking factors.Generally, tags are an
                opportunity to increase your video content reachability,
                including your video content topics, category, and many more.
                Tags connect directly relate to the YouTube ranking.
              </p>
              <p className="leading-8">
                A YouTube Tag Extractor can be really useful to grow your
                YouTube videos. You can use it to find tags of other related
                high ranking videos and copy them to your video. This way you
                can improve the performance, views and SEO of your video, by
                making it easier findable for users. Use this YouTube Tag
                Extractor tool and enter the YouTube URL and Click "Extract
                Tags" button Extract tags of the video.
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
            <Image
              src="/images/steps/url_copy.png"
              alt="logo"
              width={512}
              height={30}
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4 border-[1.5px] border-body-color/[50%] rounded"
            />
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              To get the youtube video tags, open the video and copy the URL
              from the browser address bar. If you’re using the YouTube mobile
              app, locate the Share button and copy the URL to your clipboard.
            </p>
          </div>
          <div className="mb-16 md:mb-20">
            <ToolFeatureTitle Pageh2="Step 2: Add the URL" />
            <Image
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4  border-[1.5px] border-body-color/[50%]"
              alt="logo"
              width={512}
              height={30}
              src="/images/steps/tags_extract_demo.gif"
            />
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              Paste the URL in the corresponding field of tags extractor, and
              click "Extract Tags". you’ll see the tags of the video generated
              in the window.
            </p>
          </div>
          <div className="mb-16 md:mb-20">
            <ToolFeatureTitle Pageh2="Step 3: Copy Video Tags" />
            <Image
              src="/images/steps/tags_copy.png"
              alt="logo"
              width={512}
              height={20}
              className="w-3/4 text-center ml-auto mr-auto md:mb-4 mb-4 border-[1.5px] border-body-color/[50%] rounded"
            />
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              Now, all you need to do is hit copy yo clipboard, data will be
              saved on your device.
            </p>
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              That’s it. You have the video tags can use it as per requirement.
              Enjoy!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadDetails;
