import { assest } from "@/assets/assets";
import SlidingPartners from "@/components/slidePartner";
import React from "react";
import { Link } from "react-router-dom";

function MindChamps() {
  return (
    <section className="min-h-[100vh] max-w-[1500px] mx-auto px-1">
      {/* HeroSection */}
      <div className="relative pt-[73px] lg:pt-[83px] w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <img
          src={assest.mind_hero}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute mt-[88px] top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-center items-center flex-col">
          {/* <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold px-1 sm:px-2 md:px-3 lg:px-4 mt-5">
            Online Public Speaking Classes for Kids
          </h1>
          <p className="px-1 sm:px-2 md:px-3 lg:px-4 text-white mt-3 text-xl md:text-2xl text-center max-w-[800px]">
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
            New Age Skills for Future-Ready Kids
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:min-w-[510px] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden">
              <img
                src={assest.mind_champ_girl}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>
            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Today’s fast-changing world demands more than textbook
                knowledge. It is essential for children to build new age skills
                early, with content curated by the nation’s top 1% educators for
                maximum impact.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Skills like problem-solving, creativity, teamwork, and emotional
                intelligence foster adaptability and long-term growth.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Learning crafted by expert educators ensures children receive
                the best and most relevant knowledge for today’s world.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Engaging, hands-on modules empower kids to thrive academically
                and personally, setting a foundation for future success.
              </li>
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-15">
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Public Speaking Course – Unlock Confidence & Growth
          </h1>
          <div className="mt-6 flex flex-col items-center min-[900px]:flex-row-reverse">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden">
              <img
                src={assest.mind_champ_boy}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>

            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Public speaking is far more than just talking—it is a gateway to
                confidence, self-expression, and all-round development.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Early exposure to public speaking helps children conquer stage
                fright and organize their thoughts clearly.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Strong communication nurtures better social skills, leadership
                qualities, and higher self-esteem.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                A confident speaker stands out in academics, co-curriculars, and
                future workplaces—giving your child a lifelong advantage.
              </li>
            </div>
          </div>
        </div>

        <div className="mt-9 lg:mt-15">
          <h1 className="text-xl mx-auto text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Financial Literacy for Young Minds
          </h1>
          <div className="mt-2 flex flex-col items-center min-[900px]:flex-row">
            <div className="max-h-[320px] max-[420px]:max-w-[98%] max-w-[98%] sm:min-w-[410px] sm:w-[75%] md:w-[45%] lg:w-[85%] lg:max-w-[510px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden mt-4">
              <img
                src={assest.mind_champ_last}
                className="object-cover rounded-[20px] w-full h-full"
              />
            </div>
            <div className="px-5 mt-5 sm:px-3 md:px-4 md:ml-5 lg:ml-10 flex flex-col justify-center">
              <p className="text-[15px] md:text-xl font-semibold gap-x-[100px] lg:text-2xl">
                Financial literacy is a vital life skill needed in today’s
                evolving society, best developed from an early age.
              </p>
              <li className="mt-3 text-[16px] lg:text-xl">
                Introduces children to saving, budgeting, and smart money habits
                in a simple, fun way.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Builds early independence and responsible decision-making for
                lifelong financial health.
              </li>
              <li className=" text-[16px] lg:text-xl mt-1">
                Prepares children to navigate a digital world with evolving
                currencies and empowers them with real-world readiness.
              </li>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[15px] text-center font-semibold gap-x-[100px] md:text-xl lg:text-2xl mt-8">
        Empower your child with skills that matter—explore our programs designed
        to shape confident, future-ready individuals.
        <Link
          className="text-blue-700 transition-all duration-300 hover:underline hover:text-blue-900"
          to="/contact"
        >
          {"  "}Contact us today to take the first step!
        </Link>
      </p>

      <SlidingPartners />
    </section>
  );
}

export default MindChamps;
