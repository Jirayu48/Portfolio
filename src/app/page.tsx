"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <h1>ระบบ Portfolio TCAS</h1>

      <div>
        <Link href="/student" className="btn btn-primary">
          📋 ดูรายชื่อนักเรียน
        </Link>

        <Link href="/student" className="btn btn-primary">
          ➕ เพิ่ม Portfolio นักเรียน
        </Link>
      </div>
    </div>
  );
}