/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";

function CustomLink({ children, href, onClick }: any) {
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
          className={`w-0 h-[1px] bg-white transition-all duration-300`}
        />
      </div>
    </Link>
  );
}

export default CustomLink;
