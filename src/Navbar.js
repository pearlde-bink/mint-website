import React from "react";
import { useState } from "react";
import logo from "./assets/bg/logo.webp";

const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);
  const [open, setOpen] = useState(false);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts", //return all account existing in metamask
      });
      setAccounts(accounts);
    }
  }

  return (
    <nav className="w-full flex flex-row justify-between items-center px-12 py-8">
      {/* left side - social media */}
      <div>
        <img src={logo} alt="logo" className="max-w-xs w-2/5 justify-center" />
      </div>

      {/* Right side - Sections and connect */}
      <ul className="w-full hidden md:flex justify-between items-center p-15">
        <li className="cursor-pointer hover:to-blue-300 px-2 text-sm md:text-base">
          About
        </li>
        <li className="cursor-pointer hover:to-blue-300 px-2 text-sm md:text-base">
          Mint
        </li>
        <li className="cursor-pointer hover:to-blue-300 px-2 text-sm md:text-base">
          Team
        </li>
        {/* Connect */}
        {isConnected ? (
          <p className="text-sm md:text-xl text-pink-600">Connected</p>
        ) : (
          <button
            className="rounded-lg cursor-pointer text-white bg-blue-500 shadow-lg shadow-violet-800 p-5 mx-0 my-10 hover:shadow-lg "
            onClick={connectAccount}
          >
            Connect
          </button>
        )}
      </ul>

      <div className="flex relative">
        {open ? (
          <div
            className=" text-white text-xs md:hidden cursor-pointer relative"
            onClick={() => {
              setOpen(false);
            }}
          >
            {/* close icon */}
            <svg
              className="absolute right-2/4 top-0"
              stroke="white"
              fill="white"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M320 320 192 192m0 128 128-128"
              ></path>
            </svg>
          </div>
        ) : (
          <div
            className="text-white text-xs md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          >
            {/* open icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        )}
        {open && (
          <ul className="w-1/2 flex flex-col justify-between items-center p-15 ml-5">
            <li className="cursor-pointer hover:to-blue-300 px-2 text-sm md:text-xl mt-5">
              About
            </li>
            <li className="cursor-pointer hover:to-blue-300 px-2 text-sm md:text-xl mt-5">
              Mint
            </li>
            <li className="cursor-pointer hover:to-blue-300 px-2 text-sm md:text-xl mt-5">
              Team
            </li>
            {/* Connect */}
            {isConnected ? (
              <p className="text-sm md:text-xl text-pink-600 mt-5">Connected</p>
            ) : (
              <button
                className="rounded-lg cursor-pointer text-white bg-blue-500 shadow-lg shadow-violet-800 p-5 mx-0 my-10 hover:shadow-lg "
                onClick={connectAccount}
              >
                Connect
              </button>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
