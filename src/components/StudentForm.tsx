"use client";
import { useState } from "react";
import { useStudentStore } from "../store/studentStore";

export default function StudentForm() {
  const addStudent = useStudentStore((state) => state.addStudent);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    school: "",
    phone: "",
    address: "",
    gpa: "",
    skills: "",
    reason: "",
    major: "",
    university: "",
    photo: "",
    gallery: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, photo: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setForm({ ...form, gallery: filesArray });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent({ ...form, id: Date.now().toString() });
    alert("✅ บันทึกข้อมูลนักเรียนเรียบร้อย!");
    setForm({
      firstName: "",
      lastName: "",
      school: "",
      phone: "",
      address: "",
      gpa: "",
      skills: "",
      reason: "",
      major: "",
      university: "",
      photo: "",
      gallery: [],
    });
  };

  return (
    <div className="form-container">
      <h2>เพิ่ม Portfolio นักเรียน</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อ</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>นามสกุล</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>โรงเรียน</label>
          <input name="school" value={form.school} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>เบอร์โทรศัพท์</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>ที่อยู่</label>
          <input name="address" value={form.address} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>GPA</label>
          <input name="gpa" value={form.gpa} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>สาขาที่เลือก</label>
          <input name="major" value={form.major} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>มหาวิทยาลัย</label>
          <input name="university" value={form.university} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>ความสามารถพิเศษ</label>
          <textarea name="skills" value={form.skills} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>เหตุผลในการสมัคร</label>
          <textarea name="reason" value={form.reason} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>อัปโหลดรูปโปรไฟล์</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <div className="form-group">
          <label>อัปโหลดรูปกิจกรรม/รางวัล/ผลงาน</label>
          <input type="file" accept="image/*" multiple onChange={handleGalleryChange} />
        </div>

        <button type="submit" className="submit-btn">
          บันทึก
        </button>
      </form>
    </div>
  );
}
