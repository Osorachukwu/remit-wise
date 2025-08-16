import React from "react";
import logo from "../assets/logo-rmbg.png"

export default function NavBar() {
  return (
    <div className="navbar bg-white flex justify-between">
      <div className="hover:bg-white text-xl md:text-2xl text-gray-900 ml-10">
        {/* <p>
          <span className="text-lime-400 font-semibold m-0">R</span>emitwise
        </p> */}
        <img src={logo} alt="Remitwise Logo" className="w-20 h-20" />
      </div>
      <div>
        {/* Desktop menu */}
        <div className="hidden lg:block text-gray-900">
          <ul className="menu menu-vertical lg:menu-horizontal bg-gray-80 rounded-box ">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ's</a>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn bg-transparent m-1 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-justify-icon lucide-align-justify"
              >
                <path d="M3 12h18" />
                <path d="M3 18h18" />
                <path d="M3 6h18" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#faq">FAQ's</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
