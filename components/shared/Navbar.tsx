import { navlinks } from "@/constants";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import React from "react";

const Navbar = () => {
  return (
    <div className=" font-sans w-full  m-0 backdrop-blur-md">
      <div className="shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="w-10 h-10 text-fuchsia-600">
              <a href="/">
                <CodeBracketIcon />
              </a>
            </div>
            {navlinks.map((link) => (
              <div className="hidden sm:flex sm:items-center" key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-200 text-sm font-semibold hover:text-fuchsia-600 mr-4"
                >
                  {link.name}
                </a>
              </div>
            ))}

            <div className="sm:hidden cursor-pointer text-bold text-xl">
              Quiz
            </div>
          </div>

          {navlinks.map((link) => (
            <div
              className="block sm:hidden text-purple-300 border-t-2 py-2"
              key={link.name}
            >
              <a
                href={link.href}
                className="text-gray-200 text-sm font-semibold hover:text-fuchsia-700 mb-1"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
