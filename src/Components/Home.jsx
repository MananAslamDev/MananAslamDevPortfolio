import Button from "./Button";
import Avatar from "../assets/Avatar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div
      ref={scrollRef}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <h1 className="font-poppins absolute text-[14.5vw] font-black text-[#00bcd4] opacity-10 top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] pointer-events-none select-none z-[1] uppercase">
        Developer
      </h1>

      {/* Content layout */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-6xl mx-auto px-6 md:px-12 py-16 relative z-[2]">
        {/* Left Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-xl text-[#a3a3a3] font-josefin mb-2">I'm a</h2>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-josefin mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FRONT END <br />
            REACT <br />
            DEVELOPER<span className="text-[#39bdf8]">.</span>
          </motion.h1>
          <Button
            text="My Recent Projects"
            onClick={() => navigate("/portfolio")}
          />
        </div>

        {/* Right Image Section */}
        <div className="relative mb-12 md:mb-0 w-full md:w-auto flex justify-center md:justify-end">
          <div className="hidden md:block absolute top-33 left-20 border-t-8 border-b-8 border-l-8 border-[#00bcd4] h-[300px] w-[350px]"></div>
          <motion.img
            src={Avatar}
            alt="Profile"
            className="relative z-10 md:left-20 lg:left-20 h-[200px] w-[150px] sm:h-[250px] sm:w-[180px] md:h-[500px] md:w-[350px] object-contain shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
