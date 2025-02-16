import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import "@fontsource/roboto";
import { RainbowButton } from "./ui/rainbow-button";
import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";
import { ArrowDownToLine, CheckIcon } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-black p-20 md:shadow-xl">
      {/* Download CV Button */}
      <div className="absolute top-4 right-4 z-20 bg-white rounded-lg shadow-lg">
        <a href="/Devang.pdf" download>
          <AnimatedSubscribeButton className="w-50 text-black">
            <span className="group inline-flex items-center">
              Download CV
              <ArrowDownToLine className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Downloaded
            </span>
          </AnimatedSubscribeButton>
        </a>
      </div>
      
      {/* Background Animation */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.6}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12"
        )}
      />

      {/* Status Indicator */}
      <div className="flex items-center space-x-2 -space-y-4">
        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
        <TextGenerateEffect
          words="Available for opportunities"
          className="text-xl font-medium  text-white"
        />
      </div>

      {/* Hero Text */}
      <TextGenerateEffect
        words="👋 Hi, I'm Devang"
        className="text-center text-8xl font-extrabold tracking-tighter text-white font-roboto"
      />
      <TextGenerateEffect
        words="A Full Stack Developer"
        className="text-center text-5xl font-semibold tracking-tighter text-green-500 mt-4"
      />
      <TextGenerateEffect
        words="Welcome to my portfolio"
        className="text-center text-3xl font-bold tracking-tighter text-blue-500 mt-4"
      />
      <span className="animate-bounce absolute bottom-0 align-itens-center justify-content-center">
        <RainbowButton>Learn More 👇</RainbowButton>
      </span>
    </div>
  );
}
