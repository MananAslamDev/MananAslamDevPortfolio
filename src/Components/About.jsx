import React, { useRef } from "react";
import Button from "./Button";
import Profile from "../assets/AboutAvatar.png";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center gap-40 mt-[100px] items-center lg:flex-row md:flex-row"
    >
      <div className="mx-auto md:mx-0">
        <img
          src={Profile}
          alt="Developer Profile"
          width={300}
          height={400}
          className="rounded-lg border-4 border-[#00bcd4]"
        />
      </div>
      <div className="bg-[#111827] p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-white">ABOUT ME</h2>
        <p className="text-gray-300 mb-6 max-w-[500px]">
          I'm Manan Aslam, a frontend developer passionate about creating clean,
          responsive, and engaging web experiences. I specialize in React,
          JavaScript, HTML, and CSS, and I’m currently leveling up with Tailwind
          CSS, Jest, and API integrations. <br />
          <br /> I enjoy building UIs that not only look good but work smoothly
          and efficiently. Beyond development, I’m also exploring SEO and how
          websites can help businesses grow online. I’m always eager to learn,
          take on new challenges, and bring creative ideas to life through code.{" "}
          <br />
          <br /> Let’s create something impactful together!
        </p>
        <div className="flex space-x-4">
          <Button
            text={"Hire Me"}
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
          <a
            href="/MananAslamReactDevResume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Resume" variant="outline" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
