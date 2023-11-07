import HeroWallpaper2 from "../assets/images/0000.png";

import { motion } from "framer-motion";

function Hero({ scrollToSection }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      transition={{ duration: 1.4 }}
      className="font-bold max-w-[1400px] h-full p-[1rem] pb-4 mt-[4rem] lg:mt-1"
    >
      <div className="flex flex-col justify-center items-center w-[100%] p-4 gap-x-8 lg:p-8 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          //   exit={{ opacity: 0, y: "-80%" }}
          transition={{ duration: 1.4 }}
          className="w-[95%]  my-[0.2rem] lg:my-[2rem] lg:w-[50%] "
        >
          <p className="text-[1rem] text-white font-bold sm:text-[1.5rem] lg:text-[2rem]">
            &quot;Connecting Hearts, Healing the Earth: Green Alexandria
            Embodies Our Collective Commitment to a Healthier, Greener, and More
            Sustainable City.&quot;
          </p>

          <a>
            <button
              onClick={() => scrollToSection("section2")}
              className="my-8 bg-green-800 rounded-md text-white uppercase px-4 py-2 text-sm font-semibold w-[150px] mx-auto lg:mx-0 shadow-md md:text-base hover:bg-green-900 duration-300"
            >
              About Us
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          //   exit={{ scale: 0 }}
          transition={{ duration: 1.4 }}
          className="w-[95%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem]"
        >
          <img
            className="w-full"
            src={HeroWallpaper2}
            alt="A picture showing the activities of our volunteering group"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
