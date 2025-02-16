import React, { useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";

// Background Component
export const Background = () => {
  console.log("Rendering Background component");

  const educationData = [
    {
      title: "2020",
      content: (
        <div>
          <h3 className="text-lg sm:text-4xl font-semibold text-white">High School</h3>
          <p className="text-gray-400 mt-1">The South Indian Cultural Association of Senior Secondary Schools</p>
          <p className="text-gray-300 mt-1">Secured 88% and ranked 5th in class</p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-lg sm:text-4xl font-semibold text-white">Senior High School</h3>
          <p className="text-gray-400 mt-1">The South Indian Cultural Association of Senior Secondary Schools</p>
          <p className="text-gray-300 mt-1">Secured 81% and ranked 6th in class</p>
        </div>
      ),
    },
    {
      title: "2022-26",
      content: (
        <div>
          <h4 className="text-lg sm:text-4xl font-semibold text-white">Bachelors in Technology</h4>
          <p className="text-gray-400 mt-1">Shri Vaishnav Institute of Information Technology</p>
          <p className="text-gray-300 mt-1">Secured an average of 8CGPA</p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-8">
      {/* Timeline Component */}
      <div className="w-full max-w-6xl">
        <Timeline data={educationData} />
      </div>
    </div>
  );
};