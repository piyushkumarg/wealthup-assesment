'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function HomePage() {
  return (
    <>
    <Link href="/section" className='flex items-center  justify-center mx-auto my-2 px-8 py-2 w-80 text-xl font-medium rounded-xl bg-red-600 hover:bg-red-500 text-white'>Section 2 (Backend)</Link>
      <div className=" bg-gradient-to-br from-blue-900 to-teal-400 text-white py-20 relative  h-[1360px]">
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-7xl font-medium">Check your financial health</h1>
          <p className="max-w-[30rem] text-2xl text-center">
            Use WeathoMeter to get a free report card for your finances- within
            minutes!
          </p>
          <button className="rounded-full font-medium text-xl bg-orange-500 hover:bg-orange-400 shadow-md px-10 py-4 mt-4">
            Get Started
          </button>
        </div>
        <div className="flex items-center  justify-center  ">
          <div className="flex flex-col gap-2 pr-20">
            <div className=" flex flex-col gap-2">
              <div className="flex gap-2 text-xl items-center ">
                <Image
                  src="./assets/square.svg"
                  alt=""
                  height={30}
                  width={30}
                />

                <p className="text ">Expected Retirement Age</p>
              </div>

              <div className="h-1 bg-white ml-10"></div>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-2 text-xl items-center ">
                <Image
                  src="./assets/square.svg"
                  alt=""
                  height={30}
                  width={30}
                />

                <p className="text ">Identify Mistakes</p>
              </div>

              <div className="h-1 bg-white ml-10"></div>
            </div>
          </div>
          <div className="">
            <Image src="./assets/mobile.svg" alt="" height={500} width={500} />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-xl items-center ">
                <Image
                  src="./assets/square.svg"
                  alt=""
                  height={30}
                  width={30}
                />

                <p className="text ">Personalised Road Map</p>
              </div>

              <div className="h-1 bg-white ml-10"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-xl items-center ">
                <Image
                  src="./assets/square.svg"
                  alt=""
                  height={30}
                  width={30}
                />

                <p className="text ">Tips To Improve</p>
              </div>

              <div className="h-1 bg-white ml-10"></div>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-no-repeat bg-center bg-lightgray h-screen absolute bottom-0 w-full flex flex-col gap-10 items-center justify-end py-16"
          style={{ backgroundImage: "url('./assets/bg.svg')" }}
        >
          {" "}
          <div className="flex flex-col justify-center items-center relative gap-40">
            <h1 className="text-4xl  font-medium">How it works</h1>
            <Image
              src="./assets/works.svg"
              alt=""
              height={500}
              width={500}
              className="absolute top-0"
            />
            <div className="flex text-lg justify-between  ">
              <p className="w-[171px] text-center">Answer few questions</p>
              <p className="w-[150px] text-center">
                Register using phone and OTP
              </p>
              <p className="w-[200px] text-center ">
                Get report and personal roadmap
              </p>
            </div>
          </div>
          <button className="rounded-full font-medium text-xl bg-orange-500 hover:bg-orange-400 shadow-md px-10 py-4 mt-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
