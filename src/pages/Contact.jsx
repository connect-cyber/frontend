import { assest } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { useSendEmailStore } from "@/store/useSendEmailStore";
import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
  const { sendingContactUsEmail, loading } = useSendEmailStore();
  const [reCaptchaValue, setRecaptchaValue] = useState("");
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function submitHandler(e) {
    e.preventDefault();
    if (!reCaptchaValue) {
      toast.error("⚠️ Please verify that you are not a robot!");
      return;
    }
    const result = await sendingContactUsEmail({
      ...contactData,
      reCaptchaValue,
    });
    if (result.success) {
      navigate("/");
    }
    setContactData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
    captchaRef.current.reset();
    setRecaptchaValue("");
  }

  const onChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div
      className="flex items-center justify-center min-h-[100vh] p-4 pt-[73px] lg:pt-[83px]"
      style={{
        backgroundImage: `url(${assest.contactbg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Contact Form Card with blur + transparency */}
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 p-8 border border-white/40">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-800 mt-2">
            We’d love to hear from you. Please fill out the form below.
          </p>
        </div>

        <form className="space-y-6" onSubmit={submitHandler}>
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-900 md:text-[18px] lg:text-xl"
              >
                First Name
              </label>
              <input
                onChange={changeHandler}
                value={contactData.firstName}
                name="firstName"
                type="text"
                id="firstName"
                placeholder="John"
                className="text-[17px] mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm bg-white/60 backdrop-blur-sm focus:border-[#00274D] focus:ring-2 focus:ring-[#004080] focus:ring-offset-1 outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-900 md:text-[18px] lg:text-xl"
              >
                Last Name
              </label>
              <input
                name="lastName"
                onChange={changeHandler}
                value={contactData.lastName}
                type="text"
                id="lastName"
                placeholder="Doe"
                className="text-[17px] mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm bg-white/60 backdrop-blur-sm focus:border-[#00274D] focus:ring-2 focus:ring-[#004080] focus:ring-offset-1 outline-none transition"
              />
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 md:text-[18px] lg:text-xl"
              >
                Phone
              </label>
              <input
                name="phone"
                onChange={changeHandler}
                value={contactData.phone}
                type="tel"
                id="phone"
                placeholder="+91 98765 43210"
                className="text-[17px] mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm bg-white/60 backdrop-blur-sm focus:border-[#00274D] focus:ring-2 focus:ring-[#004080] focus:ring-offset-1 outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 md:text-[18px] lg:text-xl"
              >
                Email
              </label>
              <input
                name="email"
                onChange={changeHandler}
                value={contactData.email}
                type="email"
                id="email"
                placeholder="you@example.com"
                className="text-[17px] mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm bg-white/60 backdrop-blur-sm focus:border-[#00274D] focus:ring-2 focus:ring-[#004080] focus:ring-offset-1 outline-none transition"
              />
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900 md:text-[18px] lg:text-xl"
            >
              Tell us how we can help
            </label>
            <textarea
              name="message"
              value={contactData.message}
              onChange={changeHandler}
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="text-[17px] mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm bg-white/60 backdrop-blur-sm focus:border-[#00274D] focus:ring-2 focus:ring-[#004080] focus:ring-offset-1 outline-none resize-none transition"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              ref={captchaRef}
              sitekey={SITE_KEY}
              onChange={onChange}
            />
          </div>

          {/* Button */}
          <div className="text-center">
            {loading ? (
              <Button
                disabled
                className="w-full bg-[#00274D] text-[17px] lg:text-2xl"
              >
                <Loader2 className="mr-4 animate-spin text-[17px] lg:text-2xl" />{" "}
                Please Wait
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!reCaptchaValue || loading}
                className="w-full bg-[#00274D] text-[17px] lg:text-2xl"
              >
                Send Message
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
