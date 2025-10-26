import { assest } from "@/assets/assets";
import { Modal } from "@/components/ModelpopUp";
import React, { useState } from "react";

function FinancialLanding() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="min-h-[100vh] pb-[30px] max-w-[1500px] mx-auto px-1 pt-[60px] lg:pt-[70px]">
      {/* HeroSection */}
      <div className="relative pt-4 w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <img src={assest.new_f} alt="" className="w-full h-full object-cover" />
        <div className="absolute mt-4 top-0 left-0 right-0 bottom-0 bg-black/40 flex items-center justify-end flex-col">
          <h1 className="text-xl md:text-3xl lg:text-4xl text-white text-center font-bold px-1 sm:px-2 md:px-3 lg:px-4 mt-5">
            Financial Literacy for School Students.
          </h1>

          <div className="mt-5 mb-10 w-full px-1 sm:px-2 md:px-3 lg:px-4 flex justify-center items-center ">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="px-6 cursor-pointer text-white py-3 bg-pink-500 hover:bg-pink-600 font-semibold rounded-full shadow-lg transition"
            >
              Book Demo Class
            </button>
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="mt-10">
        <div>
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Financial literacy Course?
          </h1>
          <p className="text-[17px] md:text-xl text-center font-semibold gap-x-[100px] lg:text-2xl mt-8">
            Financial literacy is one of the most essential life skills every
            child should learn early. While schools focus on academics, most
            kids grow up with little idea about money management, savings, and
            smart financial decisions. This course bridges that gap by teaching
            children how money works in a simple, engaging, and practical way.
          </p>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row">
            <img
              src={assest.boy_gold}
              className="object-cover rounded-[20px] max-h-[320px] min-h-[280px] max-[420px]:max-w-[300px] sm:min-w-[410px] max-w-[420px] sm:w-[75%] md:w-[45%] lg:w-[60%] md:rounded-[30px] lg:rounded-[35px]"
            />
            <div className="px-5 mt-5 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <h1 className="text-xl mt-2 mx-auto text-center font-bold md:text-3xl lg:text-3xl">
                Key Benefits for Kids
              </h1>
              <li className="mt-3 text-[16px] lg:text-xl">
                Builds a strong foundation in money management from a young age.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Develops smart saving habits and financial discipline
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Improves decision-making skills for real-life situations
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Encourages entrepreneurial and problem-solving thinking
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Makes learning fun through activities, games, and real-world
                examples.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Prepares children for financial independence in the future.
              </li>
            </div>
          </div>
          <div className="mt-5 w-full px-1 sm:px-2 md:px-3 lg:px-4 flex justify-center ">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="px-6 cursor-pointer text-white py-3 bg-pink-500 hover:bg-pink-600 font-semibold rounded-full shadow-lg transition"
            >
              Book Demo Class
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-xl mt-2 mx-auto text-center font-bold md:text-3xl lg:text-3xl">
            About The Course
          </h1>
          <div className="mt-2 flex flex-col items-center min-[900px]:flex-row-reverse">
            <img
              src={assest.hs}
              className="object-cover rounded-[20px] max-h-[320px] min-h-[280px] max-[420px]:max-w-[300px] sm:min-w-[410px] max-w-[420px] sm:w-[75%] md:w-[45%] lg:w-[60%] md:rounded-[30px] lg:rounded-[35px]"
            />
            <div className="px-5 mt-5 md:px-6 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-xl text-center font-semibold gap-x-[100px] lg:text-2xl">
                Our Financial Literacy program is specially designed for
                school-aged children to introduce them to :
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Basics of money: earning, saving, spending.
              </li>
              <li className="mt-3 text-[16px] lg:text-xl">
                Importance of budgeting and planning.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Difference between needs and wants.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Introduction to banking, digital payments, and safe
                transactions.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Basics of investments, interest, and the power of compounding.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Fun activities, quizzes, and projects to practice financial
                concepts.
              </li>
            </div>
          </div>
          <p className="text-[16px] md:text-xl text-center font-bold gap-x-[100px] lg:text-2xl mt-8">
            The course is interactive, age-appropriate, and delivered by
            experienced trainers and course designed by IIM Alumnus who has huge
            experience in teaching school kids.
          </p>
          <div className="mt-5 w-full px-1 sm:px-2 md:px-3 lg:px-4 flex justify-center ">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="px-6 cursor-pointer text-white py-3 bg-pink-500 hover:bg-pink-600 font-semibold rounded-full shadow-lg transition"
            >
              Book Demo Class
            </button>
          </div>
        </div>

        <div className="mt-13">
          <h1 className="text-xl mt-2 mx-auto text-center font-bold md:text-3xl lg:text-3xl">
            Why Parents Like This Course?
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row">
            <img
              src={assest.piggy_bank}
              className="object-cover rounded-[20px] max-h-[320px] min-h-[280px] max-[420px]:max-w-[300px] sm:min-w-[410px] max-w-[420px] sm:w-[75%] md:w-[45%] lg:w-[60%] md:rounded-[30px] lg:rounded-[35px]"
            />
            <div className="px-5 mt-5 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <li className="text-[16px] lg:text-xl">
                Gives children a head-start in managing money wisely.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Builds responsibility and confidence in kids.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Provides practical skills not taught in regular school
                curriculum.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Helps parents raise financially smart and independent children.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Creates a lifelong learning habit for better financial
                decisions.
              </li>
            </div>
          </div>
          <div className="mt-5 w-full px-1 sm:px-2 md:px-3 lg:px-4 flex justify-center ">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="px-6 cursor-pointer text-white py-3 bg-pink-500 hover:bg-pink-600 font-semibold rounded-full shadow-lg transition"
            >
              Book Demo Class
            </button>
          </div>
        </div>

        <div className="mt-7 md:mt-9 lg:mt-12">
          <h1 className="px-1 text-xl mt-2 mx-auto text-center font-bold md:text-3xl lg:text-3xl">
            What Will Students Gain From The Course?
          </h1>
          <p className="px-3 text-[16px] md:text-xl text-center font-semibold gap-x-[100px] mt-4 lg:text-2xl">
            The Financial Literacy course helps the school kids to understand
            the basics which ultimately enables them to : 
          </p>
          <div className="flex justify-center items-center flex-col">
            <div className="px-5 lg:px-6">
              <li className="text-[16px] lg:text-xl mt-2">
                Set clear <b>personal financial goals</b> and practice smart
                spending by knowing the difference between needs and wants, and
                recognizing how ads influence choices.
              </li>

              <li className="text-[16px] lg:text-xl mt-1">
                Learn <b>how to earn, budget, and save </b> through allowances,
                chores, gigs, and by tracking expenses to grow money with
                interest and investments.
              </li>
              <li className="text-[16px] lg:text-xl mt-1">
                Understand <b> digital money in India,</b> including UPI, online
                banking, and safe transaction practices while avoiding fraud and
                digital debt.
              </li>
              <li className="text-[16px] lg:text-xl mt-1">
                Explore <b> financial tools and protections </b> like credit,
                borrowing, insurance, and taxation in India to manage money
                responsibly.
              </li>
              <li className="text-[16px] lg:text-xl mt-1">
                Discover <b> entrepreneurship and investing basics</b> to build
                your own online financial roadmap and achieve long-term money
                success.
              </li>
            </div>
            <div className="mt-5 w-full px-1 sm:px-2 md:px-3 lg:px-4 flex justify-center items-center ">
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
                className="px-6 cursor-pointer text-white py-3 bg-pink-500 hover:bg-pink-600 font-semibold rounded-full shadow-lg transition"
              >
                Book Demo Class
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
    </section>
  );
}

export default FinancialLanding;
