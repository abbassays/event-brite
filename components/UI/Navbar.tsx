import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import SearchBar from "./SearchBar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navbarItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Cart",
      link: "/",
    },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="xl:max-w-7xl md:max-w-5xl sm:max-w-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <Image
                className="block lg:hidden h-8 w-auto"
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
              />
              <Image
                className="hidden lg:block h-8 w-auto"
                src="/images/logo.png"
                alt="Logo"
                width={48}
                height={48}
              />
            </a>
          </div>

          <div className="flex items-center w-full max-w-xs md:max-w-sm">
            <SearchBar />

            <button
              className="inline-flex items-center justify-center ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden lg:ml-6 lg:flex lg:items-center">
            {navbarItems.map((item, index) => (
              <p
                key={index}
                className="px-6 py-2 text-lg text-blue-500 hover:[text-shadow:_0_2px_4px_#93c5fd] transition-colors"
              >
                <Link href={item.link}>{item.name}</Link>
              </p>
            ))}
          </div>

          <div className=" lg:flex justify-between space-x-4 hidden ">
            <Button variant="primary">Login</Button>

            <Button variant="secondary">Sign Up</Button>
          </div>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "absolute" : "hidden"
        } lg:hidden border-t bg-white pr-10 right-6 rounded-b-lg `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navbarItems.map((item, index) => (
            <p
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
              key={index}
            >
              <Link href={item.link}>{item.name}</Link>
            </p>
          ))}
          <p className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <Link href="/login">Login</Link>
          </p>

          <p className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
            <Link href="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
