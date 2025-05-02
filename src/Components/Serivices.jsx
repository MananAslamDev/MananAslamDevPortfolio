import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Layout, Globe, Search, ChevronRight } from "lucide-react";

const Services = ({isFullDisplay = false}) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. Focused on delivering clean code, modern UI, and seamless user experience.",
      icon: <Layout className="w-6 h-6 text-white" />,
    },
    {
      id: 2,
      title: "Website Development",
      description:
        "Building dynamic websites tailored for businesses and individuals. From static pages to fully interactive platforms, optimized for speed and mobile performance.",
      icon: <Globe className="w-6 h-6 text-white" />,
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Improving website visibility on search engines with both on-page and off-page SEO strategies, boosting organic traffic and helping businesses grow online.",
      icon: <Search className="w-6 h-6 text-white" />,
    },
    {
      id: 4,
      title: "Custom Web Solutions",
      description:
        "Creating tailored solutions for unique business needs, whether it’s a service site, portfolio, or product display—designed for both aesthetics and functionality.",
      icon: <Code className="w-6 h-6 text-white" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#00bcd4]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver high-quality digital solutions crafted to meet your specific needs and exceed expectations.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col h-full relative overflow-hidden group"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(0, 188, 212, 0.3)",
                borderColor: "#00bcd4",
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="bg-[#00bcd4] w-14 h-14 rounded-full flex items-center justify-center mb-6"
                variants={iconVariants}
                animate={hoveredCard === service.id ? "hover" : "rest"}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>

              <p className="text-gray-300 mb-6">{service.description}</p>
              <Link to="/services">
              <motion.div
                className="mt-auto flex items-center text-[#00bcd4] font-medium"
                animate={hoveredCard === service.id ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </motion.div></Link>

              <motion.div
                className="absolute -bottom-1 left-0 w-full h-1 bg-[#00bcd4]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={hoveredCard === service.id ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;