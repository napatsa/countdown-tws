import React from "react";

function HawksNest() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100vh]">
      <div className="relative bg-black bg-opacity-50 p-[50px] max-w-[600px]">
        <div
          className="absolute top-[-43px] left-[10px] text-[50px] mb-9"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
        >
          Hawk&rsquo;s Nest
        </div>
        <b>ลักษณะ</b> : หมู่บ้านสูงบนเนินเขา สามารถมองเห็นศัตรูจากระยะไกล
        <br />
        <br />
        <b>อดีต</b> : จุดเฝ้าระวังของทหารที่ถูกชาวบ้านเข้ายึดครอง
        <br />
        <br />
        <b>ผู้คน</b> : นักแม่นปืน, นักล่าสัตว์, คนเฝ้าชายแดน
        <br />
        <br />
        <b>จุดเด่น</b> : เหมาะสำหรับสไนเปอร์และการสอดแนม มีระบบเฝ้าระวังขั้นสูง
        เส้นทางเข้าออกถูกควบคุมอย่างแน่นหนา
        <br />
        <br />
        <b>จุดอ่อน</b> : ทรัพยากรน้อย ต้องแลกเปลี่ยนกับคนอื่น
        มักถูกปิดล้อมเวลาสงคราม
      </div>
    </div>
  );
}

export default HawksNest;
