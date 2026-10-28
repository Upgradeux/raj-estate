"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [y, setY] = useState(2026);

  useEffect(() => {
    setY(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="wrap">
        <span>© {y} Raj Enterprises, Kalamboli, Panvel</span>
        <span>Real estate consultants in Navi Mumbai</span>
      </div>
    </footer>
  );
}
