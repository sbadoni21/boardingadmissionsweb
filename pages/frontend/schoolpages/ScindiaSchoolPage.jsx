"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import StarRatings from "@/components/frontend/StarRatings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import Broucher from "@/components/frontend/Broucher";
import EnquiryForm from "@/components/frontend/EnquiryForm";
import SchoolCarousel from "../../../components/frontend/SchoolCarousel";

function ScindiaSchoolPage() {
  const Scindia =
    schoolFAQs.find((school) => school.school === "Scindia")?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins ">
      {/* 
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">    
             <Image
            src="/images/SchoolBanner/scindia.svg"
            alt="Descriptive text for screen readers"
           className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/scindialogo.svg"
           className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
          />
        </div>
      </div> */}
      <SchoolCarousel />
      <div className="w-[90%] ml-[5%] mt-6">
        <div className="relative h-[170px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Scindia School, Gwalior, Madhya Pradesh
              </h1>
            </div>
            <StarRatings
              lat={26.2179713}
              lng={78.1569787}
              schoolName={"The Scindia School"}
            />

            {/* <div className=" flex sm:w-[50%] gap-3 mb-2 sm:mb-0">
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Private School
              </h3>
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Estd.- 1995
              </h3>
            </div> */}
          </div>

          <div className=" sm:absolute pt-2  gap-3 flex  sm:right-0 sm:self-center">
            {/* <button className="py-1 px-2 sm:py-1.5 sm:px-2.5 border border-[#075D70] rounded-[5px] flex gap-2">
              <div>
                <Image
                  src="/icons/download.svg"
                  className="w-full h-full pt-1"
                  width={2}
                  height={2}
                  alt="svg"
                />
              </div>

              <p className="text-[#075D70]">Broucher</p>
            </button> */}
            <GetPrepared />
          </div>
        </div>
        <div className="md:hidden mt-6">
          <EnquiryForm />
        </div>
        <div className="space-y-4 w-[90vw]  mt-10 ">
          <div className="">
            <h1 className="text-[#075D70] font-semibold  text-[1.5rem] md:text-[2rem] ">
              About Scindia School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] text-justify">
              Scindia School, founded in 1897, is one of India&apos;s leading
              boys residential schools. Nestled on Gwalior Fort, the school is
              renowned for its integration of modern education with Indian
              traditions, fostering an environment where students excel in
              academics, sports, and arts.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[1.5rem] md:text-[2rem]">
              Scindia Admissions Process
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[14px] md:text-[1.15rem] text-justify">
              Scindia Admissions is designed to select students who are
              well-suited to thrive in the school&apos;s dynamic and challenging
              environment.
            </p>
          </div>
          <div>
            <ul className="list-disc pl-4 space-y-4 text-[14px] md:text-[1.15rem]">
              <li>
                <span className="font-medium"> Choose the Exam:</span> Decide
                between the Common Aptitude Analysis (CAA) and Scindia School
                Aptitude Analysis (SAA), both covering Mathematics, English, and
                Hindi.
              </li>
              <li>
                {" "}
                <span className="font-medium">Exam Centers: </span>Exams are
                conducted in Kolkata, Mumbai, New Delhi, Lucknow, and Gwalior.
              </li>
              <li>
                <span className="font-medium">Exam Schedules:</span> CAA is held
                every third Saturday of November. SAA is in January/February,
                with Gwalior center registrations open until January 27.
                On-the-spot SAA registrations are available.
              </li>
              <li>
                <span className="font-medium"> Aadhar Card Submission:</span>{" "}
                Mandatory for all Indian states except J & K, Assam, Meghalaya.
              </li>
              <li>
                <span className="font-medium">Eligibility for Admission:</span>{" "}
                Candidates for classes VI, VII, and VIII should be under the
                age-appropriate maximum age as of January 1 of the admission
                year. Classes IX and XI may admit exceptionally meritorious
                students if vacancies are available.
              </li>
              <li>
                <span className="font-medium">Interactive Session: </span>
                Shortlisted students will be invited to the school for an
                interactive session including games, sports, and faculty
                interaction.
              </li>
              <li>
                <span className="font-medium">Download Syllabus: </span>
                Available on the school&apos;s website after registration.
              </li>
            </ul>
          </div>
        </div>

        <Broucher
          pdfLink={
            "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/brochure%2FSKVENTRANCE%20ExamBrochure.pdf?alt=media&token=49068628-3c47-46a6-bce6-f7e12568d268"
          }
        />
      </div>

      <div>
        <Faq data={Scindia} />
      </div>
    </div>
  );
}

export default ScindiaSchoolPage;
