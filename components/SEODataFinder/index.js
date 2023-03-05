import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getThumbnailByVideoId } from "@/constant/apiUrl";
import { getDataAll } from "@/api/api";
import getVideoId from "get-video-id";
import CopyToClipboard from "../Common/CopyToClipboard";
import CopyToClipboardTag from "../Common/CopyToClipboardTag";

const SEODataFinder = () => {
  const [isSEOAvailable, setisSEOAvailable] = useState(false);
  const [url, setUrl] = useState("");
  const [seoData, setSEOData] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const youtubeRegex =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    // setIsUrlValid(youtubeRegex.test(url));

    //To fire alert If the URL is invalid
    if (!youtubeRegex.test(url)) {
      toast.error("Enter a Valid URL!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (youtubeRegex.test(url)) {
      const { id } = getVideoId(url);
      (async () => {
        let response = await getDataAll(`${getThumbnailByVideoId}?id=${id}`);
        console.log(response);
        if (response.res.data.data.items[0]) {
          let data = response.res.data.data.items[0];
          setisSEOAvailable(true);
          setSEOData(data.snippet);
          // console.log(thumbnailData);
        }
      })();
      return () => {};
    }
  };

  return (
    <section id="contact" className="overflow-hidden pt-6 md:pt-10 lg:pt-10 ">
      <div className="container">
        <ToastContainer />
        <div className="-mx-4 flex flex-wrap justify-center items-center  mb-8  lg:mb-16">
          <div className="w-full md:w-3/4 px-4 lg:w-3/5 px-[15]">
            <div
              className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8  sm:p-2 lg:p-4 xl:p-4"
              data-wow-delay=".2s"
            >
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="URL"
                  onChange={handleInputChange}
                  placeholder="Enter any YouTube Video URL"
                  className="mb-4 w-full rounded-md border-2 border-body-color border-opacity-20 py-3 px-6 text-base font-medium text-black placeholder-black/60 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none "
                />
                <input
                  type="submit"
                  value="Extract Data"
                  className="mx-auto block duration-80 md:mb-4 cursor-pointer rounded-md border border-transparent bg-primary py-2 px-6  text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-body-color hover:shadow-signUp focus-visible:shadow-none"
                />
              </form>
            </div>
          </div>
        </div>
        {isSEOAvailable ? (
          <div className="-mx-4  rounded-xl mb-16 md:mb-20">
            <p className="mb-5 md:mt-2 lg:pt-6 px-12 text-3xl font-medium leading-tight text-black  sm:leading-tight  md:leading-tight text-center">
              SEO Data of the Video
            </p>
            <div className="flex flex-col justify-center items-center">
              <div className="w-11/12 md:w-8/12 mb-4">
                <div className="flex">
                  <p className="py-4 mx-2 text-md font-medium">Title</p>
                  <CopyToClipboard textData={seoData.title} />
                </div>

                <div className="p-4 mx-2 text-md font-medium h-32 bg-primary/[8%] rounded-md mx-2 p-8 overflow-y-auto max-h-84 scrollbar ">
                  <div className=" ">{seoData.title}</div>
                </div>
              </div>
              <div className="w-11/12 md:w-8/12 mb-4">
                <div className="flex">
                  <p className="py-4 mx-2 text-md font-medium">Description</p>
                  <CopyToClipboard textData={seoData.description} />
                </div>
                <div className="h-80 bg-primary/[8%] rounded-md mx-2 p-8 overflow-y-auto max-h-96 scrollbar">
                  <div className=" ">{seoData.description}</div>
                </div>
              </div>
              {/* <div className="w-11/12 md:w-8/12 ">
                <div className="flex">
                  <p className="py-4 mx-2 text-md font-medium">Tags</p>
                  <CopyToClipboard textData={seoData.tags} />
                </div>
                <div className="h-72 bg-primary/[8%] rounded mx-2 p-8 overflow-y-auto max-h-84 scrollbar">
                  <div className=" ">
                    {seoData.hasOwnProperty("tags") ? (
                      <>
                        {seoData.tags.map((tag, index) => (
                          <div className="inline-flex bg-white  w-max custom-max-width rounded-3xl text-sm md:text-xl p-2 px-6 text-gray-800 items-center m-2 mr-0 mb-0">
                            <p id="0" className="">
                              {tag}{" "}
                            </p>
                            <CopyToClipboardTag textData={tag} />
                          </div>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default SEODataFinder;
