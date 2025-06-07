"use client";

import React, { useRef } from "react";

function Teaser() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative flex flex-col items-center justify-center h-[100vh]">
      <div className="relative bg-black bg-opacity-50 p-[50px] max-md:p-[30px]">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          Teaser
        </div>
        <div className="relative bg-black">
          <iframe
            ref={iframeRef}
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthewallsurvivalsrp%2Fvideos%2F9300057616767325%2F&show_text=false&width=560&t=0&autoplay=0&mute=0&volume=1"
            width="700"
            height="390"
            className="max-md:w-[300px] max-md:h-[165px] "
            style={{
              border: "none",
              overflow: "hidden",
              position: "relative",
              zIndex: 10,
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; microphone"
          />
        </div>
      </div>
    </div>
  );
}

export default Teaser;
