import MobileNav from "./MobileNav";

import Logo2 from "../assets/images/greenAlexandriaLogo.png";

import { motion } from "framer-motion";

function Header({ scrollToSection }) {
  return (
    <motion.div
      id="section1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      transition={{ duration: 1.4 }}
      className=" h-[60px] flex justify-between items-center px-8 py-8 lg:h-[100px]"
    >
      <div>
        <span>
          <img
            src={Logo2}
            alt="The website logo"
            className="cursor-pointer w-[30%] mt-[4rem] p-[2px] bg-green-400 rounded-xl sm:w-[8rem] lg:w-[11rem] hover:bg-green-800 duration-300"
          />
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden justify-between items-center gap-x-20 lg:flex">
        <div className="flex justify-between gap-x-8 font-semibold">
          <a
            onClick={() => scrollToSection("section1")}
            className=" text-white text-lg cursor-pointer py-1 px-3 hover:text-green-600 duration-300"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("section2")}
            className=" text-white text-lg cursor-pointer py-1 px-3 hover:text-green-600 duration-300"
          >
            About Us
          </a>
          <a
            onClick={() => scrollToSection("section3")}
            className=" text-white text-lg cursor-pointer py-1 px-3 hover:text-green-600 duration-300"
          >
            Our Initiatives
          </a>
          <a
            onClick={() => scrollToSection("section4")}
            className=" text-white text-lg cursor-pointer py-1 px-3 hover:text-green-600 duration-300"
          >
            Join Us
          </a>
        </div>
      </div>

      <MobileNav scrollToSection={scrollToSection} />
    </motion.div>
  );
}

export default Header;
