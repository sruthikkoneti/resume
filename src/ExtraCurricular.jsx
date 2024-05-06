import React from "react";

const ExtraCurricular = () => {
  return (
    <>
      <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
        <section className="break-inside-avoid">
          <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
            EXTRA CURRICULAR
          </h2>
          <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                President
              </h3>
              <p className="text-sm leading-normal text-gray-500">
                2023 – 2024 | Drushyam- The Film & Photography Club of School of Engineering, JNU
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li className="list-disc list-inside">
              Coordinated monthly photography contests alongside engaging photo-walk events.
              </li>
            </ul>
          </section>
          <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Social Media and Outreach Coordinator
              </h3>
              <p className="text-sm text-gray-500 leading-snugish">
              2024 | HackJNU3.0
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li className="list-disc list-inside" >
              Curated dynamic promotional content including reels to amplify event engagement and outreach.
              </li>
            </ul>
          </section>
          <section className="mb-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Placement Cell Member
              </h3>
              <p className="text-sm text-gray-500 leading-snugish">
                2023 – Present | Placement Cell, School of Engineering, JNU
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li className="list-disc list-inside" >
                Acted as one of the coordinators for Alumni Meet and conducted a successful event.
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default ExtraCurricular;
