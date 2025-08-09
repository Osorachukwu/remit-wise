import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  let testimonials = [
    {
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      name: "Bonnie Green",
      testimonial:
        "Joining this platform completely changed my career path. I now work as a remittance agent full-time, helping clients send and receive money safely every day. The job support and resources here are unmatched.",
      location: "New York, USA",
    },
    {
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      name: "Roberta Casas",
      testimonial:
        "I started part-time while still in school, and within months I was earning enough to cover my tuition. The system is secure, and customers trust me because of the platform’s reputation.",
      location: "Los Angeles, USA",
    },
    {
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      name: "Jese Leos",
      testimonial:
        "As a remittance agent, I get the satisfaction of helping families stay connected through fast and reliable money transfers. The platform’s training gave me the confidence to start my own small agency.",
      location: "Chicago, USA",
    },
    {
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      name: "Karen Nelson",
      testimonial:
        " Before joining, I struggled to find flexible work. Now, I can choose my working hours, serve my community, and grow my income steadily. What I love most is the transparency — no hidden charges, no delays.",
      location: "Houston, USA",
    },
  ];
  //
  return (
    <div className="bgred-red-100 py-12">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Testimonials
        </h2>
        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>

      <div className="embla max-w-2xl mx-auto" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="embla__slide border testimonial-shadow"
            >
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white h-full border-b border-gray-200 md:p-12 lg:border-r ">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Speechless with how easy this was to integrate
                </h3> */}
                  <p className="my-4 italic">{testimonial.testimonial}</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.avatar}
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium text-gray-900 text-left">
                    <div>{testimonial.name}</div>
                    <div className="text-sm font-light text-gray-500 ">
                      {testimonial.location}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
