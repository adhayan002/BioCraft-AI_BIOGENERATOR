import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { HeartHandshake, User } from "lucide-react";
import UserInput from "@/components/homecomponents/userinput";
import Output from "@/components/homecomponents/Output";
import { BioProvider } from "@/context/BioContext";

export default function Home() {
  return (
    <main className="relative grid grid-cols-1 slg:grid-cols-2 gap-12 px-4 py-12 sm:px-8 sm:py-16 md:px-10 slg:p-16 lg:p-24">
      <div className="col-span-full group w-full flex flex-col items-center justify-center space-y-4 mb-4 text-center">
        <div>
          <AnimatedGradientText className="px-6 py-2 border rounded-full">
            Welcome  <HeartHandshake className="text-gray-900" />
          </AnimatedGradientText>
        </div>
        <h1 className="font-extrabold text-4xl slg:text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4 pb-2">
          CRAFT THE PERFECT BIO IN SECONDS!!
        </h1>
        <p className="text-sm md:text-lg text-accent">
          Answer a few questions and Our Model will try to capture u at best!
        </p>
      </div>
      <BioProvider>
        <UserInput/>
        <Output/>
      </BioProvider>
    </main>
  );
}
