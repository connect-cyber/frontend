import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { useSendEmailStore } from "@/store/useSendEmailStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function Modal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const { loading, saveToGoogleSheet } =
    useSendEmailStore();
  const [data, setData] = useState({
    name: "",
    email: "",
    grade: "",
    mobile: "",
  });

  const [utm, setUTM] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  function onClose() {
    setIsOpen(false);
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function submitHandler(e) {
    try {
      e.preventDefault();
      const payload = { ...data, ...utm };
      const googleSheetResult = await saveToGoogleSheet(payload);
      if(googleSheetResult?.success){
        setData({ name: "", email: "", grade: "", mobile: "" });
        setIsOpen(false);
       toast.custom(
  (t) => (
    <div
      className={`${
        t.visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 fixed inset-0 flex items-center justify-center z-50 bg-red-500`}
    >
      <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg">
        Thank you for submitting details. Our team will connect with you soon.
      </div>
    </div>
  ),
  { duration: 3000 }
);

        // toast.success("Thank you for submitting details. Our team will connect with you soon.", {duration: 3000});
         setTimeout(() => {
  navigate("/");
}, 3000);
      }
      // const result = await sendBookOneToOneSession(payload);
      // if (result.success) {
      //   navigate("/");
      //   setData({ name: "", email: "", grade: "", mobile: "" });
      //   setIsOpen(false);
      // }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUTM({
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
    });
  }, []);

  return ReactDOM.createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 ${
        isOpen ? `scale-100` : `scale-0`
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Book One to One Session
        </h2>

        <form className="space-y-4" onSubmit={submitHandler}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm md:text-xl cursor-pointer font-medium"
            >
              Name
            </label>
            <Input
              value={data.name}
              name="name"
              onChange={changeHandler}
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm md:text-xl cursor-pointer font-medium"
            >
              Email
            </label>
            <Input
              value={data.email}
              name="email"
              onChange={changeHandler}
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Class Dropdown */}
          <div>
            <label
              htmlFor="cl"
              className="text-sm font-medium md:text-xl cursor-pointer"
            >
              Grade / Class
            </label>
            <select
              value={data.grade}
              name="grade"
              onChange={changeHandler}
              id="cl"
              className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option disabled value="">
                Select Your Standard
              </option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="text-sm font-medium md:text-xl cursor-pointer"
            >
              Mobile
            </label>
            <Input
              value={data.mobile}
              name="mobile"
              onChange={changeHandler}
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-2 pt-2">
            {loading ? (
              <Button
                disabled
                type="submit"
                className="w-full bg-[#00274D] text-[17px] lg:text-2xl"
              >
                <Loader2 className="mr-4 animate-spin text-[17px] lg:text-2xl" />{" "}
                Please Wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="cursor-pointer w-full text-xl bg-[#00274D] transition-all duration-300 hover:bg-[#004080] text-[17px] lg:text-2xl py-4"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
