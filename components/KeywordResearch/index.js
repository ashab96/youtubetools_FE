import React from "react";

const KeywordReseracher = () => {
  return (
    <section id="contact" className="overflow-hidden py-4 md:py-8 lg:py-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center item-center mb-2 md:mb-6 lg:mb-16">
          <div className="w-full md:w-3/4 px-4 lg:w-3/5 px-[15]">
            <div
              className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8  sm:p-2 lg:p-4 xl:p-4"
              data-wow-delay=".2s"
            >
              <form>
                <input
                  type="text"
                  name="keyword"
                  placeholder="Enter Your Search Keyword"
                  className="mb-4 w-full rounded-md border-2 border-body-color border-opacity-20 py-3 px-6 text-base font-medium text-black placeholder-black/60 outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
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
        <div className="-mx-4">
          <div className="p-4">
            <div className="p-6 lg:flex justify-center bg-primary/20 rounded-xl">
              <div className="lg:mr-3">
                <p className="pt-4 mx-2  font-medium text-3xl tex-center">
                  Trending Video Topics
                </p>
                <div
                  className="flex bg-white  w-max custom-max-width rounded-xl text-sm md:text-xl p-2 px-6 text-black items-center m-2 mt-4 mr-0 mb-0"
                  // onClick={handleCopy}
                >
                  <p
                    id="0"
                    class="text-center w-52 md:w-[36rem] lg:w-[30rem] overflow-hidden whitespace-nowrap overflow-ellipsis"
                  >
                    Turning a Figma Design into a Real Website using HTML and
                    CSS{" "}
                  </p>
                  <img
                    src="/images/copy1.png"
                    alt=""
                    class="inline w-4 ml-1 cursor-pointer"
                    title="Copy Tag"
                  />
                </div>
                <div
                  className="flex bg-white  w-max custom-max-width rounded-xl text-sm md:text-xl p-2 px-6 text-black items-center m-2 mt-4 mr-0 mb-0"
                  // onClick={handleCopy}
                >
                  <p
                    id="0"
                    class="text-center w-52 md:w-[36rem] lg:w-[30rem] overflow-hidden whitespace-nowrap overflow-ellipsis"
                  >
                    Turning a Figma Design into a Real Website using HTML and
                    CSS{" "}
                  </p>
                  <img
                    src="/images/copy1.png"
                    alt=""
                    class="inline w-4 ml-1 cursor-pointer"
                    title="Copy Tag"
                  />
                </div>
              </div>
              <div className="">
                <p className="pt-4 mx-2  font-medium text-3xl tex-center mt-8 lg:mt-0">
                  Trending Video Searches
                </p>
                <di5
                  className="flex bg-white  w-max custom-max-width rounded-xl text-sm md:text-xl p-2 px-6 text-black items-center m-2 mt-4 mr-0 mb-0"
                  // onClick={handleCopy}
                >
                  <p
                    id="0"
                    class="text-center w-52 md:w-[36rem] lg:w-[30rem] overflow-hidden whitespace-nowrap overflow-ellipsis"
                  >
                    Turning a Figma Design into a Real Website using HTML and
                    CSS{" "}
                  </p>
                  <img
                    src="/images/copy1.png"
                    alt=""
                    class="inline w-4 ml-1 cursor-pointer"
                    title="Copy Tag"
                  />
                </di5>
                <div
                  className="flex bg-white  w-max custom-max-width rounded-xl text-sm md:text-xl p-2 px-6 text-black items-center m-2 mt-4 mr-0 mb-0"
                  // onClick={handleCopy}
                >
                  <p
                    id="0"
                    class="text-center w-52 md:w-[36rem] lg:w-[30rem] overflow-hidden whitespace-nowrap overflow-ellipsis"
                  >
                    Turning a Figma Design into a Real Website using HTML and
                    CSS{" "}
                  </p>
                  <img
                    src="/images/copy1.png"
                    alt=""
                    class="inline w-4 ml-1 cursor-pointer"
                    title="Copy Tag"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordReseracher;
