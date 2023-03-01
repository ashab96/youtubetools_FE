import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary/10 pt-8 md:pt-8 lg:pt-8"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-5/12">
              <div className="mb-8 max-w-[360px]">
                <Link href="/" className="mb-4 inline-block">
                  <Image
                    src="images/logo/logo-1.svg"
                    alt="logo"
                    className=""
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-4 text-xs font-xs leading-relaxed text-body-color">
                  Copyright © {new Date().getFullYear()} Tools For YouTubers.
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
