import React from "react";

function BlackRock() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100vh]">
      <div className="relative bg-black bg-opacity-50 p-[50px] max-w-[600px]">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          Ash Fall
        </div>
        ลักษณะ : เมืองร้างที่เต็มไปด้วยเขม่าถ่านและซากอาคารไฟไหม้
        <br />
        <br />
        อดีต : เคยเป็นเมืองเล็ก ๆ ที่ถูกเผาทำลายในการจลาจล <br />
        <br />
        ผู้คน : ส่วนใหญ่เป็น “ผู้รอดแบบข้างถนน” คนเร่ร่อน, คนคุกเก่า,พวกค้ายา{" "}
        <br />
        <br />
        จุดเด่น : เชี่ยวชาญการลักลอบ ยาเสพติด และตลาดมืด ใช้ระบบแลกเปลี่ยนใต้ดิน
        เป็นหลัก ซ่อนตัวเก่ง ควบคุมเส้นทางลับในเมือง <br />
        <br />
        จุดอ่อน : ขาดความสามัคคี ภายในปกครองโดย &rdquo;แก๊ง&rdquo;
        หลายกลุ่มที่ไม่ลงรอยกันเอง
      </div>
    </div>
  );
}

export default BlackRock;
