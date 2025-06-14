/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import CustomLink from "./Link";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { loadAll } from "@tsparticles/all";
import { useClickAway } from "react-use";

function MainLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [init, setInit] = useState(false);
  const ref = useRef(null);
  const hamburgerRef = useRef(null);

  useClickAway(ref, () => {
    const hamburgerElement = hamburgerRef.current as unknown as HTMLElement;

    if (hamburgerElement && hamburgerElement.contains(event!.target as Node)) {
      return; // ไม่ทำอะไรถ้าคลิกใน hamburger
    }
    setOpen(false);
  });

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: { value: "" },
      },
      particles: {
        number: { value: 150 },
        color: { value: "#ffffff" },
        opacity: {
          value: { min: 0.1, max: 0.4 },
          random: true,
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 5 },
          random: true,
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: { min: 0.2, max: 0.8 },
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
          attract: { enable: false },
          gravity: { enable: false },
          drift: 0,
          warp: false,
        },
      },
      detectRetina: true,
    }),
    []
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const staticContent = useMemo(
    () => (
      <>
        {init && (
          <Particles
            className="z-10 absolute inset-0"
            id="tsparticles"
            options={particlesOptions as any}
          />
        )}
      </>
    ),
    [particlesOptions, init]
  );

  return (
    <div>
      {staticContent}
      <img
        src="/images/tws.png"
        alt="survival bg"
        className="z-0 fixed inset-0 w-full h-full object-cover bg-center object-cover object-top"
      />
      <div
        ref={hamburgerRef}
        id="hamburger"
        className={`z-[60] fixed bg-black ${
          open ? "bg-opacity-0" : "bg-opacity-50"
        }  top-[10px] right-[10px] flex items-center justify-between p-1 rounded-[50%] transition-all duration-100`}
      >
        <Hamburger toggled={open} toggle={setOpen} size={24} color="white" />
      </div>
      <div className="flex items-center gap-2 z-50 fixed bottom-[15px] right-[15px]">
        {/* <Link href="https://forms.gle/AkrpJqv93BjLHvLn6" target="_blank">
          <div className="cursor-pointer max-md:text-[12px] max-md:border-[1px] border-[2px] rounded-[20px] px-4 py-[6px] transition-all duration-200 hover:bg-white hover:text-[#4e4e4e]">
            # Whitelist
          </div>
        </Link> */}
      </div>
      <div
        ref={ref}
        className={`scrollbar z-50 fixed overflow-auto backdrop-blur-md bg-black bg-opacity-50 ${
          open ? "right-[0px]" : "right-[-300px]"
        } top-0 h-[100vh] w-[300px] transition-all duration-300 ease-in-out px-6 py-5`}
      >
        <div className="h-[50px]"></div>
        <CustomLink
          href="/"
          className="max-md:[&>div]:text-[18px]"
          onClick={() => setOpen(false)}
        >
          หน้าหลัก
        </CustomLink>
        <br />
        <CustomLink
          href="/intro"
          className="max-md:[&>div]:text-[18px]"
          onClick={() => setOpen(false)}
        >
          บทนำ
        </CustomLink>
        <br />
        <CustomLink
          href="/teaser"
          className="max-md:[&>div]:text-[18px]"
          onClick={() => setOpen(false)}
        >
          Teaser
        </CustomLink>
        <br />
        <div className="text-[20px] mb-5 text-[#bdbdbd] max-md:text-[18px]">
          หมู่บ้าน
        </div>
        <div className="pl-[20px]">
          <div>
            <CustomLink
              href="/black-rock"
              className="max-md:[&>div]:text-[18px]"
              onClick={() => setOpen(false)}
            >
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
            <CustomLink
              href="/dead-fields"
              className="max-md:[&>div]:text-[18px]"
              onClick={() => setOpen(false)}
            >
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
            <CustomLink
              href="/ash-fall"
              className="max-md:[&>div]:text-[18px]"
              onClick={() => setOpen(false)}
            >
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
            <CustomLink
              href="/hawks-nest"
              className="max-md:[&>div]:text-[18px]"
              onClick={() => setOpen(false)}
            >
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
            <CustomLink
              href="/drift-wood"
              className="max-md:[&>div]:text-[18px]"
              onClick={() => setOpen(false)}
            >
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
            <br />
          </div>
        </div>
        <CustomLink
          href="/links"
          className="max-md:[&>div]:text-[18px]"
          onClick={() => setOpen(false)}
        >
          รวมลิงก์สำคัญ
        </CustomLink>
        <br />
        {/* <CustomLink
          href="/news"
          className="max-md:[&>div]:text-[18px]"
          onClick={() => setOpen(false)}
        >
          ข่าวสาร
        </CustomLink>
        <br /> */}
      </div>
      <div className="absolute inset-0 z-20">{children}</div>
    </div>
  );
}

export default MainLayout;
