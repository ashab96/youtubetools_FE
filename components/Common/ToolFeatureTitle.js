import React from "react";

const ToolFeatureTitle = ({ Pageh2, ToolDescription }) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden md:mb-9 mb-4">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[900px] text-center"
                data-wow-delay=".2s"
              >
                <h2 className="mb-5 text-xl font-bold leading-tight text-black  sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight text-center">
                  {Pageh2}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolFeatureTitle;
