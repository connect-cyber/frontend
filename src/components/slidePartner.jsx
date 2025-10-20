import { usePartnerUpload } from "@/store/usePartnerUploadStore";
import React, { useEffect } from "react";

export default function SlidingPartners({ speed = 10 }) {

  const { getAllPartnerLogo, allPartnerList } = usePartnerUpload();

  useEffect(() => {
    getAllPartnerLogo();
  }, []);

  const list = [...allPartnerList, ...allPartnerList];

  return (
    <div className="mt-20 max-w-[1200px] mx-auto overflow-hidden mb-10">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl mb-6 font-bold">
        Our Partners
      </h1>
      <div className="relative">
        <div
          className="flex w-max animate-scroll"
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {list.map((p, idx) => (
            <div
              key={p.id + "-" + idx}
              className="flex flex-col justify-between items-center gap-2 sm:gap-3 mr-4 sm:mr-8 px-2 sm:px-3 py-2 rounded-lg border border-transparent hover:scale-105 transition-all duration-300"
            >
              <div className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px]">
                <img
                  src={p.partnerLogo}
                  alt={p.partnerName}
                  className="rounded-full object-cover shadow-sm w-full h-full"
                />
              </div>
              <p className="font-medium text-center">{p.partnerName}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll linear infinite;
          }
        `}</style>
    </div>
  );
}
