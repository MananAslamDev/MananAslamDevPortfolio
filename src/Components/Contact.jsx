import React, { useEffect, useState } from "react";
import Button from "./Button";
import HeaderLogo from "../assets/HeaderLogo.png";
import { useForm, ValidationError } from "@formspree/react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Link = ({ href, className, children }) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-md border outline-none transition duration-200 ${className}`}
      {...props}
    />
  );
};

const Textarea = ({ placeholder, className, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-md border outline-none transition duration-200 ${className}`}
      {...props}
    />
  );
};

const SuccessMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mx-auto mb-6 bg-green-100 w-20 h-20 rounded-full flex items-center justify-center"
      >
        <CheckCircle className="text-green-600 w-10 h-10" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Message Sent!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600 mb-6"
      >
        Thank you for reaching out. I'll get back to you as soon as possible.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded transition-colors duration-300"
        >
          Send another message <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </motion.div>
    </motion.div>
  );
};

const icons = [
  {
    name: "facebook",
    Icon: Facebook,
    hoverBg: "#1877F2",
    hoverColor: "#FFFFFF",
    url: "#",
  },
  {
    name: "twitter",
    Icon: Twitter,
    hoverBg: "#000000",
    hoverColor: "#FFFFFF",
    url: "#",
  },
  {
    name: "linkedin",
    Icon: Linkedin,
    hoverBg: "#0A66C2",
    hoverColor: "#FFFFFF",
    url: "#",
  },
  {
    name: "instagram",
    Icon: Instagram,
    hoverBg: "#5851DB",
    hoverColor: "#FFFFFF",
    url: "#",
  },
];

const Contact = () => {
  const year = new Date().getFullYear();
  const [state, handleSubmit] = useForm("xldbgydq");
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    // Scroll to top of form when succeeded
    if (state.succeeded) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [state.succeeded]);

  return (
    <div id="contact">
      <div className="bg-gradient-to-b from-[#0f172a] to-[#0a0f5c] rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl text-[#ffffff] font-bold mb-8">CONTACT</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-[#ffffff] font-bold mb-4">
              Drop Me a Message
            </h3>
            <p className="text-gray-300 mb-6">
              If you have any questions or want to work together, feel free to
              contact me. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span>+92 323 4594767</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span>mananaslamdev@gmail.com</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span>Lahore, Pakistan.</span>
              </div>
            </div>
          </div>

          <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
            <AnimatePresence>
              {state.succeeded ? (
                <SuccessMessage />
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="bg-[#ffffff] border-[#3b82f6] focus:border-[#60a5fa]"
                  />

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="bg-[#ffffff] border-[#3b82f6] focus:border-[#60a5fa]"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <Textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="bg-[#ffffff] border-[#3b82f6] focus:border-[#60a5fa] min-h-[120px]"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />

                  <Button
                    type="submit"
                    text={"Send"}
                    disabled={state.submitting}
                    className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center justify-center"
                  >
                    {state.submitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <footer className="container mx-auto py-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={HeaderLogo}
              alt="MA LOGO"
              className="mr-[15px] w-[60px] h-auto"
            />
            <span className="ml-2 text-sm text-gray-400">
              © {year} Portfolio. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {icons.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out bg-white shadow-sm hover:shadow-md"
                style={{
                  background:
                    hoveredIcon === item.name ? item.hoverBg : "#FFFFFF",
                }}
                onMouseEnter={() => setHoveredIcon(item.name)}
                onMouseLeave={() => setHoveredIcon(null)}
                aria-label={`Follow us on ${item.name}`}
              >
                <item.Icon
                  className="w-5 h-5 transition-colors duration-300"
                  style={{
                    color:
                      hoveredIcon === item.name ? item.hoverColor : "#333333",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
