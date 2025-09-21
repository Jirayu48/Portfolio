"use client";

import { useParams } from "next/navigation";
import { useStudentStore } from "../../../store/studentStore";

export default function StudentDetail() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const student = useStudentStore((state) =>
    state.students.find((s) => s.id === id)
  );

  if (!student) {
    return <p className="p-6">ไม่พบนักเรียน</p>;
  }

  {student.photo && (
  <img
    src={student.photo}
    alt="student"
    className="w-32 h-32 rounded-full border mb-4"
  />
)}

{/* ✅ แกลเลอรีรูปกิจกรรม */}
{student.gallery && student.gallery.length > 0 && (
  <div className="mt-4">
    <h2 className="text-lg font-bold mb-2">กิจกรรม / รางวัล / ผลงาน</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {student.gallery.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`gallery-${idx}`}
          className="w-full h-32 object-cover rounded shadow"
        />
      ))}
    </div>
  </div>
)}


  return (
    <div className="p-6 space-y-2">
      <h1 className="text-xl font-bold">
        {student.firstName} {student.lastName}
      </h1>
      <p><strong>ที่อยู่:</strong> {student.address}</p>
      <p><strong>เบอร์โทร:</strong> {student.phone}</p>
      <p><strong>โรงเรียน:</strong> {student.school}</p>
      <p><strong>GPA:</strong> {student.gpa}</p>
      <p><strong>สาขาที่เลือก:</strong> {student.major}</p>
      <p><strong>มหาวิทยาลัย:</strong> {student.university}</p>
      <p><strong>ความสามารถพิเศษ:</strong> {student.skills}</p>
      <p><strong>เหตุผลในการสมัคร:</strong> {student.reason}</p>
    </div>
  );
}