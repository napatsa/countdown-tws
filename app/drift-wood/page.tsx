import React from "react";

function DriftWood() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100vh]">
      <div className="relative bg-black bg-opacity-50 p-[50px] max-w-[600px]">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          Drift Wood
        </div>
        <b>ลักษณะ</b> : ท่าเรือร้างที่เต็มไปด้วยซากเรือและบ้านพักผุพัง
        <br />
        <br />
        <b>อดีต</b> : เคยเป็นแหล่งขนส่งสินค้า ปัจจุบันเป็นที่พักพิงของ
        “พวกนอกกฎหมาย”
        <br />
        <br />
        <b>ผู้คน</b> : ลักลอบค้า, นักล่าเงินรางวัล, ผู้อพยพ
        <br />
        <br />
        <b>จุดเด่น</b> : มีทางลับทางน้ำ ใช้หนีหรือโจมตี
        ค้าขายกับหมู่บ้านอื่นได้เร็ว รับจ้างทุกอย่าง ไม่มีศีลธรรม
        <br />
        <br />
        <b>จุดอ่อน</b> : ถูกมองว่าไว้ใจไม่ได้ โครงสร้างสาธารณูปโภคผุพัง
        พร้อมพังทุกเวลา
      </div>
    </div>
  );
}

export default DriftWood;
