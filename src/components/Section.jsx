import { assest } from "@/assets/assets";
import React from "react";

function Section() {
  return (
    <section className="w-full max-w-[1500px] mx-auto px-1 mt-5">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-2xl lg:text-4xl font-bold">About Us.</h1>
        <p className="text-center mt-2 font-semibold text-[15px] px-1 md:px-2 lg:text-[19px]">
          MindCruize Education empowers learners across K-12 and higher
          education with extra-curricular and employability-focused programs
          designed for true future readiness. For school students, engaging
          extra-curricular activities foster collaboration and problem-solving,
          while higher education programs unlock industry-aligned skills and
          hands-on experience for career success. Learners build confidence to
          tackle challenges, innovate, and adapt to changing trends, equipping
          them to excel academically and professionally. With MindCruize, each
          step of the educational journey is purposeful, practical, and built
          for tomorrow’s opportunities.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center sm:gap-5 min-[890px]:flex-row md:gap-7 lg:gap-10">
        <div className="max-w-[390px] max-h-[370px] sm:max-w-[370px] sm:max-h-[310px] md:max-w-[400px] md:max-h-[340px] lg:max-w-[500px] lg:max-h-[370px]">
          <img
            src={assest.hand}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div>
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-center mb-2 mt-1">
            Knowledge That Matters
          </h1>
          <p className="px-1 text-[14px] md:text-[16px] lg:text-[18px] text-center md:px-2">
            At MindCruize Education, we deliver Knowledge That Matters: the
            learnings which goes far beyond traditional textbooks to embrace
            real-world relevance. Every course is designed to equip learners
            with practical skills, critical thinking, and the latest industry
            know-how, ensuring a holistic learning experience that truly
            prepares students for future challenges. This approach empowers
            learners to thrive in dynamic professional environments and succeed
            in their chosen careers.{" "}
          </p>
          <ol className="flex justify-center items-center flex-col">
            <li className="text-[14px] md:text-[17px] font-semibold lg:mt-1">
              Industry Expert Driven Courses.
            </li>
            <li className="text-[14px] md:text-[17px] font-semibold">
              Learning Beyond Books.
            </li>
            <li className="text-[14px] md:text-[17px] font-semibold">
              Be Confident & Job Ready.
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center sm:gap-5 min-[890px]:flex-row-reverse md:gap-7 lg:gap-10">
        <div className="max-w-[390px] max-h-[370px] sm:max-w-[370px] sm:max-h-[310px] md:max-w-[400px] md:max-h-[340px] lg:max-w-[500px] lg:max-h-[370px]">
          <img
            src={assest.kid}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-center mb-2 mt-1">
            Learn from the Best
          </h1>
          <p className="px-1 text-[14px] md:text-[16px] lg:text-[18px] text-center md:px-2">
            We believe in the principle of Learn from the Best. Our curriculum
            is meticulously designed to stay in sync with worldwide best
            practices, ensuring students gain knowledge that is globally
            relevant under the leadership and guidance of the top 1% of
            educators and industry experts, who bring unparalleled experience,
            insight, and innovation to every session.
          </p>
          <ol className="flex justify-center items-center flex-col">
            <li className="text-[14px] md:text-[17px] font-semibold lg:mt-1">
              IIM Alumni Initiative
            </li>
            <li className="text-[14px] md:text-[17px] font-semibold">
              Learn from top 1%
            </li>
            <li className="text-[14px] md:text-[17px] font-semibold">
              Top notch Guest Lectures
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center sm:gap-5 min-[890px]:flex-row md:gap-7 lg:gap-10">
        <div className="max-w-[390px] max-h-[370px] sm:max-w-[370px] sm:max-h-[310px] md:max-w-[400px] md:max-h-[340px] lg:max-w-[500px] lg:max-h-[370px]">
          <img
            src={assest.tartanTrack}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-center mb-2 mt-1">
            Be Future Ready
          </h1>
          <p className="px-1 text-[14px] md:text-[16px] lg:text-[18px] text-center md:px-2">
            Be Future Ready with us where learning goes beyond books to build
            capabilities that match the global trends and adopted practices. Our
            future-focused courses blend cutting-edge curriculum, hands-on
            projects, and employability skills to ensure relevance in
            fast-evolving careers. This holistic approach transforms potential
            into performance, empowering graduates to lead, adapt, and excel
            in the real world.
          </p>

          <ol className="flex justify-center items-center flex-col">
            <li className="text-[14px] md:text-[17px] font-semibold lg:mt-1">
              Extra curricular for life skills
            </li>
            <li className="text-[14px] md:text-[17px] font-semibold">
              Interactive Learning
            </li>
            <li className="text-[14px] md:text-[17px] font-semibold">
              Curiosity driven Fun and Learn
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Section;