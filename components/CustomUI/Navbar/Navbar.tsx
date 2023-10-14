import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import { useCustomSession } from "@/context/customSession";
import { loggedInUsers } from "@/utils/loggedInUsers";
import { getNavbarItems } from "@/utils/GetListItems";

import Button from "../Button";
import AccountManager from "./AccountManager";
import SearchBar from "./SearchBar";
import Logo from "../Logo";

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { customSession, setCustomSession } = useCustomSession();

  const handleLogin = () => {
    router.push("/login");
    setCustomSession(loggedInUsers.customer1);
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <nav className="bg-white shadow">
      <div className="flex justify-between h-16 gap-2 px-2 mx-auto sm:px-6 xl:px-8">
        <div className="flex items-center flex-shrink-0">
          <Logo className="w-24 md:w-32" />
        </div>

        <div className="flex items-center w-full max-w-xs md:max-w-sm">
          {(customSession?.role === "CUSTOMER" || !customSession) && (
            <SearchBar />
          )}
        </div>

        <div className="hidden xl:ml-6 xl:flex xl:items-center">
          {getNavbarItems(customSession?.role || "").map((item, index) => (
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
        </div>

        <div className="flex items-center gap-2 xs:gap-4 md:gap-10">
          {customSession && <AccountManager />}
          <button
            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>

        {!customSession && (
          <div className="justify-between hidden space-x-4 xl:flex">
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>

            <Button variant="secondary" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        )}
      </div>

      <div
        className={`${
          menuOpen ? "absolute" : "hidden"
        } xl:hidden border-t bg-white pr-10 right-2 sm:right-6 xl:right-8 rounded-b-lg z-40 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {getNavbarItems(customSession?.role || "").map((item, index) => (
            <p
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
              key={index}
            >
              <Link href={item.link}>{item.name}</Link>
            </p>
          ))}
          {!customSession && (
            <>
              <p
                onClick={handleLogin}
                className="block px-3 py-2 text-base font-medium text-gray-700 border-t rounded-md hover:text-gray-900 hover:bg-gray-50"
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
