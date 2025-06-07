import React from "react";

function BlackRock() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100vh]">
      <div className="relative bg-black bg-opacity-50 p-[50px] max-w-[600px]">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          Dead Fields
        </div>
        ลักษณะ : ทุ่งแห้งแล้ง เต็มไปด้วยโครงกระดูกต้นไม้และโรงนาเก่า
        <br />
        <br />
        อดีต : เคยเป็นแหล่งอาหารของทั้งภูมิภาค ก่อนจะถูกเชื้อไวรัสทำลาย <br />
        <br />
        ผู้คน : เกษตรกร, ครอบครัว, ชาวไร่ที่เปลี่ยนมาเป็นผู้รอด <br />
        <br />
        จุดเด่น : เชี่ยวชาญด้านการปลูกพืชและการเก็บเสบียง ชำนาญพื้นที่
        เปิดสงคราม กองโจรได้ดี มีแหล่งน้ำใต้ดินลับบางจุด <br />
        <br />
        จุดอ่อน : ถูกคุกคามเสมอจากกลุ่มอื่นที่ต้องการเสบียง
        มีปัญหาความขัดแย้งภายในเรื่อง การแบ่งปันทรัพยากร
      </div>
    </div>
  );
}

export default BlackRock;
