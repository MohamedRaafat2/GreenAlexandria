// Import Images
import { useState } from "react";
import TreeAndDog from "../assets/images/CaptureTree555.png";

import emailjs from "emailjs-com";

function Contact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (userName === "" || userEmail === "" || userMessage === "") {
      alert("Please fill the form");
      return;
    }

    emailjs
      .sendForm(
        "service_rqymaj5",
        "template_7fi9dib",
        e.target,
        "BnjEmZkzn2GQBAQYB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUserName("");
    setUserEmail("");
    setUserMessage("");
    alert("Message Sent!");
  }

  return (
    <div id="section4" className="h-full pb-[4rem] relative">
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:mt-20">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div className="hidden lg:block absolute bg-green-200 bottom-0 left-0 w-full h-[60%]"></div>

          {/* Text Container */}

          <div className="text-center my-10 lg:text-left lg:z-10">
            <h1 className="text-green-500 font-bold text-4xl font-primary mb-2 lg:text-[65px] lg:mb-8">
              Join Us
            </h1>
            <p className="px-2 font-semibold text-lg">
              We would love to have you on board!
            </p>
          </div>

          {/* Form Container  */}

          <form
            onSubmit={sendEmail}
            className="flex flex-col px-10 w-full lg:px-0 lg:z-10"
          >
            <div className="flex gap-x-4">
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="name"
                className="w-full bg-transparent outline-none pb-4 border-b-2 border-green-800"
                type="text"
                placeholder="Your name"
              />
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                name="email"
                className="w-full bg-transparent outline-none pb-4 border-b-2 border-green-800"
                type="text"
                placeholder="Your email"
              />
            </div>
            <input
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              name="message"
              className="w-full my-8 bg-transparent outline-none pb-4 border-b-2 border-green-800"
              type="text"
              placeholder="Your message"
            />

            <button className="bg-green-800 rounded-md text-white uppercase px-4 py-2 text-sm font-semibold w-[150px] mx-auto lg:mx-0 shadow-md md:text-base hover:bg-green-900 duration-300">
              Send
            </button>
          </form>
        </div>

        {/* Image Container */}

        <div className="mt-4 lg:z-10">
          <img
            className="w-[300px] lg:w-[400px]"
            src={TreeAndDog}
            alt="An animated picture of a tree and a dog"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
