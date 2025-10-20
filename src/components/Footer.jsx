import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { assest } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#00274D] text-white font-bold">
      <div className="max-w-[1500px] w-full px-1 mx-auto py-5">
        <div className="flex flex-col md:flex-row md:justify-between gap-3 md:px-2 lg:px-14">
          {/* Logo / About */}
          <div className="flex flex-col items-center md:block">
            <div className="w-20 h-20 mb-4">
              <img src={assest.logo} className="h-full w-full object-cover"/>
            </div>
            <h2 className="text-xl lg:text-2xl mb-3">MindCruize Education</h2>
            <p className="text-sm text-gray-300 font-normal max-w-[300px] md:max-w-[350px] text-center md:text-left md:text-[17px] lg:text-xl">
              Making India Employable by making quality higher education accessible, affordable and AI driven.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:block">
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[17px] text-gray-300 flex flex-col items-center md:block font-normal lg:text-xl">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:font-bold transition-colors"
                >
                  Home
                </Link>
              </li>

            
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white hover:font-bold transition-colors"
                >
                  Contact
                </Link>
              </li>

               <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-white hover:font-bold transition-colors"
                >
                  Refund Policy
                </Link>
              </li>

               <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-white hover:font-bold transition-colors"
                >
                  Terms & conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:block">
            <h3 className="text-xl lg:text-2xl mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-300 font-normal flex flex-col items-center md:block">
              <li className="text-[17px] lg:text-xl">
                Email: connect@mindcruize.com
              </li>
              <li className="text-[17px] lg:text-xl">Phone: +91 77396 32916</li>
              <li className="text-[17px] lg:text-xl">Hours: Mon-Fri 9:00AM - 5:00PM</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:block">
            <h3 className="text-xl lg:text-2xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/people/MindCruize-Education/61574574664843/" className="hover:text-blue-400 transition-colors">
                <FaFacebook size={26} />
              </Link>
              <Link to="https://www.instagram.com/mindcruize.education/" className="hover:text-pink-400 transition-colors">
                <FaInstagram size={26} />
              </Link>
              <Link to="http://linkedin.com/company/mindcruize-education/" className="hover:text-sky-400 transition-colors">
                <FaLinkedin size={26} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400 font-normal">
          © {new Date().getFullYear()} Mindcruize. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;