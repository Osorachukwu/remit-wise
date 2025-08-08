import React from "react";

export default function FAQ() {
  return (
    <div className="bg-gray-100 py-10" id="faq">
      <div className="md:text-center p-4">
        <p className=" text-gray-800">FAQ's</p>
        <p className="text-3xl text-gray-800 mb-5">
          Get to know more about Remit-wise
        </p>
      </div>
      {/*  */}
      <div className="px-4 space-y-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            What is Remit-Wise?
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
           Remit-Wise is a global money transfer service that allows individuals and businesses to send and receive funds quickly, securely, and affordably.
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Is there a limit to how much money I can send?
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
            For security and compliance reasons, there are transaction limits. These limits may increase as you provide additional verification and upgrade your account's KYC (Know Your Customer) level.
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            What information do I need from the recipient?
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
            You will generally need their full name, address, bank name, account number, and the bank's unique identifier (e.g., SWIFT/BIC code for international transfers or a routing number for domestic transfers). Some countries may require an IBAN or other specific codes.
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-300 border border-gray-400 text-gray-800">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            What are the fees and exchange rates?
          </div>
          <div className="collapse-content text-sm border-t border-gray-400 pt-4">
            Fees and exchange rates are a critical part of the service. We offer transparent pricing, with fees that vary depending on the amount, destination, and transfer method. Our exchange rates are competitive and are displayed before you confirm your transaction.
          </div>
        </div>
      </div>
    </div>
  );
}
