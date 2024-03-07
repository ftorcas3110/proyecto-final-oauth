import React from "react";

function Footer() {
  return (
    <footer className="bg-black flex flex-col md:flex-row justify-around items-center font-Rounded font-bold rounded-sm fixed bottom-0 w-full h-20">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center sm:justify-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-white">
          Made by ftorcas3110
          </p>
        </div>
        <hr className="sm:mx-4 lg:my-4 w-full sm:w-auto" />
        <div className="flex items-center justify-center text-bold">
          <ul className="flex flex-wrap mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-5 sm:justify-center sm:items-center">
            <li>
              <a href="https://github.com/ftorcas3110" target="_blank" className=" transition duration-500 hover:text-blue-700">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
