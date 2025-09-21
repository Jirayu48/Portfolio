"use client";

import Link from "next/link";
import { useStudentStore } from "../store/studentStore";
import { useState } from "react";

export default function StudentTable() {
  const students = useStudentStore((state) => state.students);

  const [sortBy, setSortBy] = useState<"name" | "gpa">("name");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState("");

  // ✅ ค้นหา
  const filteredStudents = students.filter((s) => {
    const name = (s.firstName + " " + s.lastName).toLowerCase();
    const school = (s.school || "").toLowerCase();
    return (
      name.includes(search.toLowerCase()) ||
      school.includes(search.toLowerCase())
    );
  });

  // ✅ เรียงลำดับ
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") {
      const nameA = (a.firstName + " " + a.lastName).toLowerCase();
      const nameB = (b.firstName + " " + b.lastName).toLowerCase();
      return order === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    } else {
      const gpaA = parseFloat(a.gpa) || 0;
      const gpaB = parseFloat(b.gpa) || 0;
      return order === "asc" ? gpaA - gpaB : gpaB - gpaA;
    }
  });

  const toggleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  return (
    <div className="table-container">
      {/* ✅ หัวข้อ */}
      <h2 className="table-title">รายชื่อนักเรียน</h2>

      {/* ✅ Search box */}
      <input
        type="text"
        placeholder="ค้นหาชื่อนักเรียน หรือ โรงเรียน..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* ✅ ปุ่มเรียง */}
      <div className="sort-buttons">
        <button
          onClick={() => {
            setSortBy("name");
            toggleOrder();
          }}
          className="sort-btn name"
        >
          เรียงตามชื่อ ({sortBy === "name" ? (order === "asc" ? "↑" : "↓") : "↕"})
        </button>
        <button
          onClick={() => {
            setSortBy("gpa");
            toggleOrder();
          }}
          className="sort-btn gpa"
        >
          เรียงตาม GPA ({sortBy === "gpa" ? (order === "asc" ? "↑" : "↓") : "↕"})
        </button>
      </div>

      {/* ✅ ตาราง */}
      {sortedStudents.length === 0 ? (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          ไม่พบนักเรียน
        </p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>โรงเรียน</th>
              <th>GPA</th>
              <th>รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((s) => (
              <tr key={s.id}>
                <td>
                  {s.photo && (
                    <img
                      src={s.photo}
                      alt="student"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "8px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                  {s.firstName}
                </td>
                <td>{s.lastName}</td>
                <td>{s.school}</td>
                <td>{s.gpa}</td>
                <td className="text-center">
                  <Link href={`/student/${s.id}`} className="btn-link">
                    ดูเพิ่มเติม
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
