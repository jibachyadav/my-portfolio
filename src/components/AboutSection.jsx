// src/components/AboutSection.jsx
import { Briefcase, Code, User } from "lucide-react";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

export const AboutSection = () => {
  const containerRef = useRef(null);

  return (
    <section id="about" className="py-24 px-4 relative" ref={containerRef}>
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-2xl font-bold text-center mb-4 flex justify-center gap-2">
          <VariableProximity
            label="About"
            containerRef={containerRef}
            className="inline-block"
            fromFontVariationSettings="'wght' 900, 'opsz' 9"
            toFontVariationSettings="'wght' 1500, 'opsz' 36"
            radius={120}
          />
          <VariableProximity
            label="Me"
            className="text-primary inline-block"
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 900, 'opsz' 9"
            toFontVariationSettings="'wght' 1500, 'opsz' 36"
            radius={120}
          />
        </h2>

        <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          <VariableProximity
            label="Passionate about blending creativity and technology to craft meaningful digital experiences."
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 24"
            radius={120}
          />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Small Intro Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-lg border border-primary/30 text-center animate-float">
              <h3 className="text-xl font-bold text-blue">
                <VariableProximity
                  label="Hi, I’m Jibachh Yadav"
                  containerRef={containerRef}
                  fromFontVariationSettings="'wght' 700, 'opsz' 9"
                  toFontVariationSettings="'wght' 1200, 'opsz' 32"
                  radius={120}
                />
              </h3>

              <h2 className="text-lg font-bold text-white mt-1">
                <VariableProximity
                  label="Front-end Developer"
                  className="text-blue-500"
                  containerRef={containerRef}
                  fromFontVariationSettings="'wght' 700, 'opsz' 9"
                  toFontVariationSettings="'wght' 1200, 'opsz' 32"
                  radius={120}
                />
              </h2>

              <p className="italic text-gray-300 mt-2 text-sm">
                <VariableProximity
                  label="Where creativity meets technology to create impact."
                  containerRef={containerRef}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 800, 'opsz' 20"
                  radius={120}
                />
              </p>
            </div>

            {/* College Flip Card */}
            <FlipCard
              containerRef={containerRef}
              frontTitle="Computer Science in AI"
              frontSub="Bachelor's Degree"
              frontDescription="Sunway College (Birmingham City University)"
              frontLocation="Kathmandu, Nepal."
              backImage="/backImg.png"
              backText="Explore College"
            />
          </div>

          {/* RIGHT SIDE (Skills Section) */}
          <div className="grid grid-cols-1 gap-6">
            <SkillCard
              containerRef={containerRef}
              icon={<Code className="h-5 w-5 text-primary" />}
              title="Web Development"
              description="Building modern, responsive websites and web apps using cutting-edge frameworks."
            />
            <SkillCard
              containerRef={containerRef}
              icon={<User className="h-5 w-5 text-primary" />}
              title="UI/UX Design"
              description="Crafting user-friendly designs with seamless user experiences."
            />
            <SkillCard
              containerRef={containerRef}
              icon={<Briefcase className="h-5 w-5 text-primary" />}
              title="Mobile Application"
              description="Developing cross-platform mobile apps with smooth user experience."
            />
          </div>
        </div>
      </div>

      {/* Floating Animation + Flip Effect */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .flip-card-inner {
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          overflow: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

// FlipCard with VariableProximity
const FlipCard = ({
  frontTitle,
  frontSub,
  frontDescription,
  frontLocation,
  backImage,
  backText,
  containerRef,
}) => {
  return (
    <div className="flip-card w-full h-64 relative animate-float shadow-xl border border-primary/50">
      <div className="flip-card-inner relative w-full h-full rounded-2xl">
        {/* Front Side */}
        <div className="flip-card-front flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white p-5 text-center">
          <h4 className="text-xl font-bold">
            <VariableProximity
              label={frontTitle}
              containerRef={containerRef}
              fromFontVariationSettings="'wght' 700, 'opsz' 9"
              toFontVariationSettings="'wght' 1200, 'opsz' 32"
              radius={120}
            />
          </h4>
          <p className="text-blue-400 text-sm mt-1">
            <VariableProximity
              label={frontSub}
              containerRef={containerRef}
              fromFontVariationSettings="'wght' 500, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 24"
              radius={120}
            />
          </p>
          <p className="text-gray-300 mt-2 text-sm">
            <VariableProximity
              label={frontDescription}
              containerRef={containerRef}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 800, 'opsz' 22"
              radius={120}
            />
          </p>
          <p className="mt-2 text-xs text-gray-400 italic">
            <VariableProximity
              label={frontLocation}
              containerRef={containerRef}
              fromFontVariationSettings="'wght' 300, 'opsz' 9"
              toFontVariationSettings="'wght' 700, 'opsz' 20"
              radius={120}
            />
          </p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <img
            src={backImage}
            alt="College"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
            <VariableProximity
              label={backText}
              containerRef={containerRef}
              fromFontVariationSettings="'wght' 700, 'opsz' 9"
              toFontVariationSettings="'wght' 1300, 'opsz' 32"
              radius={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// SkillCard with VariableProximity
const SkillCard = ({ icon, title, description, containerRef }) => (
  <div className="relative p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-primary/30 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/70 group">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-primary/20 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
          <VariableProximity
            label={title}
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 600, 'opsz' 9"
            toFontVariationSettings="'wght' 1100, 'opsz' 28"
            radius={120}
          />
        </h4>
        <p className="text-muted-foreground text-sm">
          <VariableProximity
            label={description}
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 800, 'opsz' 20"
            radius={120}
          />
        </p>
      </div>
    </div>
  </div>
);

export default AboutSection;
