import LogoPicture from "../assets/images/0001.png";

function AboutUs({ scrollToSection }) {
  return (
    <div
      id="section2"
      className="max-w-[1600px] h-[100%] p-[1rem] pb-4 bg-[#032f06]"
    >
      <h2 className="text-[2.5rem] text-green-500 font-bold mt-[1.5rem] lg:my-[2rem]">
        About Us
      </h2>
      <div className="flex flex-col justify-center items-center w-[100%] p-4 md:gap-x-10  lg:flex-row">
        <div className="w-[90%] lg:w-[50%]">
          <p className="my-4 text-lg text-white font-semibold ">
            We are a volunteering group whose mission is simple yet profound: to
            foster a community-driven movement dedicated to enhancing the
            sustainability and vibrancy of our beloved city. Founded by
            passionate individuals with a shared love for Alexandria and a deep
            respect for the environment, our organization is committed to making
            a positive impact on our local ecosystem. From planting trees in
            public spaces and beautifying neighborhoods to providing care for
            our street dogs, we believe that small, collective efforts can yield
            significant results. With a vision of a greener, cleaner, and more
            harmonious Alexandria, we invite you to join us in this meaningful
            journey. Together, we can transform our city into a shining example
            of environmental stewardship and community empowerment. Learn more
            about our initiatives, volunteer opportunities, and how you can be a
            part of this inspiring endeavor.
          </p>

          <a>
            <button
              onClick={() => scrollToSection("section4")}
              className="my-8 bg-green-800 rounded-md text-white uppercase px-4 py-2 text-sm font-semibold w-[150px] mx-auto lg:mx-0 shadow-md md:text-base hover:bg-green-900 duration-300"
            >
              Join Us
            </button>
          </a>
        </div>

        <div className="w-[95%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
          <img
            className="w-full"
            src={LogoPicture}
            alt="A picture of Green Alexandria Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
