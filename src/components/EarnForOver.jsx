import React from "react";

export default function EarnForOver() {
  let items = [1, 2, 3, 4];
  return (
    <div className="carousel carousel-center bg-neutral w-full space-x-4 p-4">
      {items.map(() => (
        <div className="carousel-item mx-2 w-[80%] p-4 bg-gray-800">
          <div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-900 mb-2">
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
              <p className="mb-2">TSA Payment</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                deleniti sed a? Reiciendis illo minima aliquam voluptatibus
                omnis eligendi ratione quae nostrum vero, sapiente enim
                voluptatum sit inventore quibusdam iure!
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
