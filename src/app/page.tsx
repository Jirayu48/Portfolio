export default function Home() {
  return (
    <div className="main-container">
      <h1>ระบบ Portfolio TCAS</h1>
      <a href="/student" className="btn btn-primary">➕ เพิ่มข้อมูลนักเรียน</a>
      <a href="/teacher" className="btn btn-secondary">📋 ดูรายชื่อนักเรียน</a>
    </div>
  );
}
