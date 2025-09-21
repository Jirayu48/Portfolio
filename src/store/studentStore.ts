import { create } from "zustand";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  address?: string;
  phone?: string;
  school?: string;
  gpa: string;
  skills?: string;
  reason?: string;
  major?: string;
  university?: string;
  photo?: string;       // รูปโปรไฟล์
  gallery?: string[];   // ✅ เก็บหลายรูป (กิจกรรม/รางวัล/ผลงาน)
}

interface StudentState {
  students: Student[];
  addStudent: (student: Student) => void;
}

// 👇 ต้อง export แบบนี้
export const useStudentStore = create<StudentState>((set) => ({
  students: [],
  addStudent: (student) =>
    set((state) => ({ students: [...state.students, student] })),
}));
