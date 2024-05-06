import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300">
        <section className="block flex flex-col justify-start">
          <h1 className="mb-0 text-5xl font-bold text-gray-700">
            Sruthik Koneti
          </h1>
          <h2 className="m-0 text-2xl font-semibold text-gray-700">
            Full Stack Developer
          </h2>
          <h3 className="m-0 mt-2 text-xl font-semibold text-gray-500 leading-snugish">
            New Delhi, India
          </h3>
        </section>
      </header>
    </>
  );
};

export default Header;
