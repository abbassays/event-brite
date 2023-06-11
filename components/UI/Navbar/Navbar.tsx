import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../Button";
import SearchBar from "./SearchBar";
import AdminDropDown from "./AdminDropDown";

const createItems = [
  {
    name: "Event",
    link: "/admin/events/create",
  },
  {
    name: "Organiser",
    link: "/admin/organisers/create",
  },
  {
    name: "Ticket",
    link: "/admin/tickets/create",
  },
];

const listItems = [
  {
    name: "Event",
    link: "/admin/events",
  },
  {
    name: "Organiser",
    link: "/admin/organisers",
  },
  {
    name: "Ticket",
    link: "/admin/tickets",
  },
];

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const isAdminRoute = () => {
    return router.pathname.startsWith("/admin");
  };

  useEffect(() => {
    if (router.isReady) {
      setIsLoggedIn(isAdminRoute());
    }
  }, [router]);

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
      link: "/cart",
    },
  ];

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    console.log("logout");
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <nav className="bg-white shadow">
      <div className="xl:max-w-7xl md:max-w-5xl sm:max-w-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <Image
                className="block lg:hidden h-8 w-auto "
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
              />
              <Image
                className="hidden lg:block h-8 w-auto "
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
                className={`px-6 py-2 text-lg transition-colors
                  ${
                    router.pathname === item.link
                      ? "text-blue-600 font-bold underline underline-offset-4"
                      : "text-blue-500 hover:text-blue-600"
                  }
                `}
              >
                <Link href={item.link}>{item.name}</Link>
              </p>
            ))}
            {isLoggedIn && <AdminDropDown items={createItems} name="Create" />}
            {isLoggedIn && <AdminDropDown items={listItems} name="View" />}
          </div>

          <div className=" lg:flex justify-between space-x-4 hidden ">
            {isLoggedIn ? (
              <Button variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="primary" onClick={handleLogin}>
                  Login
                </Button>

                <Button variant="secondary" onClick={handleSignUp}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "absolute" : "hidden"
        } lg:hidden border-t bg-white pr-10 right-6 rounded-b-lg z-40`}
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
          {isLoggedIn ? (
            <>
              <AdminDropDown items={createItems} name="Create" />
              <AdminDropDown items={listItems} name="View" />
              <p className="block px-3 py-2 text-base border-t font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                Logout
              </p>
            </>
          ) : (
            <>
              <p
                onClick={handleLogin}
                className="block px-3 py-2 text-base border-t font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
              >
                Login
              </p>

              <p
                onClick={handleSignUp}
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
              >
                Sign Up
              </p>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
