import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getThumbnailByVideoId } from "@/constant/apiUrl";
import { getDataAll } from "@/api/api";
import getVideoId from "get-video-id";

const ThumbnailGenerator = () => {
  const [isThumbnailAvailable, setisThumbnailAvailable] = useState(false);
  const [url, setUrl] = useState("");
  const [thumbnailData, setThumbnailData] = useState();
  // const [isUrlValid, setIsUrlValid] = useState(false);

  // useEffect(() =>{
  //   setIsUrlValid[false]
  // },[])

  const handleInputChange = (event) => {
    setUrl(event.target.value);
    console.log(event.target.value);
  };
  const handleFormSubmit = (event) => {
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
      // console.log(id);
      // console.log(`${getThumbnailByVideoId}?id=${id}`);
      (async () => {
        let response = await getDataAll(`${getThumbnailByVideoId}?id=${id}`);
        // console.log(response);
        if (response.res.data.data.items[0]) {
          let data = response.res.data.data.items[0];
          setisThumbnailAvailable(true);
          setThumbnailData(data.snippet.thumbnails);
          // console.log(thumbnailData);
        }
      })();
      return () => {};
    }
  };
  // console.log(thumbnailData.default.url);
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-20">
      <div className="container">
        <ToastContainer />
        <div className="-mx-4 flex flex-wrap md:justify-center">
          <div className="w-full px-4 lg:w-1/2 p-8 xl:p-11 px-[15] order-last lg:order-first bg-primary/[3%]">
            {isThumbnailAvailable ? (
              <Image
                className="border h-[380px] border-body-color w-full"
                src={thumbnailData.standard.url}
                width={140}
                height={30}
                alt="video thumbnail"
              ></Image>
            ) : (
              <div className="border h-[380px] border-body-color"></div>
            )}
          </div>
          <div className="w-full md:w-3/4 px-4 lg:w-1/2 px-[15]">
            <div
              className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8  sm:p-11 lg:p-8 xl:p-11"
              data-wow-delay=".2s"
            >
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="URL"
                  onChange={handleInputChange}
                  placeholder="Enter any YouTube Video URL"
                  className="mb-4 w-full rounded-md border-2 border-body-color border-opacity-20 py-3 px-6 text-base font-medium text-black placeholder-black/60 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="mx-auto duration-80 mb-4 cursor-pointer rounded-md border border-transparent bg-primary py-2 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-body-color hover:shadow-signUp focus-visible:shadow-none"
                />
              </form>
              {isThumbnailAvailable ? (
                <div>
                  <p className="text-center mt-3 mb-6  text-base font-medium leading-relaxed text-black">
                    Download Links are Ready
                  </p>
                  <div className="flex flex-col lg:flex-row justify-evenly mb-4 lg:mb-11">
                    <Link
                      href={thumbnailData.medium.url}
                      target="_blank"
                      className="mb-4 lg:mb-0 rounded-md border-2 border-body-color py-4 px-8 text-base text-center font-semibold text-black duration-300 ease-in-out hover:text-body-color "
                    >
                      Medium Quality
                      <br />
                      (320p)
                    </Link>
                    <Link
                      href={thumbnailData.high.url}
                      target="_blank"
                      className="rounded-md border-2 border-body-color py-4 px-8 text-base font-semibold text-black text-center duration-300 ease-in-out hover:text-body-color "
                    >
                      High Quality
                      <br />
                      (480p)
                    </Link>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-evenly">
                    <Link
                      href={thumbnailData.standard.url}
                      target="_blank"
                      className="mb-4 lg:mb-0 rounded-md border-2 border-body-color py-4 px-8 text-base font-semibold text-black text-center duration-300 ease-in-out hover:text-body-color "
                    >
                      Standard Quality
                      <br />
                      (640p)
                    </Link>
                    {thumbnailData.hasOwnProperty("maxres") ? (
                      <Link
                        href={thumbnailData.maxres.url}
                        target="_blank"
                        className="mb-4 lg:mb-0 rounded-md border-2 border-body-color py-4 px-8 text-base font-semibold text-black text-center duration-300 ease-in-out hover:text-body-color"
                      >
                        Max Resolution
                        <br />
                        (1280p)
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThumbnailGenerator;
