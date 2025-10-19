import { assest } from "@/assets/assets";
import SlidingPartners from "@/components/slidePartner";
import React from "react";
import { Link } from "react-router-dom";

function Transform() {
  return (
    <section className="min-h-[100vh] max-w-[1500px] mx-auto px-1">
      {/* HeroSection */}
      <div className="relative pt-[73px] lg:pt-[83px] w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <img
          src={assest.hero_transform}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute mt-[76px] top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-center items-center flex-col">
          <h1 className="text-2xl text-center md:text-3xl lg:text-4xl text-white font-bold px-1 sm:px-2 md:px-3 lg:px-4 mt-5">
            Cost Effective Enrollment Solutions Provider
          </h1>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="mt-9 lg:mt-15">
        <div>
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Built for Higher Education Admissions Leaders
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:min-w-[510px] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden">
              <img
                src={assest.higher_dummy}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>
            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                A comprehensive admissions growth system designed to unify
                marketing, counseling, and enrollment—all on a single CRM
                platform. It ensures faster processing, higher conversion, and a
                smooth experience for every applicant.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Integrates admissions activities into one cohesive workflow
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Provides process control combined with intelligent outreach
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Speeds up your team’s response and decision-making
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Delivers a seamless, applicant-friendly journey from inquiry to
                enrollment
              </li>
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-15">
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Marketing Automation & 360-Degree Targeting
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row-reverse">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden">
              <img
                src={assest.crm}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>

            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Achieve better recruitment outcomes through smart automation and
                a full-spectrum approach to reaching prospective students.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Capture leads instantly from web, forms, partner channels,
                events, and helplines
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Nurture candidates with personalized SMS, email and WhatsApp
                messaging
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Use data-driven triggers based on applicant activity to deliver
                timely communication
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Combine online digital outreach with on-ground efforts, kiosks,
                and campus visits
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Sync offline leads instantly with your central CRM to keep
                counselors informed and responsive
              </li>
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-15">
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Why We Are Better
          </h1>
          <div className="mt-2 flex flex-col items-center min-[900px]:flex-row">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden mt-4">
              <img
                src={assest.why_choose_us}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>
            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Purpose-built specifically for higher education institutions
                with deep domain expertise, our playbook offers features and
                ease-of-use not found in general sales tools.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Custom workflows tailored to university and college admissions
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Stable deployments with transparent university and college
                internal compliance.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Simple dashboards and mobile access designed for field and
                counseling teams
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Guided actions that reduce drop-offs and improve funnel
                efficiency
              </li>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[15px] text-center font-semibold gap-x-[100px] md:text-xl lg:text-2xl mt-8">
        At MindCruize, we believe universities and colleges should not have to
        burn cash to get the right students. That’s why we built a
        performance-driven student outreach playbook designed to boost
        enrollments while reducing acquisition costs.
        <Link
          className="text-blue-700 transition-all duration-300 hover:underline hover:text-blue-900"
          to="/contact"
        >
          {"  "}Schedule a meeting today to know more.
        </Link>
      </p>

      <SlidingPartners />
    </section>
  );
}

export default Transform;