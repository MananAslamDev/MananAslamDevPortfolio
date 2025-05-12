import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import HtmlLogo from "../assets/HtmlLogo.png";
import CssLogo from "../assets/CssLogo.png";
import ReactLogo from "../assets/ReactLogo.png";
import GsapLogo from "../assets/GsapLogo.png";
import AnimeJsLogo from "../assets/AnimeJsLogo.png";
import BubbleLogo from "../assets/BubbleLogo.png";
import TailwindCssLogo from "../assets/TailwindCssLogo.png";
import JavaScriptLogo from "../assets/JavaScriptLogo.png";

const Experience = ({ isFullDisplay = false }) => {
  const [totalWidth, setTotalWidth] = useState(0);
  const containerRef = useRef();
  const itemRef = useRef();

  const technologies = [
    { 
      name: "HTML5", 
      image: HtmlLogo,
      description: "Strong foundation in semantic HTML5 with a focus on accessibility and SEO best practices. Created well-structured, accessible web pages following modern standards.",
      level: "Expert",
      yearsOfExperience: 4
    },
    { 
      name: "CSS3", 
      image: CssLogo,
      description: "Advanced knowledge of CSS3 including Flexbox, Grid, animations, and responsive design. Created complex layouts and interactive UI components with pure CSS.",
      level: "Expert",
      yearsOfExperience: 4
    },
    { 
      name: "Tailwind CSS", 
      image: TailwindCssLogo,
      description: "Proficient in using Tailwind CSS to build responsive and modern UI components efficiently. Utilized utility-first approach for rapid and consistent styling.",
      level: "Advanced",
      yearsOfExperience: 1
    },
    { 
      name: "React JS", 
      image: ReactLogo,
      description: "Extensive experience building modern web applications with React. Proficient with hooks, context API, Redux, and various React libraries.",
      level: "Advanced",
      yearsOfExperience: 1
    },
    { 
      name: "JavaScript", 
      image: JavaScriptLogo,
      description: "Deep understanding of JavaScript including ES6+ features, asynchronous programming, DOM manipulation, and modern JS frameworks.",
      level: "Advanced",
      yearsOfExperience: 2
    },
    { 
      name: "GSAP", 
      image: GsapLogo,
      description: "Used GSAP for creating high-performance animations and interactive transitions. Integrated timeline-based animations in React and vanilla JS projects.",
      level: "Intermediate",
      yearsOfExperience: 1
    },
    { 
      name: "Anime JS", 
      image: AnimeJsLogo,
      description: "Implemented lightweight animations using Anime.js to enhance UI/UX in React applications. Created timeline and scroll-based animations.",
      level: "Intermediate",
      yearsOfExperience: 1
    },
    { 
      name: "Bubble.io", 
      image: BubbleLogo,
      description: "Built no-code web apps with Bubble.io including dynamic data-driven pages, workflows, and integrations. Rapidly prototyped MVPs with minimal code.",
      level: "Intermediate",
      yearsOfExperience: 1
    }
  ];
  

  const duplicatedTechnologies = [...technologies, ...technologies];

  useEffect(() => {
    if (!isFullDisplay && containerRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth;
      const gap = 64;
      const total = (itemWidth + gap) * technologies.length;
      setTotalWidth(total);
    }

    // Update width on resize
    const handleResize = () => {
      if (!isFullDisplay && containerRef.current && itemRef.current) {
        const itemWidth = itemRef.current.offsetWidth;
        const gap = window.innerWidth < 640 ? 16 : 64;
        const total = (itemWidth + gap) * technologies.length;
        setTotalWidth(total);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFullDisplay]);

  // Render detailed tech information for full display mode
  const renderDetailedTechInfo = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#00bcd4] transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-white p-3 rounded-lg mr-4">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="text-[#00bcd4] font-medium mr-3">{tech.level}</span>
                  <span>{tech.yearsOfExperience} years experience</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mt-4">{tech.description}</p>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className="text-sm text-[#00bcd4]">
                  {tech.level === "Expert" ? "90%" : tech.level === "Advanced" ? "75%" : "60%"}
                </span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div 
                  className="bg-[#00bcd4] h-2 rounded-full" 
                  style={{ 
                    width: tech.level === "Expert" ? "90%" : tech.level === "Advanced" ? "75%" : "60%" 
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  // Render sliders for non-full display mode
  const renderSliders = () => {
    return (
      <div className="space-y-6 sm:space-y-10" ref={containerRef}>
        {/* Top row */}
        <motion.div
          className="flex gap-4 sm:gap-16"
          animate={{ x: [0, -totalWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 20, // Faster speed
              ease: "linear",
            },
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={index}
              ref={index === 0 ? itemRef : null}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="bg-[#ffffff] p-3 sm:p-4 rounded-lg border-4 border-gray-700 hover:border-[#00bcd4] transition-colors duration-300">
                <img
                  src={tech.image}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom row, opposite direction */}
        <motion.div
          className="flex gap-4 sm:gap-16"
          animate={{ x: [-totalWidth, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 20, // Faster speed
              ease: "linear",
            },
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="bg-[#ffffff] p-3 sm:p-4 rounded-lg border-4 border-gray-700 hover:border-[#00bcd4] transition-colors duration-300">
                <img
                  src={tech.image}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-8 sm:py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            <span className="text-[#00bcd4]">Tech</span> Experience
          </h1>
          {isFullDisplay && (
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              A comprehensive overview of my technical skills and experience across various technologies and frameworks.
            </p>
          )}
        </motion.div>

        {isFullDisplay ? renderDetailedTechInfo() : renderSliders()}
      </div>
    </section>
  );
};

export default Experience;