/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import { useWindowSize } from "react-use";

function News() {
  const { width } = useWindowSize();
  const [posts] = useState([
    "https://www.facebook.com/thewallsurvivalsrp/posts/pfbid02EPBvD4ZRA7ZbUoUGfLx2BRWLkwGhSZaQMER851vTvnWHNu8S6CxCWjGjm9nypAeNl",
    "https://www.facebook.com/thewallsurvivalsrp/posts/pfbid0nx63EPiRqAJ64JkGhcophacxKWgPnXCTRpfMFarxsigo8Ck2oArjcpznkYvCbA9Bl",
    "https://www.facebook.com/thewallsurvivalsrp/posts/pfbid07TQUuS9dH6t9DoetXgoWM9mMqMXhSGHN5VeP1W31LPMV8SMRamcHbLxxtSpnJgmtl",
    "https://www.facebook.com/thewallsurvivalsrp/posts/pfbid0vsyJDpuPCBF2oU7YiqrQ1yCUaB3mbUVLEWtkMe5D9rSxggjhtiegh1ukqT3DaG3Wl",
  ]);

  useEffect(() => {
    // โหลด Facebook SDK
    const loadFacebookSDK = () => {
      if ((window as any).FB) {
        (window as any).FB.XFBML.parse();
        return;
      }

      // สร้าง script tag สำหรับ Facebook SDK
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        if ((window as any).FB) {
          (window as any).FB.init({
            xfbml: true,
            version: "v18.0",
          });
          (window as any).FB.XFBML.parse();
        }
      };

      document.body.appendChild(script);
    };

    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.insertBefore(fbRoot, document.body.firstChild);
    }

    loadFacebookSDK();
  }, []);

  return (
    <div className="relative">
      <div className="h-[150px]"></div>
      <div className="relative m-auto bg-black bg-opacity-50 p-[50px] max-w-[1300px]">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9 "
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          ข่าวสาร
        </div>
        <div
          className="columns-3 p-4 gap-4 max-[1299px]:columns-2 max-[870px]:columns-1"
          key={width}
        >
          {posts.map((post, index) => (
            <div key={index} className="mb-4 break-inside-avoid ">
              <div className="relative">
                <div
                  className="fb-post !flex justify-center w-full m-auto pointer-events-none"
                  data-href={post}
                  data-show-text="true"
                  data-lazy="true"
                ></div>
                <a
                  className="absolute cursor-pointer inset-0 z-20 pointer-events-auto"
                  href={post}
                  target="_blank"
                ></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[150px]"></div>
    </div>
  );
}

export default News;
