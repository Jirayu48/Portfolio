"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Portfolio TCAS</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/student">Student</Link>
        </li>
        <li>
          <Link href="/teacher">Teacher</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}