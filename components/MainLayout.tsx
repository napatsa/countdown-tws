/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";

import CustomLink from "./Link";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useClickAway } from "react-use";

function MainLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <div>
      <img
        src="/images/tws.png"
        alt="survival bg"
        className="z-0 fixed inset-0 w-full h-full object-cover bg-center object-cover object-top"
      />
      <div className="z-[60] fixed top-0 right-0  flex items-center justify-between p-2">
        <Hamburger toggled={open} toggle={setOpen} size={28} color="white" />
      </div>
      <Link href="https://forms.gle/1ijSbErg8ZzAaiPD7" target="_blank">
        <div className="z-50 fixed cursor-pointer border-[2px] bottom-[20px] rounded-[20px] right-[20px] px-4 py-[6px] hover:bg-white hover:text-[#4e4e4e]">
          # Whitelist
        </div>
      </Link>
      <div
        ref={ref}
        className={`z-50 fixed overflow-auto backdrop-blur-md bg-black bg-opacity-50 ${
          open ? "right-[0px]" : "right-[-300px]"
        } top-0 h-[100vh] w-[300px] transition-all duration-300 ease-in-out px-6 py-5`}
      >
        <div className="h-[50px]"></div>
        <CustomLink href="/" onClick={() => setOpen(false)}>
          หน้าหลัก
        </CustomLink>
        <br />
        <CustomLink href="/intro" onClick={() => setOpen(false)}>
          บทนำ
        </CustomLink>
        <br />
        <div className="text-[20px] mb-5 text-[#bdbdbd]">หมู่บ้าน</div>
        <div className="pl-[20px]">
          <div>
            <CustomLink href="/black-rock" onClick={() => setOpen(false)}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                Black Rock
              </div>
            </CustomLink>
            <br />
            <CustomLink href="/dead-fields" onClick={() => setOpen(false)}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                Dead Fields
              </div>
            </CustomLink>
            <br />
            <CustomLink href="/ash-fall" onClick={() => setOpen(false)}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                Ash Fall
              </div>
            </CustomLink>
            <br />
            <CustomLink href="/hawks-nest" onClick={() => setOpen(false)}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                Hawk&apos;s Nest
              </div>
            </CustomLink>
            <br />
            <CustomLink href="/drift-wood" onClick={() => setOpen(false)}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
                Drift Wood
              </div>
            </CustomLink>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
