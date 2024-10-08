"use client";
import React from "react";
import Boardingtest from "@/public/icons/Boardingtest.svg";
import Link from "next/link";

const BoardingCompatibilityTestHero = () => {
  return (
    <>
      <div className="md:mx-20">
        <h1 className="text-[2rem] md:text-[3.5rem] text-[#075D70] text-center pb-5 md:pb-8 font-bold">
          BOARDING COMPATIBILITY TEST
        </h1>
        <div
          className="w-full h-[30.375rem] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Boardingtest.src})` }}
        >
          <div className="w-full   md:w-[22.563rem] h-[17.5rem] px-10 md:px-0 md:mx-12 mt-10 space-y-7   absolute    text-white  ">
            <p className="md:mt-2 text-justify text-[14px]  md:text-[1rem] ">
              Our Boarding Compatibility Test evaluates if your child is
              mentally and emotionally prepared for the boarding school
              experience. This comprehensive tool includes 25 insightful
              questions created by psychologists, followed by expert psychiatric
              counseling. Gain valuable insights into your child&apos;s readiness for
              this transformative journey and ensure they are fully prepared for
              success in a boarding school environment.
            </p>
            <div className="cursor-pointer w-[7.5rem] h-[2.0rem] md:w-[18.75rem] md:h-[3.5rem] bg-gradient01  border-custom rounded-md flex items-center justify-center text-[1rem] ">
              <button className="text-white">Enroll Now</button>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div className="hidden  md:hidden  w-full h-[82px] bg-primary02 mt-8 lg:flex lg:items-center px-12 text-white gap-10 rounded-lg">
          <Link href="#Compatibility Test">
            <div className="border w-[12.8rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Compatibility Test</button>
            </div>
          </Link>
          <Link href="#Psychiatric Evaluation">
            <div className="border w-[12.75rem] h-[45px] rounded-md flex justify-center items-center">
              <button>Psychiatric Evaluation</button>
            </div>
          </Link>
          
        
        </div>

        {/* mobile */}
        <div className="sm:block md:block lg:hidden px-4 py-6">
          <div className="w-full h-auto bg-primary02 rounded-md text-white text-[0.75rem] flex flex-wrap gap-2 p-4">
            <Link href="#Compatibility Test">
              {" "}
              <h1 className="border border-white rounded-md p-2">
              Compatibility Test
              </h1>
            </Link>
            <Link href="#Psychiatric Evaluation">
              <h1 className="border border-white rounded-md p-2">
              Psychiatric Evaluation
              </h1>
            </Link>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardingCompatibilityTestHero;
