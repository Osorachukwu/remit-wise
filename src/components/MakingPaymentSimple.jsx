import React from "react";

export default function MakingPaymentSimple() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center ">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-900 uppercase ">
          Grow your business with ease
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4">
            <a
              href="/"
              aria-label="Article"
              className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
            >
              {/* Making Payments Simple and Accessible */}
              Ready to Start Your Career or Hire an Agent?
            </a>
          </div>
          <p className="text-base text-gray-900 md:text-lg">
            Join Us Now – It’s Free and Only Takes 3 Minutes.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
          Contact Us
        </h2>

        <div className="space-y-4">
          {/* Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full self-start sm:self-center">
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
                className="lucide lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </div>
            <a
              href="tel:+17162745235"
              className="text-gray-700 hover:underline mt-2 sm:mt-0"
            >
              +17162745235
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full self-start sm:self-center">
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
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <a
              href="https://www.facebook.com/share/g/16qacDyggk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:underline mt-2 sm:mt-0"
            >
              Visit our Facebook Page
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full self-start sm:self-center">
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
                className="lucide lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-gray-700 mt-2 sm:mt-0">
              Servcop 17 state Street New york
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
