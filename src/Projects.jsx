import React from "react";

const Projects = () => {
  return (
    <>
      <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
        <section className="">
          <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
            PROJECTS
          </h2>
          <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Semester Registration Portal for School of Engineering, JNU
              </h3>
              <p className="text-sm leading-normal text-gray-500">
                March 2024- May 2024
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Spearheaded a cross-functional team of 5 members to develop a
                comprehensive web application using React.js and Firebase
                backend, revolutionizing the semester registration process at
                our school.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Successfully implemented 4 distinct portals catering to
                students, mentors, dean, and office personnel, streamlining
                communication and enhancing efficiency across all levels of
                administration.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Leveraged cloud storage solutions to securely manage and store
                registration-related files, eliminating the need for manual
                paperwork and queues, thereby significantly enhancing user
                experience and administrative effectiveness.
              </li>
            </ul>
          </section>
          <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Cautious Traveler: A Web Application for Scam Awareness at
                Destinations
              </h3>
              <p className="text-sm leading-normal text-gray-500">
                Dec 2023- Jan 2024
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Orchestrated the design and implementation of both frontend and
                backend infrastructures for the web application.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Incorporated Leaflet Maps API to enhance user interaction,
                enabling intuitive visualization of location-specific scams
                through an interactive map interface.
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
          <section className="mb-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Cosmic Odyssey:A 3D Augmented Reality Game
              </h3>
              <p className="text-sm leading-normal text-gray-500">
                Aug 2023- Oct 2023
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Conceptualized, designed, and developed a captivating AR shooting game with multiple levels
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Implemented gameplay mechanics where players engage in space-ship combat while avoiding shooting satellites to maintain a positive score.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Successfully deployed the game, offering an immersive gaming experience within an augmented reality environment.
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
