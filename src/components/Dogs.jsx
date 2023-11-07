import Dog1 from "../assets/images/0003.jpg";

function Dogs() {
  return (
    <div className="max-w-[1600px] h-[100%] p-[1rem] pb-4 bg-green-950 lg:pt-[6rem]">
      <div className="flex flex-col justify-center items-center w-[100%] p-4 md:gap-x-10  lg:flex-row">
        <div className="w-[90%] lg:w-[50%]">
          <p className="my-4 text-lg text-white font-semibold ">
            <span className="font-bold text-gray-300 text-xl">
              Caring for Our Furry Friends: Nourishing Street Dogs for a
              Compassionate Alexandria <br></br> <br></br>
            </span>
            At Green Alexandria, our dedication extends to not only the
            environment but also the well-being of our four-legged residents. We
            understand the significance of compassion in action, and one of our
            critical initiatives involves feeding and caring for street dogs.
            These animals often face hardships and hunger on the streets, and
            our mission is to provide them with sustenance, love, and care.
            Beyond the ethical imperative, this initiative also contributes to a
            safer and more harmonious city. Well-fed street dogs are less likely
            to be a nuisance, and our efforts reduce the suffering of these
            vulnerable creatures. Our compassionate volunteers work diligently
            to ensure that no dog goes hungry in our community. We invite you to
            be a part of our journey in making Alexandria a place where kindness
            extends to all its inhabitants, human and canine alike.
          </p>
        </div>

        <div className="w-[95%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
          <img
            className="w-full shadow-lg"
            src={Dog1}
            alt="A picture of us feeding street dogs"
          />
        </div>
      </div>
    </div>
  );
}

export default Dogs;
