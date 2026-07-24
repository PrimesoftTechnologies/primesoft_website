"use client";
import Lottie from "lottie-react";
import animationData from "../../public/images/coming-soon.json"

export default function Custom404() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-[#0F172B] via-[#1D293D] to-[#0F172B]">
      <div className=" flex justify-center">
        <div className="h-auto w-180">
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
      </div>
    </div>
  );
}
