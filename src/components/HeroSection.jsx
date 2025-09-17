import { ArrowDown } from "lucide-react";
import ProfileCard from "./ui/ProfileCard";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef(null); // container for hover effect

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-0 -mt-12"
    >
      <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
            <VariableProximity
              label={`Hi, I'm `}
              className="opacity-0 animate-fade-in"
              fromFontVariationSettings="'wght' 700, 'opsz' 5"
              toFontVariationSettings="'wght' 11000, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
            />

            <VariableProximity
              label={`Jibachh Yadav`}
              className="text-primary opacity-0 animate-fade-in-delay-1"
              fromFontVariationSettings="'wght' 900, 'opsz' 5"
              toFontVariationSettings="'wght' 1500, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
            />
          </h1>

          <VariableProximity
            label={`I create stellar web experiences using cutting-edge technologies, specializing in front-end development to deliver beautiful and seamless user interfaces.`}
            className="text-lg md:text-6x3 text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3"
            fromFontVariationSettings="'wght' 300, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 36"
            containerRef={containerRef}
            radius={120}
            falloff="linear"
          />

          <div className="pt-15 opacity-0 animate-fade-in-delay-4">
            <VariableProximity
              label={`View My Work`}
              className="cosmic-button cursor-pointer"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>
        </div>

        {/* Right Side - Profile Card */}
        <div className="opacity-0 animate-fade-in-delay-4 flex justify-center md:justify-end">
          <ProfileCard />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
