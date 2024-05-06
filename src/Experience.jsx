import React from "react";

const Experience = () => {
  return (
    <>
      <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
        <section className="">
          <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
            EXPERIENCE
          </h2>
          <section className="mb-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Backend Developer
              </h3>
              <p className="text-sm leading-normal text-gray-500">
                Oct 2023- Dec 2023 | Idyll
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Developed and executed an advanced algorithm to dynamically
                showcase user profiles based on subscription tier criteria,
                resulting in a 15% increase in user engagement.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Developed an API and integrated Amazon SQS to perform lossless
                image decomposition, effectively reducing image size by 80% upon
                resulting in less load time for the user profiles.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Incorporated Instagram Basic Display API into the application,
                enabling users to seamlessly connect their Instagram accounts.
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default Experience;
