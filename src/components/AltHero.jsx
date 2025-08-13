import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "../assets/african-american-man-remote-working-from-home (2).jpg";
import img2 from "../assets/side-view-man-talking-phone.jpg";
import img3 from "../assets/vertical-shot-cheerful-woman-bookkeeper-talks-mobile-phone-has-positive-expression-works-with-laptop-computer.jpg";

export default function AltHero() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="relative bg-white h-[85vh] overflow-hidde">
      <div className="absolute h-full">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              {" "}
              <img src={img1} alt="" className="object-contai h-full" />{" "}
            </div>
            <div className="embla__slide">
              <img src={img2} alt="" className="object-fil h-full" />
            </div>
            <div className="embla__slide">
              <img src={img3} alt="" className="object-contai h-full" />
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 h-full w-full"></div>
      </div>
      {/*  */}
      <div className="absolute md:ml-20 flex flex-col justify-center max-w-[24rem] md:max-w-[28rem] px-4 md:pl-5 md:border-l-4 border-lime-500 h-full">
        <p className="mb-10 font-sans font-bold tracking-tight text-white text-5xl leading-16 md:mb-10 ">
          Connecting Trusted Remittance
          <br className="md:hidden" />
          Agents with Global
          <br className="md:hidden" />
          <span className="relative inline-block text-lime-500">
            Opportunities
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
            <p className="mb-6 text-base font-medium tracking-wide text-white md:text-lg">
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
            <p className="text-base font-medium tracking-wide text-white md:text-lg">
              Connecting Remittance Agents with Global Opportunities.
            </p>
          </div>
      </div>
      {/*  */}
    </div>
  );
}

{
  /* <p className="mb-6 font-sans font-bold tracking-tight text-gray-800 text-5xl leading-16 sm:leading-none md:mb-10">
        Connecting Trusted Remittance
        <br className="md:hidden" />
        Agents with Global
        <br className="md:hidden" />
        <span className="relative inline-block text-lime-500">
          Opportunities
        </span>
      </p> */
}
