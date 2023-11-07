import Plant1 from "../assets/images/0002.jpg";

function Trees() {
  return (
    <div
      id="section3"
      className="max-w-[1600px] h-[100%] p-[1rem] pb-4 bg-green-950"
    >
      <h2 className="text-[2.5rem] text-green-500 font-bold mt-[1.5rem] lg:mt-[2rem] lg:mb-[2.5rem]">
        Our Initiatives
      </h2>
      <div className="flex flex-col justify-center items-center w-[100%] p-4 md:gap-x-10  lg:flex-row">
        <div className="w-[90%] lg:w-[50%]">
          <p className="my-4 text-lg text-white font-semibold ">
            <span className="font-bold text-gray-300 text-xl">
              Our Role in Planting Trees: Nurturing Nature, Building a Greener
              Future <br></br> <br></br>
            </span>
            At Green Alexandria, our commitment to environmental sustainability
            extends to one of our core initiatives: planting trees. We recognize
            the vital role trees play in our urban ecosystem, from improving air
            quality and providing shade to supporting local biodiversity. With
            unwavering dedication, we have taken it upon ourselves to be
            stewards of our city&apos;s green spaces. Through our collective
            efforts and the generous support of our community, we are proud to
            have planted more than 10 trees in our neighborhoods. Each tree
            symbolizes not only our dedication to a greener Alexandria but also
            the hope for a more vibrant and sustainable future. As we continue
            this essential work, we invite you to join us in nurturing the
            environment that sustains us all.
          </p>
        </div>

        <div className="w-[95%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
          <img
            className="w-full shadow-lg"
            src={Plant1}
            alt="A picture of us planting a tree"
          />
        </div>
      </div>
    </div>
  );
}

export default Trees;
