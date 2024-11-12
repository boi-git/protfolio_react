import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full py-16 bg-white flex-col justify-start items-start inline-flex">
      {/*Nav*/}
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[200px] flex-col justify-center items-center inline-flex">
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
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[200px] pt-8 grid grid-cols-12 gap-8">
        <div className="h-auto col-span-12 sm:col-span-12 lg:col-span-4 p-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch justify-start items-center gap-8 inline-flex">
            <img
              className="w-[125px] h-[125px] rounded-full"
              src="https://via.placeholder.com/125x125"
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
            <div className="grow shrink basis-0 h-6 justify-start items-start gap-16 flex ">
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
          <div className="w-full h-full justify-start items-start gap-8 grid grid-cols-12">
            <div className="rounded-[10px] shadow-xl border border-[#c9c9c9] col-span-12 sm:col-span-12 lg:col-span-6 min-h-[240px] sm:min-h-[240px] h-full bg-[url('https://via.placeholder.com/485x240')] bg-cover bg-center"></div>

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
                  <div className="w-10 h-10 left-0 top-0 absolute bg-[#d9d9d9]" />
                </div>
                <div className="w-10 h-10 relative">
                  <div className="w-10 h-10 left-0 top-0 absolute bg-[#d9d9d9]" />
                </div>
              </div>

              <div className="self-stretch p-8 bg-white rounded-[10px] shadow border border-[#c9c9c9] justify-between items-center inline-flex">
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  Email
                </div>
                <div className="w-10 h-10 relative">
                  <div className="w-10 h-10 left-0 top-0 absolute bg-[#d9d9d9]" />
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
            {/* <div className="col-span-12 sm:col-span-12 lg:col-span-4 grid grid-cols-12 gap-8"> */}
            <div className="col-span-6 h-[150px] bg-white rounded-[10px] shadow-xl border border-[#c9c9c9]"></div>
            <div className="col-span-6 h-[150px] bg-white rounded-[10px] shadow-xl border border-[#c9c9c9]"></div>
            <div className="col-span-6 h-[150px] bg-white rounded-[10px] shadow-xl border border-[#c9c9c9]"></div>
          </div>

          <div className="h-full col-span-8 flex-col justify-start items-start gap-8 inline-flex">
            <div className="flex-grow  w-full p-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] flex-col justify-start items-start inline-flex">
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="w-[150px] h-[150px] bg-[#c9c9c9] rounded-[10px] justify-center items-center flex">
                  <div className="text-[#3a3a3a] text-[15px] font-normal font-['Poppins'] leading-[18px]">
                    Tech
                  </div>
                </div>
                <div className=" w-[150px] h-[150px] bg-[#c9c9c9] rounded-[10px] justify-center items-center flex">
                  <div className="text-[#3a3a3a] text-[15px] font-normal font-['Poppins'] leading-[18px]">
                    Tech
                  </div>
                </div>
                <div className="w-[150px] h-[150px] bg-[#c9c9c9] rounded-[10px] justify-center items-center flex">
                  <div className="text-[#3a3a3a] text-[15px] font-normal font-['Poppins'] leading-[18px]">
                    Tech
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
            <div className="h-[150px] w-full px-16 py-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] justify-between items-center inline-flex">
              <div className="grow shrink basis-0 text-[#3a3a3a] text-base font-normal font-['Poppins'] leading-tight justify-center ">
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
                  Jun 2024 - Present
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#3a3a3a] text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
                UI/UX Designer{" "}
              </div>
              <div className="flex-col justify-end items-end inline-flex">
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  Keeklr
                </div>
                <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                  Jun 2024 - Present
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#3a3a3a] text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
                UI/UX Designer{" "}
              </div>
              <div className="flex-col justify-end items-end inline-flex">
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  Keeklr
                </div>
                <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                  Jun 2024 - Present
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-[#3a3a3a] text-[31px] font-normal font-['Poppins'] leading-[37.20px]">
                UI/UX Designer{" "}
              </div>
              <div className="flex-col justify-end items-end inline-flex">
                <div className="text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-normal">
                  Keeklr
                </div>
                <div className="text-[#3a3a3a] text-[13px] font-normal font-['Poppins'] leading-none">
                  Jun 2024 - Present
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-full text-center justify-center items-center inline-flex">
            <div className="text-[#3a3a3a] text-[25px] font-normal font-['Poppins'] underline leading-[30px]">
              View More
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-8 justify-start items-center gap-8 inline-flex">
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
      <div className="w-full px-[16px] sm:px-[32px] lg:px-[200px] pt-8 grid grid-cols-12 gap-8">
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
      <div className="w-full pt-8 px-[16px] sm:px-[32px] lg:px-[200px] justify-start items-center gap-8 inline-flex">
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
      <div className="w-full pt-8 px-[200px] flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="self-stretch w-full px-16 py-8 bg-white rounded-[10px] shadow-xl border border-[#c9c9c9] justify-center items-center inline-flex">
          {" "}
          <p className="text-center text-[#3a3a3a] text-xl font-normal font-['Poppins'] leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/BUE221"
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
