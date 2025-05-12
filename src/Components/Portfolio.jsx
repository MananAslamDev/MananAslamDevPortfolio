import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LLEI from "../assets/LLEI.png";
import DashBoard from "../assets/DashBoard.png";
import WeatherApp from "../assets/WeatherApp.png";
import PortfolioSS from "../assets/PortfolioSS.png";

const Portfolio = ({ isFullDisplay = false }) => {
  const [activeTab, setActiveTab] = useState("DashBoard");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const projects = {
    DashBoard: [
      {
        id: 1,
        title: "DashBoard",
        category: "PROJECT 1",
        description:
          "A modern, responsive dashboard interface designed to streamline business operations and provide real-time insights. The dashboard features intuitive navigation, dynamic data management, and interactive components tailored for efficient monitoring and control of various business activities.",
        image: DashBoard,
        color: "bg-emerald-300",
        url: "https://reactdashboardbymanan.vercel.app/",
      },
    ],
    BusinessWebsite: [
      {
        id: 2,
        title: "Lucky Label Embroidery Industry Website",
        category: "PROJECT 2",
        description:
          "I designed and developed a responsive corporate website for Lucky Label Embroidery Industry, a company specializing in woven labels, printed tags, patches, and embroidery solutions. It reflects the brand's identity while serving as a point of contact for B2B clients.",
        image: LLEI,
        color: "bg-blue-300",
        url: "https://luckylabelembroideryindustry.vercel.app/",
      },
    ],
    WeatherApp: [
      {
        id: 3,
        title: "WeatherApp",
        category: "PROJECT 3",
        description:
          "A sleek and responsive weather app delivering real-time weather updates worldwide. Features include dynamic backgrounds, temperature, humidity, wind speed, and a 7-day forecast with smooth UI interactions.",
        image: WeatherApp,
        color: "bg-cyan-300",
        url: "https://climatoscope.vercel.app/",
      },
    ],
    Portfolio: [
      {
        id: 4,
        title: "Portfolio",
        category: "PROJECT 4",
        description:
          "A sleek and responsive portfolio site to showcase my projects, skills, and frontend experience. Includes dark mode, animations, resume download, and social links, reflecting a clean and functional design.",
        image: PortfolioSS,
        color: "bg-purple-300",
        url: "https://mananaslamdev.vercel.app/",
      },
    ],
  };

  const getAllProjects = () => {
    let allProjects = [];
    Object.values(projects).forEach((projectArray) => {
      allProjects = [...allProjects, ...projectArray];
    });
    return allProjects.sort((a, b) => a.id - b.id);
  };

  const displayProjects = isFullDisplay ? getAllProjects() : projects[activeTab];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-[#0f172a] text-white">
      <motion.h2
        className="text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        PORTFOLIO
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Explore my latest projects across different platforms and technologies
      </motion.p>

      {!isFullDisplay && (
        <div className="relative mb-16">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8 bg-[#1e293b] p-4 rounded-xl shadow-lg">
            {Object.keys(projects).map((tab) => (
              <button
                key={tab}
                className={`py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[linear-gradient(90deg,_#00bcd4,_#0a0f5c)] bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position]"
                    : "text-gray-300 hover:text-white hover:bg-[#2d3748]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={isFullDisplay ? "all-projects" : activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-20"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-20"
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Image Block */}
                <div
                  className={`${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  } order-first ${project.color} p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-auto"
                  />
                </div>

                {/* Text Block */}
                <div
                  className={`${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  } order-last`}
                >
                  <div className="text-[#00bcd4] mb-2 font-medium">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button text="View Details" variant="outline" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {!isFullDisplay && (
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button text="View All Projects" onClick={() => navigate("/portfolio")} />
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
