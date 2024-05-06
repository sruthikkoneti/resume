import React from 'react'

const Education = () => {
  return (
    <>
    <section className="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">EDUCATION</h2>
                <section className="mt-2 border-b-2 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">Jawaharlal Nehru University</h3>
                    <p className="leading-normal text-gray-500 text-md">2021 – 2025 | B.Tech Computer Science and Engineering</p>
                  </header>
                  <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                    <li>
                      <span className="font-semibold text-md">GPA:</span>
                      7.8/10
                    </li>
                  </ul>
                </section>
                <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                  <header>
                    <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">Aditya Junior College</h3>
                    <p className="leading-normal text-gray-500 text-md">2019 – 2021 | Senior Secondary Education</p>
                    </header>
                  <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                    <li>
                      <span className="font-semibold text-md">Percentage:</span>
                      94.4%
                    </li>
                  </ul>
                </section>
                <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                  <header>
                    <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">Little Buds School</h3>
                    <p className="leading-normal text-gray-500 text-md">2018-2019 | Secondary School Education</p>
                  </header>
                  <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                    <li>
                      <span className="font-semibold text-md">GPA:</span>
                      10/10
                    </li>
                  </ul>
                </section>
              </section>
            </section>
    </>
  )
}

export default Education