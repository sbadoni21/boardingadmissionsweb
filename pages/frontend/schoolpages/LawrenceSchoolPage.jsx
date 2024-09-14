"use client";
import React from "react";
import Faq from "@/components/frontend/Faqdata";
import Image from "next/image";
import Star from "@/components/frontend/Ratings";
import schoolFAQs from "@/utils/frontend/FaqData";
import GetPrepared from "@/components/frontend/GetPrepared";
import EnquiryForm from "@/components/frontend/EnquiryForm";

const star = [
  {
    id: 1,

    ratingByPerson: 4,
  },
];

const data = [
  {
    title: "Eligibility",
    description:
      "Lawrence School accepts applications from boys and girls aged 9 to 16. Note that there are no admissions available for Classes X and XII.",
  },
  {
    title: "Registration Timeframe",
    description:
      "It's essential to register in advance. Prospective students should aim to complete their registration early.",
  },
  {
    title: "Class-Specific Age Criteria",
    items: [
      "Class V: 8y 9m - 10y 3m",
      "Class VI: 9y 9m - 11y 3m",
      "Class VII: 10y 9m - 12y 3m",
      "Class VIII: 11y 9m - 13y 3m",
      "Class IX: 12y 9m - 14y 3m",
      "Class XI: 14y 9m - 16y 3m",
    ],
  },
  {
    title: "Getting the Registration Form",
    description:
      "The form can be obtained from the school office or downloaded from the official website.",
  },
  {
    title: "Submission",
    description:
      "Complete the form and send it along with the child's birth certificate, the previous school's Transfer Certificate, and two recent passport-sized photographs.",
  },
  {
    title: "Fee Payment",
    description:
      "Pay the registration fee via Demand Draft or online transfer.",
  },
  {
    title: "Confirmation",
    description:
      "After the payment is processed, the school will issue a registration number, which will be communicated via post or email.",
  },
  {
    title: "Lawrence School Entrance Exam Preparation",
    description:
      "Students must prepare for tests in English, Mathematics, Science, and Hindi. Each subject test carries 100 marks and lasts for one hour. There is a provision for Hindi exemption with valid proof.",
  },
  {
    title: "Test and Interaction",
    description:
      "Applicants will participate in an online test followed by a personal interaction.",
  },
  {
    title: "Results",
    description:
      "Successful candidates will receive further instructions on completing the admission process.",
  },
];
function LawrenceSchoolPage() {
  const LawrenceSchool =
    schoolFAQs.find((school) => school.school === "LawrenceSchool")?.faqs || [];
  return (
    <div className="h-auto w-[100%] poppins">
      <div className="relative lg:px-[30px] xl:px-[50px]  ">
        <div className=" h-[250px] xl:h-[300px] lg:h-[350px] w-[100%] ">
          {" "}
          <Image
            src="/images/SchoolBanner/Lawrenceframe.svg"
            alt="Descriptive text for screen readers"
            className="w-full lg:h-[400px] h-[250px]  object-cover lg:rounded-2xl rounded-b-2xl "
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[13vw] ">
          <Image
            src="/images/SchoolBanner/Lawrencelogo.svg"
            className="absolute inset-0 left-[5%] lg:top-[300px] top-[80%] lg:w-[132px] lg:h-[130px] w-[90px] h-[80px] "
            width={1000}
            height={1000}
            alt="img"
          />
        </div>
      </div>

      <div className="w-[90%] ml-[5%]  mt-[10%] ">
        <div className="relative h-[170px]   xl:h-[180px] md:h-[120px] lg:h-[170px]    w-full  border-b-2  sm:flex sm:justify-between">
          <div className="w-full flex flex-col  lg:gap-5 gap-2">
            <div className="">
              <h1 className="text-[#075D70]  lg:text-[2rem] text-[18px] font-semibold lg:font-bold ">
                Lawrence School, Sanawar, Himanchal Pradesh
              </h1>
            </div>
            <div className="flex text-center lg:gap-3 gap-2 items-center">
              <h2 className="text-[#075D70] ">4.2</h2>

              <div className="border-none ">
                {star.map((star) => (
                  <Star key={star.id} star={star} />
                ))}
              </div>

              {/* <div>
                {
                  [1, 2, 3, 4, 5].map((num) => (
                    <button key={num}>
                      <span className='text-yellow-600'>
                        &#9733;
                      </span>
                    </button>
                  ))
                }
              </div> */}
              <p className="text-[#075D70] ">Google reviews</p>
            </div>

            <div className=" flex sm:w-[50%] gap-3 mb-2 sm:mb-0">
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Private School
              </h3>
              <h3 className="px-1 py-1 rounded-md bg-[#6198A3] bg-opacity-[12%] text-black ">
                Estd.- 1995
              </h3>
            </div>
          </div>

          <div className=" sm:absolute  gap-3 flex  sm:right-0 sm:self-center">
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
                       <GetPrepared/>

          </div>
        </div>
        <div className="md:hidden mt-6">
<EnquiryForm/>

</div>
        <div className="space-y-4 w-[90vw]  mt-10 ">
          <div className="">
            <h1 className="text-[#075D70] font-semibold  text-[2rem] ">
              About School
            </h1>
          </div>
          <div>
            <p className="leading-6 w-[88vw] text-[1.15rem] text-justify">
              Lawrence School, Sanawar, is a distinguished educational
              institution nestled in the serene hills of Sanawar. Known for its
              rich history and commitment to excellence, the school offers a
              well-rounded education that blends strong academics with a broad
              array of extracurricular activities. The school&apos;s peaceful
              surroundings provide an ideal learning and personal development
              environment. Lawrence School is dedicated to nurturing students
              into well-rounded, responsible, and globally conscious
              individuals. The faculty consists of experienced professionals
              passionate about guiding young minds and preparing them for future
              challenges.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[#075D70] font-semibold text-[2rem] mt-6 mb-5">
            Fee Structure
          </h2>

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1rem]">
              <li className="font-semibold">
                General Category and NRI/Foreign National:
                <span className="font-normal">
                  Rs. 20,000 (Prospectus: Rs. 5,000; Registration Fee: Rs.
                  15,000)
                </span>
              </li>
              <li className="font-semibold">
                Defense Serving Personnel:
                <span className="font-normal">
                  Rs. 9,500 (Prospectus: Rs. 5,000; Registration Fee: Rs. 4,500)
                </span>
              </li>
              <li className="">
                Payment should be made via Demand Draft to{" "}
                <span className="font-semibold">
                  &quot;Headmaster, The Lawrence School, Sanawar.&quot;
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-[90vw] mb-10 mt-10">
          <div>
            <h1 className="text-[#075D70] font-semibold text-[2rem]">
              Admission Procedure
            </h1>

            <h1 className="pt-4">
              For those interested in
              <span className="font-bold">Lawrence School Admissions</span>,
              here&apos;s a simplified guide to understanding the process:
            </h1>
          </div>

          <div>
            <ul className="list-disc pl-4 space-y-4 text-[1.15rem]">
              {data.map((step, index) => (
                <li key={index}>
                  <span className="font-medium">{step.title}:</span>
                  {step.description}
                  {step.items && (
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      {step.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="text-[1.2rem] pt-4">
            For the most up-to-date information, including specific deadlines,
            it&apos;s recommended to visit the school&apos;s official website.
          </h1>
        </div>

        <div className="mb-10">
          <h1 className="text-[#075D70] font-semibold text-[1.5rem]">
            Downloads
          </h1>
          {/* <h3 className="text-[#D77A61] text-[1.13rem] ">Fee structure</h3> */}
          <h3 className="text-[#D77A61]  text-[1.13rem]">Broucher</h3>
        </div>
      </div>

      <div>
        <Faq data={LawrenceSchool} />
      </div>
    </div>
  );
}

export default LawrenceSchoolPage;
