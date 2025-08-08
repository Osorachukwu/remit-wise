import React from "react";

export default function EarnForOver() {
  let items = [{title: "TSA Payment", desc: "Make payments to federal and different state governments. These include licenses fees, fines, taxes and many others."}, {title: "Utility Bills", desc: "Pay your utility bills such as electricity, water, and gas bills with ease."}, {title: "School Fees", desc: "Pay school fees for your children or wards in various institutions."}, {title: "Insurance Premiums", desc: "Pay insurance premiums for health, life, and property insurance."}];
  return (
    <div id="earn" className="carousel carousel-center w-full space-x-4 p-4 bg-white">
      {items.map((item) => (
        <div key={item.title} className="carousel-item mx-2 w-[80%] p-6 bg-gray-900">
          <div>
            <div className="icon-shadow h-11 w-11 flex justify-center items-center rounded-full bg-gray-900 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-landmark-icon lucide-landmark"
              >
                <path d="M10 18v-7" />
                <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
                <path d="M14 18v-7" />
                <path d="M18 18v-7" />
                <path d="M3 22h18" />
                <path d="M6 18v-7" />
              </svg>
            </div>
            <div>
              <p className="my-2 font-semibold">{item.title}</p>
              <p>
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
