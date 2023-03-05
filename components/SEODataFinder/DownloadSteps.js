import React from "react";
import Image from "next/image";
const DownloadSteps = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden mb-16 md:mb-20">
        <div className="container">
          <div className="-mx-4 flex  justify-content flex-col md:flex-row">
            <div className="flex flex-col items-center w-full md:w-1/3 px-4 text-center">
              <Image
                src="/images/logo/icons8-plus.svg"
                alt="logo"
                width={50}
                height={30}
                className="m-3"
              />
              <h6 className="m-1 text-md font-semibold text-black/[80%]">
                Add YouTube Video URL
              </h6>
              <p className=" text-md  text-black/[80%]">
                Just add the YouTube video URL in the corresponding field.
              </p>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/3 px-4 text-center mt-8 md:mt-0">
              <Image
                src="/images/logo/icons8-circled-right.png"
                alt="logo"
                width={50}
                height={30}
                className="m-3"
              />
              <h6 className="m-1 text-md font-semibold text-black/[80%]">
                Generate
              </h6>
              <p className=" text-md  text-black/[80%]">
                The YouTube video title and description will be generated on
                submiting the extract data button.
              </p>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/3 px-4 text-center mt-8 md:mt-0">
              <Image
                src="/images/logo/icons8-work-authorisation.png"
                alt="logo"
                width={50}
                height={30}
                className="m-3"
              />
              <h6 className="m-1 text-md font-semibold text-black/[80%]">
                Copy to Clipboard
              </h6>
              <p className=" text-md  text-black/[80%]">
                Hit the copy to clipboard to copy title and description to
                clipboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadSteps;
