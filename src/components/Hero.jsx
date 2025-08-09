import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-gray-800"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <p className="mb-6 font-sans font-bold tracking-tight text-gray-800 text-5xl leading-16 sm:leading-none md:mb-10">
            Connecting Trusted Remittance
            <br className="md:hidden" />
            Agents with Global
            <br className="md:hidden" />
            <span className="relative inline-block text-lime-500">
              Opportunities
              {/* <div className="w-full h-3 -mt-5 md:-mt-2 0 bg-lime-600" /> */}
            </span>
          </p>
          <div className="flex md:justify-center">
            <div className="mr-2 text-lime-600">
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
                class="lucide lucide-badge-check-icon lucide-badge-check"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <p className="mb-6 text-base font-medium tracking-wide text-gray-950 md:text-lg">
              {/* Fast, Secure, and Reliable Money Transfer. */}
              Trusted jobs. Verified employers. Secure payments.
            </p>
          </div>
          <div className="flex md:justify-center">
            <div className="mr-2 text-lime-600">
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
                class="lucide lucide-badge-check-icon lucide-badge-check"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <p className="text-base font-medium tracking-wide text-gray-950 md:text-lg">
              Connecting Remittance Agents with Global Opportunities.
            </p>
          </div>

          <a
            href="#earn"
            aria-label="Scroll down"
            className="flex items-center justify-center mt-20 w-10 h-10 mx-auto text-gray-900 duration-300 transform border border-gray-900 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="bg-color-main mx-auto max-w-screen-xl">
        <div className="border border-gray-200 p-8 md:p-12 mb-8">
         
           
          <h1 className="text-gray-900 text-5xl leading-16 font-extrabold mb-4">
            Upgrade your Hustle & Do More
          </h1>
          <p className="text-lg font-normal text-gray-600 mb-6">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers.
          </p>
          <a
            href="#"
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div> */
}
