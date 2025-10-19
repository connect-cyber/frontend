import { assest } from "@/assets/assets";
import SlidingPartners from "@/components/slidePartner";
import React from "react";
import { Link } from "react-router-dom";

function TrainingAndPlacement() {
  return (
    <section className="min-h-[100vh] max-w-[1500px] mx-auto px-1">
      {/* HeroSection */}
      <div className="relative pt-[73px] lg:pt-[86px] w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <img
          src={assest.launch_hero}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute mt-[88px] top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-center items-center flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold px-1 sm:px-2 md:px-3 lg:px-4 mt-5">
            Enhanced Trainings for Better Employability
          </h1>
          {/* <p className="px-1 sm:px-2 md:px-3 lg:px-4 text-white mt-3 text-xl md:text-2xl text-center max-w-[800px]">
            Improve confidence and communication skills with this beginner's
            course Improve confidence and communication skills with this
            beginner's course
          </p> */}
        </div>
      </div>

      {/* 2nd Section */}
      <div className="mt-9 lg:mt-15">
        <div>
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Live Training to Boost Student Employability
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:min-w-[510px] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden">
              <img
                src={assest.career}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>
            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Equip your students with the skills demanded by modern employers
                through our blend of technical and non-technical live training
                modules.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Interactive sessions in coding, data analysis, communication,
                teamwork, and business strategy.{" "}
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Expert trainers with practical industry experience facilitate
                hands-on, project-based learning.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Immediate feedback and collaborative activities ensure every
                participant is ready for job challenges.
              </li>
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-15">
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Comprehensive Placement & Career Support
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row-reverse">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden">
              <img
                src={assest.touch_icon}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>

            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Help your students stand out with our dedicated placement
                resources and guidance.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Individualized CV building and resume enhancement using
                industry-standard templates.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Mock interviews and HR screening simulations with targeted
                feedback to build confidence.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Specialized workshops in personal branding, soft skills, and
                successful interview strategies.
              </li>
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-15">
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Career Pathway & Placement Portal
          </h1>
          <div className="mt-2 flex flex-col items-center min-[900px]:flex-row">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden mt-4">
              <img
                src={assest.individual}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>
            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Access to placement drives and networking opportunities across
                sectors.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Personalized mentoring for students from enrolment in training
                to final placement offer.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Dedicated team for updates, resources, and continuous support at
                every step.
              </li>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[15px] text-center font-semibold gap-x-[100px] md:text-xl lg:text-2xl mt-8">
        Connect with us today to transform your institution’s placement outcomes
        and empower your training and placement team for student success. Let’s
        build the future workforce together—
        <Link
          className="text-blue-700 transition-all duration-300 hover:underline hover:text-blue-900"
          to="/contact"
        >
          {"  "}reach out now for a customized training and placement strategy.
        </Link>
      </p>

      <SlidingPartners />
    </section>
  );
}

export default TrainingAndPlacement;
