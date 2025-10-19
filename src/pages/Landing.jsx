import { assest } from "@/assets/assets";
import { Modal } from "@/components/ModelpopUp";
import React, { useState } from "react";

function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="min-h-[100vh] pb-[30px] max-w-[1500px] mx-auto px-1 pt-[60px] lg:pt-[70px]">
      {/* HeroSection */}
      <div className="relative pt-4 w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <img
          src={assest.new_public}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute mt-4 top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-end items-center flex-col">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-center text-white font-bold px-1 sm:px-2 md:px-3 lg:px-4">
            Online Public Speaking Classes for Kids
          </h1>
          <p className="px-1 sm:px-2 md:px-3 lg:px-4 text-white mt-1 text-xl md:text-2xl text-center">
            Improve confidence and communication skills with this beginner's
            course
          </p>

          <div className="mt-3 mb-10 w-full px-1 sm:px-2 md:px-3 lg:px-4 flex justify-center items-center">
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
            Why Public Speaking Course:
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row">
            <img
              src={assest.boy_singing}
              className="object-cover rounded-[20px] max-h-[320px] min-h-[280px] max-[420px]:max-w-[300px] sm:min-w-[410px] max-w-[420px] sm:w-[75%] md:w-[45%] lg:w-[60%] md:rounded-[30px] lg:rounded-[35px]"
            />
            <div className="px-5 mt-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Children in public speaking classes gain proven advantages for
                school and personal growth. Key Benefits :-
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Confidence Boost: 70% of kids who learn public speaking feel
                more confident and shine in class.{" "}
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Better School Performance: Speaking skills help children earn
                higher grades and participate actively in school activities.{" "}
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Brain Power: Training improves language skills, memory, and
                flexible thinking—key for academic success and strong brain
                development.{" "}
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Future Leaders: Regular speakers stand out in debates,
                competitions, and leadership roles as they grow.{" "}
              </li>
            </div>
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

        <div className="mt-9">
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            About The Course
          </h1>
          <div className="mt-2 flex flex-col items-center min-[900px]:flex-row-reverse">
            <img
              src={assest.girl_singing}
              className="object-cover rounded-[20px] max-h-[320px] min-h-[280px] max-[420px]:max-w-[300px] sm:min-w-[410px] max-w-[420px] sm:w-[75%] md:w-[45%] lg:w-[60%] md:rounded-[30px] lg:rounded-[35px]"
            />
            <div className="px-5 mt-5 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                The course is designed to transform the kids into confident,
                happy speakers who shine in school and beyond. Fun lessons and
                friendly coaching help every child express the ideas with ease
                and joy.
              </p>
              <h1 className="text-xl mt-2 mx-auto text-center font-semibold md:text-3xl lg:text-3xl">
                Why Parents Love This Course?
              </h1>
              <li className="mt-3 text-[16px] lg:text-xl">
                Confidence Boost: 70% of kids who learn public speaking feel
                more confident and shine in class.{" "}
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Better School Performance: Speaking skills help children earn
                higher grades and participate actively in school activities.{" "}
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Brain Power: Training improves language skills, memory, and
                flexible thinking—key for academic success and strong brain
                development.{" "}
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Future Leaders: Regular speakers stand out in debates,
                competitions, and leadership roles as they grow.{" "}
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
          <h1 className="px-1 text-xl mt-2 mx-auto text-center font-semibold md:text-3xl lg:text-3xl">
            What Will Students Gain From The Course?
          </h1>
          <p className="px-3 text-[15px] md:text-xl text-center font-semibold gap-x-[100px] mt-4 lg:text-2xl">
            The Public Speaking course lays the strong foundation which :-
          </p>
          <div className="flex justify-center items-center flex-col">
            <div className="px-5 lg:px-6">
              <li className="text-[16px] lg:text-xl mt-2">
                Builds strong communication skills by mastering{" "}
                <b> Voice and Speech Basics, Advanced Voice Modulation,</b> and
                expressive use of tone and emotion.
              </li>

              <li className="text-[16px] lg:text-xl mt-1">
                Enhances stage presence through effective{" "}
                <b> Body Language and Gestures, Use of Visual Aids & Props,</b>{" "}
                and confident delivery techniques.
              </li>
              <li className="text-[16px] lg:text-xl mt-1">
                Develops structured, engaging content with{" "}
                <b> Speech Organization, Storytelling Essentials,</b> and
                creative Storytelling Project & Podcast Introduction.
              </li>
              <li className="text-[16px] lg:text-xl mt-1">
                Strengthens quick thinking and persuasive ability through
                <b>
                  {" "}
                  Impromptu Speaking, Debate Basics, Persuasive Speaking,
                </b>{" "}
                and handling audience <b> Questions & Feedback.</b>
              </li>
              <li className="text-[16px] lg:text-xl mt-1">
                Inspires professional-level confidence with{" "}
                <b> Presentation Skills Practice </b> and impactful{" "}
                <b> TED Talk Style Speech </b>delivery.
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

export default Landing;
