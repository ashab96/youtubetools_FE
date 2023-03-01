import React, { useState } from "react";
import Image from "next/image";
import { getVideoListByKeyWord } from "@/constant/apiUrl";
import { getDataAll } from "@/api/api";

const TrendingVideosGenerator = () => {
  const [isVideosAvailable, setisVideosAvailable] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [videosData, setVideosData] = useState("");

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
    console.log("insidehandleinput");
    console.log(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("inside handlesearch");
    if (keyword) {
      (async () => {
        let response = await getDataAll(
          `${getVideoListByKeyWord}?keyword=${keyword}`
        );
        console.log(response);
        if (response.res.data.data.items) {
          let data = response.res.data.data.items;
          setisVideosAvailable(true);
          setVideosData(data);
          setVideosData(data);
        }
      })();
      return () => {};
    }
  };
  console.log(videosData);
  return (
    <section id="contact" className="overflow-hidden py-4 md:py-8 lg:py-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center item-center mb-16">
          <div className="w-full md:w-3/4 px-4 lg:w-3/5 px-[15]">
            <div
              className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-2 lg:p-4 xl:p-4"
              data-wow-delay=".2s"
            >
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="keyword"
                  onChange={handleInputChange}
                  placeholder="Enter Your Search Keyword"
                  className="mb-4 w-full rounded-md border-2 border-body-color border-opacity-20 py-3 px-6 text-base font-medium text-black placeholder-black/60 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                />
                <input
                  type="submit"
                  value="Search"
                  className="mx-auto block duration-80 mb-4 cursor-pointer rounded-md border border-transparent bg-primary py-2 px-6  text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-body-color hover:shadow-signUp focus-visible:shadow-none"
                />
              </form>
            </div>
          </div>
        </div>
        {isVideosAvailable ? (
          <div className="-mx-4 bg-primary/[5%] rounded-xl">
            <p className="mb-5 mt-2 pt-6 px-12 text-3xl font-medium leading-tight text-black dark:text-white  sm:leading-tight  md:leading-tight text-center">
              Trending Videos
            </p>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-18">
              {videosData &&
                videosData.map((video, index) => (
                  <>
                    {video.id.videoId ? (
                      <div className="px-6">
                        <p className="pb-4 font-medium text-md leading-tight text-black sm:leading-tight  md:leading-tight">
                          {video.snippet.title}
                        </p>
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        ></iframe>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default TrendingVideosGenerator;
