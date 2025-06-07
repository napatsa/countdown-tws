import React from "react";

function BlackRock() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100vh]">
      <div className="relative bg-black bg-opacity-50 p-[50px] max-w-[600px]">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          Black Rock
        </div>
        <b>ลักษณะ</b> : ฐานทัพทหารเก่าบนหน้าผาหินดำ แข็งแกร่ง ปิดตาย
        ป้องกันแน่นหนา
        <br />
        <br />
        <b>อดีต</b> : เคยเป็นฐานลับทางทหาร ปัจจุบันกลายเป็นที่หลบภัยของเหล่าทหาร
        ผู้รอดชีวิต
        <br />
        <br />
        <b>ผู้คน</b> : มีระเบียบเคร่งครัด อยู่ภายใต้ระบบคำสั่งและยศ
        <br />
        <br />
        <b>จุดเด่น</b> : อาวุธยุทโธปกรณ์ครบมือ ระบบรักษาความปลอดภัยดีที่สุด
        มีข่าวลือว่า “วัคซีนต้นแบบ” เคยผ่านการทดลองที่นี่
        <br />
        <br />
        <b>จุดอ่อน</b> : มีศัตรูมากเพราะถูกมองว่า “ยึดอำนาจ”
        ขาดความยืดหยุ่นทางสังคม และมีความขัดแย้งภายใน
      </div>
    </div>
  );
}

export default BlackRock;
