import React from "react";

export default function ContactUs() {
  return (
    <div className="rounded-xl shadow-lg p-6 w-full mx-auto" id="contact">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
        Get In Touch With Us
      </h2>

      {/* Contact Info */}
      <div className="grid md:gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {/* Phone */}

        <div className="flex flex-col items-center sm:gap-3 rounded-lg py-6">
          <div className="text-gray-600 p-3 rounded-full self-center border mb-4">
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
          <div className="text-gray-600 text-center">
            <p className="font-semibold text-lg">Call us:</p>
            <p className="text-gray-500 font-light my-1">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>

            <a
              href="tel:+17162745235"
              className="underline font-medium hover:underline mt-2 sm:mt-0"
            >
              +17162745235
            </a>
          </div>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center sm:gap-3 rounded-lg  py-6">
          <div className="text-gray-600 p-3 rounded-full self-center border mb-3">
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
          <div className="text-gray-600 text-center">
            <p className="font-semibold text-lg">Facebook:</p>

            <a
              href="https://www.facebook.com/share/g/16qacDyggk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-center hover:underline mt-2 sm:mt-0"
            >
              Connect with us on Facebook and be part of our community.
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center sm:gap-3 rounded-lg  py-6">
          <div className="text-gray-600 p-3 rounded-full self-center border mb-3">
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
          <div className="text-gray-600 text-center">
            <p className="font-semibold text-lg">Visit us:</p>
            <p>Come see us in person, we’d love to meet you.</p>
            <p className="underline font-medium hover:underline mt-2 sm:mt-0">Servcop 17 state Street New york</p>
          </div>
        </div>
      </div>
    </div>
  );
}
