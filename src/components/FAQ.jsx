import React from "react";

export default function FAQ() {
  return (
    <div className="bg-gray-100 py-10" id="faq">
      <div className="md:text-center p-4">
        <p className=" text-lime-500 font-medium">FAQ's</p>
        <p className="text-3xl text-gray-800 mb-5">
          Get to know more about Remitwise
        </p>
      </div>
      {/*  */}
      <div className="px-4 space-y-1 mx-auto sm:max-w-xl md:max-w-4xl ">
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            What is Remit-Wise?
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
            Remit-Wise is a global money transfer service that allows
            individuals and businesses to send and receive funds quickly,
            securely, and affordably.
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do agents earn money??
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
            Agents earn a commission for every successful money transfer they
            process. The more transactions you handle, the higher your earnings.
            You can also grow your client base to increase your monthly income.
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Can I work as a remittance agent part-time? Yes.
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
            You can choose your working hours and process transactions whenever
            it’s convenient for you. Many of our agents work part-time while
            managing other commitments.
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Is training provided for new agents?
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
            Yes. Once you’re approved, you’ll receive access to training
            materials, step-by-step guides, and ongoing support to help you
            provide secure, efficient remittance services.
          </div>
        </div>
      </div>
    </div>
  );
}
