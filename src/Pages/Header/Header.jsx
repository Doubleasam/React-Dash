import { IoIosArrowForward } from "react-icons/io";
import { LuBell } from "react-icons/lu";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="lg:px-20 md:px-16 px-12 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center justify-center gap-2">
          <p className="bg-[#3289EF] w-[40px] h-[40px] text-[#fff] rounded-xl flex items-center justify-center">
            <span className="text-xl font-extrabold">
              <IoIosArrowForward />
            </span>
          </p>
          <h2 className="font-semibold text-xl">tabler</h2>
        </Link>

        <div className="flex items-center justify-center gap-3">
          <button className="px-2 hidden lg:block py-1 rounded text-sm font-semibold border border-[#467FCF] text-[#467FCF] hover:bg-[#467FCF] hover:text-[#fff] duration-300 cursor-pointer">
            Source code
          </button>
          <div className="lg:flex items-center justify-center hidden">
            <p>
              <LuBell />
            </p>
            <p className="bg-[red] w-[8px] h-[8px] rounded-full mt-[-20px]"></p>
          </div>
          {/* <div className="flex items-center justify-center gap-2">
            <div>
              <img className="w-[35px]" src={user} alt="user" />
            </div>
            <div>
              <h2 className="font-semibold mt-1">Jone Pearson</h2>
              <p className="text-[#262626]/60 mt-[-4px] text-sm">
                Administrator
              </p>
            </div>
          </div> */}

          <div>
            <Link
              to="/login"
              className="px-6 hover:bg-[#262626]/90 duration-300 cursor-pointer py-2 rounded bg-[#3289EF] text-[#fff] text-sm font-semibold"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
