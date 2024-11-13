"use client";

import { useState } from "react";

export default function Home() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText("adhwa.aizat23@gmail.com").then(() => {});
  };

  return (
    <div className="w-full py-8 bg-white flex-col justify-start items-start inline-flex">
      {/*Nav*/}
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[200px] flex-col justify-center items-center inline-flex hidden">
        <div className="self-stretch px-16 py-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] justify-between items-center inline-flex">
          <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
            Home
          </div>
          <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
            About
          </div>
          <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
            Work
          </div>
          <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
            Gallery
          </div>
          <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
            Contact
          </div>
        </div>
      </div>

      {/*First Row*/}
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[200px] grid grid-cols-12 gap-8">
        <div className="h-auto col-span-12 sm:col-span-12 lg:col-span-4 p-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch justify-start items-center gap-8 inline-flex">
            <img
              className="w-[125px] h-[125px] rounded-full object-full"
              src="/img/Aizat_Photo.jpg"
            />
            <div className="grow shrink basis-0 text-[#3a3a3a] text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
              Muhammad Adhwa' Aizat Bin Harun
            </div>
          </div>
          <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
            <div className="grow shrink basis-0 text-[#3a3a3a] text-base font-normal font-['Poppins'] leading-tight">
              I'm skilled in translating Figma designs into functional code with
              React and Vue, ensuring that my designs are optimized for
              performance and usability. This background allows me to build
              interfaces that meet user needs and align with business goals.
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 lg:col-span-8 flex-col justify-start items-start gap-8 inline-flex w-full">
          <div className="w-full p-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] justify-between items-center inline-flex">
            <div className="overflow-hidden w-full">
              <div className="marquee flex gap-16">
                <div className="text-[#3a3a3a] whitespace-nowrap text-xl font-normal font-['Poppins'] leading-normal">
                  UI/UX Designer
                </div>
                <div className="text-[#3a3a3a] whitespace-nowrap text-xl font-normal font-['Poppins'] leading-normal">
                  Frontend Developer
                </div>
                <div className="text-[#3a3a3a] whitespace-nowrap text-xl font-normal font-['Poppins'] leading-normal">
                  Prototyping
                </div>
                <div className="text-[#3a3a3a] whitespace-nowrap text-xl font-normal font-['Poppins'] leading-normal">
                  Portfolio
                </div>
                <div className="text-[#3a3a3a] whitespace-nowrap text-xl font-normal font-['Poppins'] leading-normal">
                  UI/UX Designer
                </div>
                <div className="text-[#3a3a3a] whitespace-nowrap text-xl font-normal font-['Poppins'] leading-normal">
                  Frontend Developer
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full justify-start items-start gap-8 grid grid-cols-12">
            {/* <div className="rounded-[10px] shadow-xl border border-[#c9c9c9] col-span-12 sm:col-span-12 lg:col-span-6 min-h-[240px] sm:min-h-[240px] h-full bg-[url('https://via.placeholder.com/485x240')] bg-cover bg-center" ></div> */}
            <div className="rounded-[10px] shadow-xl border border-[#c9c9c9] col-span-12 sm:col-span-12 lg:col-span-6 min-h-[240px] sm:min-h-[240px] h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9871624141365!2d101.67329157497097!3d3.0980710968775433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a30fc567561%3A0x6b2c6af57e6450b6!2sOld%20Klang%20Rd%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1731483920013!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex-col justify-center items-start gap-8 inline-flex col-span-12 sm:col-span-12 lg:col-span-6">
              <div className="self-stretch p-8 bg-white rounded-[10px] shadow border border-[#c9c9c9] justify-start items-center inline-flex gap-4">
                <div className="flex-grow flex-col justify-start items-start inline-flex">
                  <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                    Oct 2024
                  </div>
                  <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                    Resume
                  </div>
                </div>
                <div className="w-10 h-10 relative">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="material-symbols-rounded text-[#3a3a3a]"
                      style={{ fontSize: "40px" }}
                    >
                      visibility
                    </span>
                  </a>
                </div>

                <div className="w-10 h-10 relative text-[#3a3a3a]">
                  <a href="/resume.pdf" download="Aizat_Resume.pdf">
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: "40px" }}
                    >
                      download
                    </span>
                  </a>
                </div>
              </div>

              <div className="self-stretch p-8 bg-white rounded-[10px] shadow border border-[#c9c9c9] justify-start items-center inline-flex gap-4">
                <div className="text-[#3a3a3a] text-xl g-8 flex-grow flex-col justify-start items-start inline-flex">
                  Email
                </div>
                <div className="w-10 h-10 relative text-[#3a3a3a]">
                  <a href="mailto:adhwa.aizat23@gmail.com">
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: "40px" }}
                    >
                      mail
                    </span>
                  </a>
                </div>
                <div className="w-10 h-10 relative text-[#3a3a3a]">
                  <span
                    className="material-symbols-rounded cursor-pointer"
                    style={{ fontSize: "40px" }}
                    onClick={copyToClipboard}
                  >
                    content_copy
                  </span>
                  {copySuccess && (
                    <div className="text-sm text-green-500">{copySuccess}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Second Row*/}
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[200px] pt-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 sm:col-span-12 lg:col-span-6 flex-col justify-start items-start gap-8 inline-flex grid grid-cols-12">
          <div className="col-span-12 sm:col-span-12 lg:col-span-4 grid grid-cols-12 lg:grid-cols-1 sm:grid-cols-12 gap-8">
            <div className="col-span-6 h-[150px] bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex justify-center items-center p-8">
              <a
                href="https://www.linkedin.com/in/adhwa-aizat-056585264/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/link_logo.png"
                  className="h-full w-auto object-contain p-8"
                />
              </a>
            </div>

            <div className="col-span-6 h-[150px] bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex justify-center items-center p-8">
              <a
                href="https://www.behance.net/adhwaaizat1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/behance.svg"
                  className="h-full w-auto object-contain p-8"
                />
              </a>
            </div>
            <div className="col-span-6 h-[150px] bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex justify-center items-center p-8">
              <a
                href="https://github.com/boi-git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/github-142-svgrepo-com.svg"
                  className="h-full w-auto object-contain p-8"
                />
              </a>
            </div>

            <div className="col-span-6 h-[150px] bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] block lg:hidden ">
              <div className="text-[#3a3a3a] text-base font-normal font-['Poppins'] leading-tight justify-center flex h-full items-center">
                “Deserving is not a thing in competition. <br />
                You earn it or you don't.”
              </div>
            </div>
          </div>

          <div className="h-full col-span-12 sm:col-span-12 lg:col-span-8 flex-col justify-start items-start gap-8 inline-flex">
            <div className="flex-grow  w-full p-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex-col justify-start items-start inline-flex gap-8 lg:gap-0 overflow-hidden">
              {/* <div className="justify-start items-center gap-8 inline-flex"> */}
              <div className="overflow-hidden justify-start items-center gap-8 inline-flex">
                <div className="marquee flex gap-8">
                  <div className="w-[150px] h-[150px] bg-[#F3F3F3] rounded-[10px] justify-center items-center flex">
                    <div className="flex justify-center items-center p-10">
                      <img
                        src="/img/Figma.svg"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-[150px] h-[150px] bg-[#F3F3F3] rounded-[10px] justify-center items-center flex">
                    <div className="flex justify-center items-center p-10">
                      <img
                        src="/img/Flutter.svg"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-[150px] h-[150px] bg-[#F3F3F3] rounded-[10px] justify-center items-center flex">
                    <div className="flex justify-center items-center p-10">
                      <img
                        src="/img/Larave.svg"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-[150px] h-[150px] bg-[#F3F3F3] rounded-[10px] justify-center items-center flex">
                    <div className="flex justify-center items-center p-10">
                      <img
                        src="/img/react-2.svg"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-[150px] h-[150px] bg-[#F3F3F3] rounded-[10px] justify-center items-center flex">
                    <div className="flex justify-center items-center p-10">
                      <img
                        src="/img/Tailwind.svg"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-[150px] h-[150px] bg-[#F3F3F3] rounded-[10px] justify-center items-center flex">
                    <div className="flex justify-center items-center p-10">
                      <img
                        src="/img/Vue.svg"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-grow w-full flex-col justify-end items-start inline-flex">
                <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                  Currently Using
                </div>
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  Tech
                </div>
              </div>
            </div>
            <div className="h-[150px] w-full px-16 py-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] justify-between items-center inline-flex hidden lg:block">
              <div className="text-[#3a3a3a] text-base font-normal font-['Poppins'] leading-tight justify-center flex h-full items-center">
                “Deserving is not a thing in competition. <br />
                You earn it or you don't.”
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 lg:col-span-6 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex-col justify-start items-start gap-8 inline-flex p-8">
          <div className="self-stretch h-10 flex-col justify-end items-start flex">
            <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
              1 Year Of{" "}
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              Experience
            </div>
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#3a3a3a] text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
                UI/UX Designer{" "}
              </div>
              <div className="flex-col justify-end items-end inline-flex">
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  Keeklr
                </div>
                <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                  July 2024 - Present
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#3a3a3a] text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
                Sport Advisor
              </div>
              <div className="flex-col justify-end items-end inline-flex">
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  Decathlon
                </div>
                <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                  Jun 2024 - Present
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#3a3a3a] text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
                UI/UX Designer & Developer
              </div>
              <div className="flex-col justify-end items-end inline-flex">
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  IMT Tech
                </div>
                <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                  Nov 2023 - May 2024
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-full text-center justify-center items-center inline-flex hidden">
            <div className="text-[#3a3a3a] text-[25px] font-normal font-['Poppins'] underline leading-[30px]">
              View More
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-8 justify-start items-center gap-8 inline-flex hidden">
        <div className="h-[650px] px-[200px] flex-grow py-8 bg-black/50 justify-start items-center gap-8 inline-flex grid grid-cols-12">
          <div className="h-full col-span-2 flex-col justify-start items-start gap-8 inline-flex overflow-hidden">
            <div className="w-full flex gap-8 flex-col">
              <div className="h-[150px] w-full bg-white rounded-[10px]  justify-start items-center inline-flex">
                <div className="justify-center items-center flex"></div>
              </div>
              <div className="h-[150px] w-full bg-white rounded-[10px]  justify-start items-center inline-flex">
                <div className="justify-center items-center flex"></div>
              </div>
              <div className="h-[150px] w-full bg-white rounded-[10px]  justify-start items-center inline-flex">
                <div className="justify-center items-center flex"></div>
              </div>
              <div className="h-[150px] w-full bg-white rounded-[10px]  justify-start items-center inline-flex">
                <div className="justify-center items-center flex"></div>
              </div>
            </div>
          </div>
          <div className="col-span-10 h-full flex p-8 rounded-[10px] flex-col justify-end items-start inline-flex">
            <div className="justify-between items-start inline-flex w-full ">
              <div className="flex-col justify-start items-start gap-2.5 inline-flex  ">
                <div className="flex-col justify-end items-start flex w-full">
                  <div className="text-white text-[13px] font-normal font-['Poppins'] leading-none">
                    Project
                  </div>
                  <div className="text-white text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
                    Corsary
                  </div>
                </div>
                <div className=" w-[575px]  text-white text-base font-normal font-['Poppins'] leading-tight">
                  I'm skilled in translating Figma designs into functional code
                  with React and Vue, ensuring that my designs are optimized for
                  performance and usability. This background allows me to build
                  interfaces that meet user needs and align with business goals.
                </div>
              </div>
              <div className="self-stretch rounded-[10px] justify-center items-center gap-8 flex">
                <div className="w-12 h-[47.21px] relative" />
                <div className="w-12 h-12 relative">
                  <div className="w-12 h-12 left-0 top-0 absolute bg-[#d9d9d9]" />
                </div>
                <div className="w-12 h-[30.39px] relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[200px] pt-8 grid grid-cols-12 gap-8 hidden">
        <div className="col-span-12 p-8 bg-white rounded-[10px] shadow border border-[#c9c9c9] justify-between items-center flex">
          <div className="grow shrink basis-0 h-6 justify-start items-start gap-16 flex">
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              UI/UX Designer{" "}
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              Frontend Developer
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              Prototyping
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              Portfolio
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              UI/UX Designer{" "}
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              Frontend Developer
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              Prototyping
            </div>
            <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
              Portfolio
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 px-[16px] sm:px-[32px] lg:px-[200px] justify-start items-center gap-8 inline-flex hidden">
        <div className="h-[600px] w-full p-4 bg-black/50 rounded-[25px] shadow-xl border border-[#c9c9c9] flex-col justify-end items-center inline-flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-center text-white text-xl font-normal font-['Poppins'] leading-normal">
              UI/UX Design
            </div>
            <div className="w-[50px] h-[50px] bg-[#a1a1a1] rounded-[100px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                01
              </div>
            </div>
          </div>
        </div>
        <div className="h-[600px] p-4 bg-white rounded-[50px] shadow-xl border border-[#c9c9c9] flex flex-col justify-center items-center relative">
          <div className="absolute inset-y-0 flex items-center">
            <div className="-rotate-90 text-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal whitespace-nowrap">
              Web Design
            </div>
          </div>
          <div className="w-[50px] h-[50px] bg-[#a1a1a1] rounded-full flex justify-center items-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal mt-auto">
            02
          </div>
        </div>
        <div className="h-[600px] p-4 bg-white rounded-[50px] shadow-xl border border-[#c9c9c9] flex flex-col justify-center items-center relative">
          <div className="absolute inset-y-0 flex items-center">
            <div className="-rotate-90 text-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal whitespace-nowrap">
              App Design
            </div>
          </div>
          <div className="w-[50px] h-[50px] bg-[#a1a1a1] rounded-full flex justify-center items-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal mt-auto">
            03
          </div>
        </div>
        <div className="h-[600px] p-4 bg-white rounded-[50px] shadow-xl border border-[#c9c9c9] flex flex-col justify-center items-center relative">
          <div className="absolute inset-y-0 flex items-center">
            <div className="-rotate-90 text-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal whitespace-nowrap">
              Frontend
            </div>
          </div>
          <div className="w-[50px] h-[50px] bg-[#a1a1a1] rounded-full flex justify-center items-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal mt-auto">
            04
          </div>
        </div>
        <div className="h-[600px] p-4 bg-white rounded-[50px] shadow-xl border border-[#c9c9c9] flex flex-col justify-center items-center relative">
          <div className="absolute inset-y-0 flex items-center">
            <div className="-rotate-90 text-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal whitespace-nowrap">
              Poster
            </div>
          </div>
          <div className="w-[50px] h-[50px] bg-[#a1a1a1] rounded-full flex justify-center items-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal mt-auto">
            05
          </div>
        </div>
        <div className="h-[600px] p-4 bg-white rounded-[50px] shadow-xl border border-[#c9c9c9] flex flex-col justify-center items-center relative">
          <div className="absolute inset-y-0 flex items-center">
            <div className="-rotate-90 text-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal whitespace-nowrap">
              Fitness
            </div>
          </div>
          <div className="w-[50px] h-[50px] bg-[#a1a1a1] rounded-full flex justify-center items-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal mt-auto">
            06
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full pt-8 px-[16px] sm:px-[32px] lg:px-[200px] flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="self-stretch w-full px-16 py-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] justify-center items-center inline-flex">
          {" "}
          <p className="text-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/boi-git"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Aizat
            </a>
            . with <span className="text-red-500">❤️</span> using React and
            Tailwind CSS. The source code is available on{" "}
            <a
              href="https://github.com/bue221"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
