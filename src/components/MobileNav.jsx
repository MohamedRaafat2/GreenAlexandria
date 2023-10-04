import { useState } from "react";

// Import Icons
import { ImCross } from "react-icons/im";
import { HiMenuAlt3 } from "react-icons/hi";

function MobileNav({ scrollToSection }) {
  const [sideMenu, setSideMenu] = useState(false);

  const toggleMenu = () => {
    setSideMenu(!sideMenu);
    console.log(sideMenu);
  };

  return (
    <div className="block lg:hidden">
      <HiMenuAlt3
        className="text-green-500 cursor-pointer text-2xl fixed right-8 top-8"
        onClick={toggleMenu}
      />

      <div
        className={
          sideMenu
            ? "fixed top-0 right-0 h-screen w-[50%] py-4 px-8 z-40 drop-shadow-2xl bg-white ease-in duration-300 lg:hidden"
            : "fixed ease-in duration-300 right-[-55%] h-screen w-[50%]"
        }
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <ImCross
              className="text-green-500 cursor-pointer text-sm"
              onClick={toggleMenu}
            />
          </div>

          <ul
            className="flex flex-col justify-between items-center gap-y-10
                        font-bold text-lg"
          >
            <li>
              <a
                onClick={() => scrollToSection("section1")}
                className="bg-white text-black cursor-pointer rounded-md py-1 px-3 hover:bg-green-600 duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("section2")}
                className="bg-white text-black cursor-pointer rounded-md py-1 px-3 hover:bg-green-600 duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("section3")}
                className="bg-white text-black cursor-pointer rounded-md py-1 px-3 hover:bg-green-600 duration-300"
              >
                Our Initiatives
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("section4")}
                className="bg-white text-black cursor-pointer rounded-md py-1 px-3 hover:bg-green-600 duration-300"
              >
                Join Us
              </a>
            </li>
          </ul>

          <span className="font-bold text-green-800">
            &quot;Life Grows Where Trees Thrive.&quot;
          </span>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
