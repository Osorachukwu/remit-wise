import React from "react";

export default function MakingPaymentSimple() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center ">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-100 uppercase ">
          Grow your business with ease
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4">
            <a
              href="/"
              aria-label="Article"
              className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
            >
              {/* Making Payments Simple and Accessible */}
              Ready to Start Your Career or Hire an Agent?
            </a>
          </div>
          <p className="text-base text-gray-100 md:text-lg">
           Join Us Now – It’s Free and Only Takes 3 Minutes.
          </p>
        </div>
      </div>
    </div>
  );
}
