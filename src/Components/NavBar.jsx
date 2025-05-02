import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import HeaderLogo from "../assets/HeaderLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ⭐️ Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#0f172a] px-10 py-2.5 flex flex-row items-center justify-between text-center border-b border-white rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.2)] box-border mt-[6px]">
      <img
        src={HeaderLogo}
        alt="MA LOGO"
        className="mr-[15px] w-[60px] h-auto"
      />

      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:block">
        <ul className="flex flex-row justify-center gap-[30px] lg:gap-[70px] items-center">
          <li className="NavItems">
            <NavLink to="/" className="text-white hover:text-[#00bcd4]">
              HOME
            </NavLink>
          </li>
          <li className="NavItems">
            <NavLink to="/about" className="text-white hover:text-[#00bcd4]">
              ABOUT
            </NavLink>
          </li>
          <li className="NavItems">
            <NavLink
              to="/portfolio"
              className="text-white hover:text-[#00bcd4]"
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li className="NavItems">
            <NavLink to="/services" className="text-white hover:text-[#00bcd4]">
              SERVICES
            </NavLink>
          </li>
          <li className="NavItems">
            <NavLink
              to="/experience"
              className="text-white hover:text-[#00bcd4]"
            >
              EXPERIENCE
            </NavLink>
          </li>
          <li className="NavItems">
            <Button
              text="Contact"
              className="GradientButton"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <button className="block lg:hidden text-white" onClick={toggleMobileMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#0f172ae6] z-50 flex flex-col items-center justify-center px-4">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-[#00bcd4] transition duration-300"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav>
            <ul className="flex flex-col justify-center gap-[30px] items-center">
              <li className="NavItems">
                <NavLink
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[#00bcd4]"
                >
                  HOME
                </NavLink>
              </li>
              <li className="NavItems">
                <NavLink
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[#00bcd4]"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="NavItems">
                <NavLink
                  to="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[#00bcd4]"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="NavItems">
                <NavLink
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[#00bcd4]"
                >
                  SERVICES
                </NavLink>
              </li>
              <li className="NavItems">
                <NavLink
                  to="/experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[#00bcd4]"
                >
                  EXPERIENCE
                </NavLink>
              </li>
              <li className="NavItems">
                <Button text="Contact" className="GradientButton" />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
