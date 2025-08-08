import React from "react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-gray-200 border-t border-gray-800 bg-gray-900 p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Remit-wise
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}
