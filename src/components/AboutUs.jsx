import React from "react";

export default function AboutUs() {
  return (
    // <section className="py-24 relative">
    //   <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    //     <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
    //       <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
    //         <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
    //           <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
    //             Building Stronger Communities through Collaboration and
    //             Empowerment
    //           </h2>
    //           <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
    //             Your trusted gateway to money transfer career opportunities." We
    //             are a dedicated platform that connects skilled remittance agents
    //             with licensed money transfer companies worldwide. Whether you’re
    //             just starting your career or are an experienced agent looking
    //             for better prospects, our platform ensures you find reliable,
    //             well-paying, and secure opportunities.
    //           </p>
    //         </div>
    //         <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
    //           <span className="px-1.5 text-white text-sm font-medium leading-6">
    //             Get Started
    //           </span>
    //         </button>
    //       </div>
    //       <img
    //         className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
    //         src="https://pagedone.io/asset/uploads/1717751272.png"
    //         alt="about Us image"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            About Us
          </h2>
          <p className="mb-6 text-base md:font-medium tracking-wide text-gray-950 md:text-lg">
            Your trusted gateway to money transfer career opportunities." We are
            a dedicated platform that connects skilled remittance agents with
            licensed money transfer companies worldwide. Whether you’re just
            starting your career or are an experienced agent looking for better
            prospects, our platform ensures you find reliable, well-paying, and
            secure opportunities.
          </p>
          {/* <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p> */}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
