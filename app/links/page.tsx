import CustomLink from "../../components/Link";
import React from "react";

function Links() {
  return (
    <div className="relative">
      <div className="h-[150px]"></div>
      <div className="relative m-auto bg-black bg-opacity-50 p-[50px] max-w-[800px] ">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          ลิงก์ที่สำคัญ
        </div>
        <CustomLink
          target="_blank"
          href="https://forms.gle/AkrpJqv93BjLHvLn6"
          className="[&>div]:!text-[16px]"
        >
          - Whitelist สำหรับกรอกข้อมูล The Wall Survival
        </CustomLink>
        <br />
        <CustomLink
          target="_blank"
          href="https://www.canva.com/design/DAGopOY-Z1M/QzRf92KI6CZmBZCdRG5Jzg/view?utm_content=DAGopOY-Z1M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
          className="[&>div]:!text-[16px]"
        >
          - Canva สำหรับการแก้ไขและใส่ข้อมูล
        </CustomLink>
        <br />
        <CustomLink
          target="_blank"
          href="https://sites.google.com/view/thewallsurvival/หนาแรก"
          className="[&>div]:!text-[16px]"
        >
          - ข้อกำหนดและเงื่อนไข
        </CustomLink>
      </div>
      <div className="h-[150px]"></div>
    </div>
  );
}

export default Links;
