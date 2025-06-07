/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const targetDate = new Date("2025-06-14T18:00:00");
  const [timeLeft, setTimeLeft] = useState(0);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const TimeBox = ({ label, value }: any) => (
    <div className="bg-black bg-opacity-50 px-4 py-5  shadow-md w-[200px] max-md:w-20">
      <div className="text-4xl font-bold mb-3 max-md:text-3xl max-md:mb-0">
        {value}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );

  useEffect(() => {
    // อัพเดทเวลาทุกวินาที
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft(Math.floor(distance / 1000));
      } else {
        setTimeLeft(0);
      }
    }, 1000);

    // เรียกครั้งแรกทันที
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    setTimeLeft(distance > 0 ? Math.floor(distance / 1000) : 0);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-20 overflow-hidden">
          <div
            className="flex justify-center text-[50px] font-bold mb-10 max-md:text-[28px]"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            THE WALL SURVIVAL
          </div>
          {timeLeft > 0 ? (
            <div className="flex gap-4 text-center text-white mb-12 max-md:px-[20px]">
              <TimeBox label="วัน" value={days} />
              <TimeBox label="ชั่วโมง" value={hours} />
              <TimeBox label="นาที" value={minutes} />
              <TimeBox label="วินาที" value={seconds} />
            </div>
          ) : (
            <div className="flex gap-4 text-center text-white mb-12 max-md:px-[20px]">
              <TimeBox label="วัน" value={0} />
              <TimeBox label="ชั่วโมง" value={0} />
              <TimeBox label="นาที" value={0} />
              <TimeBox label="วินาที" value={0} />
            </div>
          )}
          <div className="flex justify-center items-center">
            <Link target="_blank" href="https://discord.gg/thewallsurvivalsrp">
              <div className="border-2 max-md:border border-white flex items-center px-4 py-2 hover:bg-white hover:text-[#4e4e4e] transition-all duration-200 hover:drop-shadow-lg cursor-pointer">
                <svg
                  className="w-6 h-6  mr-2 max-md:w-5 max-md:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                </svg>
                <div className="font-bold max-md:text-[14px]">DISCORD</div>
              </div>
            </Link>

            <Link
              target="_blank"
              href="https://www.facebook.com/thewallsurvivalsrp"
              className="relative ml-[-2px]"
            >
              <div className="border-2 max-md:border border-white flex items-center px-4 py-2 hover:bg-white hover:text-[#4e4e4e] transition-all duration-200 hover:drop-shadow-lg cursor-pointer">
                <svg
                  className="w-5 h-5 mr-2 max-md:w-5 max-md:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <div className="font-bold max-md:text-[14px]">FACEBOOK</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
