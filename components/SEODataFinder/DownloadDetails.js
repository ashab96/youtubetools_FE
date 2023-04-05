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
                YouTube is a popular site with billions of visitors each month.
                It is a great way to get your message out there and generate
                more traffic to your website or blog. However, it can be
                challenging because you need to write catchy titles and
                description for your videos in order for them to show up in
                search results. This is where the YouTube Title and Description
                Extractor comes in handy. It takes only a few milliseconds and
                it extracts the title and description from the video page URL so
                you can use it or tweak it as needed.
              </p>
              <p className="leading-8">
                This YouTube Title and Description Extractor is a free online
                tool that helps you extract the title and decription of any
                YouTube video. It's very easy to use and it can be used by
                anyone. This tool is very helpful, especially for mobile users
                who can't copy the video title and description from their
                YouTube mobile app. They can extract the title and description
                of any YouTube video using this awesome tool. All you have to do
                in order to use this tool is to copy and paste the YouTube video
                URL in the toolbox and click Extract. Once you do that, the tool
                will extract the title and description of that YouTube video and
                you can copy them easily.
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
              To get the title and description, open the video and copy the URL
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
              src="/images/steps/title_extract_demo.gif"
            />
            <p className="text-left text-lg font-normal text-black/[90%] leading-8 p-4">
              Paste the URL in the corresponding field of title and decription
              extractor, and click "Extract Data". you’ll see the title and
              description of the video generated in the window.
            </p>
          </div>
          <div className="mb-16 md:mb-20">
            <ToolFeatureTitle Pageh2="Step 3: Copy Title and Description" />
            <Image
              src="/images/steps/seo_copy.png"
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
              That’s it. You have the video title and description can tweek it
              as per the need and use it. Enjoy!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadDetails;
