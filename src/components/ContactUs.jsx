import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-whit rounded-xl shadow-lg p-6 w-full mx-auto" id="contact">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-16">
        Get In Touch With Us
      </h2>

      {/* Contact Info */}
      <div className="grid gap-5 md:gap-10  sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {/* Phone */}
        <div className="flex flex-col items-center sm:gap-3 rounded-lg bg-blue-100 py-10">
          <div className="text-blue-600 p-3 rounded-full self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
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
            className="text-gray-700 text-lg font-medium hover:underline mt-2 sm:mt-0"
          >
            +17162745235
          </a>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center sm:gap-3 rounded-lg bg-blue-100 py-10">
          <div className="text-blue-600 p-3 rounded-full self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
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
            className="text-gray-700 text-lg font-medium hover:underline mt-2 sm:mt-0"
          >
            Visit our Facebook Page
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center sm:gap-3 rounded-lg bg-blue-100 py-10">
          <div className="text-blue-600 p-3 rounded-full self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
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
          <span className="text-gray-700 text-lg font-medium hover:underline mt-2 sm:mt-0">
            Servcop 17 state Street New york
          </span>
        </div>
      </div>
    </div>
  );
}
