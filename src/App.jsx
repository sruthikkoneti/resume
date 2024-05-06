import React from "react";
import Header from "./Header";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import CourseWork from "./Coursework";
import Projects from "./Projects";
import ExtraCurricular from "./ExtraCurricular";
const Resume = () => {
  return (
    <>
      <div className="font-jost hyphens-manual">
        <main className="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter">
          <Header />

          <section className="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full">
            <section className="flex-col">
              <ContactInfo />
              <Education />
              <CourseWork/>
              <Skills />
              <Experience />
              <Projects/>
              <ExtraCurricular/>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Resume;
