import { useEffect, useRef } from "react";
import { ArrowRight, Github } from "lucide-react";
import gsap from "gsap";

const projects = [
  {
    id: 1,
    title: "Bus Route Finder App",
    description:
      "Mobile app showing bus routes dynamically using Flutter and Firebase.",
    image: "/projects/project1.png",
    tags: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/jibachyadav/bus-route-finder",
  },
  {
    id: 2,
    title: "Rock-Paper-Scissors Game",
    description:
      "Classic Rock-Paper-Scissors game to challenge your luck and strategy.",
    image: "/projects/project2.png",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://jibachyadav.github.io/rock-paper-scissors-game/",
  },
  {
    id: 3,
    title: "Currency Converter",
    description:
      "Converts amounts between currencies in real-time using up-to-date exchange rates.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://jibachyadav.github.io/Currency-Converter/",
  },
];

export const ProjectsSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2;

    // Infinite scrolling with GSAP
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(slider, {
      x: -totalWidth,
      duration: 15,
      ease: "power1.inOut",
    });

    const pause = () => tl.pause();
    const play = () => tl.play();

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", play);

    return () => {
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", play);
      tl.kill();
    };
  }, []);

  // 3D tilt effect
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (card) => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black/80 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-3xl font-bold mb-4 text-center text-white/90">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A few of my recent projects, crafted with performance and smooth design in mind.
        </p>

        {/* Slider */}
        <div className="overflow-hidden relative" style={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
          <div ref={sliderRef} className="flex gap-12 whitespace-nowrap">
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-card rounded-xl overflow-hidden shadow-2xl w-60 flex-shrink-0 cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:shadow-xl animate-float"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                style={{ perspective: "1000px" }}
              >
                {/* Image */}
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-white p-3 bg-primary rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-white/90">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-white bg-gradient-to-r from-primary to-pink-500 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            target="_blank"
            href="https://github.com/jibachyadav"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white rounded-full opacity-50 animate-pulse absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
