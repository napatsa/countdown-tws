"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function CustomLink({ children, href, onClick }: any) {
  const pathname = usePathname();

  return (
    <Link
      onClick={onClick}
      href={href || "/fallback"}
      className="[&:hover>div>#underline]:w-full"
    >
      <div className="w-fit text-[20px]">
        {children}
        <div
          id="underline"
          className={`h-[1px] ${
            pathname === href ? "w-full" : "w-0"
          } bg-white transition-all duration-300`}
        />
      </div>
    </Link>
  );
}

export default CustomLink;
