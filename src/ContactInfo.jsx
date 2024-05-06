import React from "react";

const ContactInfo = () => {
  return (
    <>
      <section className="pb-2 mt-4 mb-0 first:mt-0">
        <section className="break-inside-avoid">
          <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
            <ul className="pr-7 list-inside">
              <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                <a href="https://github.com/sruthikkoneti" className="group">
                  <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                    Github:
                  </span>
                  sruthikkoneti
                  <span className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                    ↗
                  </span>
                </a>
              </li>
              <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                <a href="https://www.linkedin.com/in/sruthik-koneti/" className="group">
                  <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                    LinkedIn:
                  </span>
                  sruthikkoneti
                  <span className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                    ↗
                  </span>
                </a>
              </li>
              <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                <a href="mailto:sruthikkoneti.jobs@gmail.com" className="group">
                  <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                    Email:
                  </span>
                  sruthikkoneti.jobs@gmail.com
                  <span className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black">
                    ↗
                  </span>
                </a>
              </li>
              <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                <a href="tel:+919573950421">
                  <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                    Phone:
                  </span>
                  +91 95739-50421
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default ContactInfo;
