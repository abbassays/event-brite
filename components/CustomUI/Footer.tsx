import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const socialIcons = [
    {
      Icon: FaFacebook,
      link: "/",
    },
    {
      Icon: FaInstagram,
      link: "/",
    },
    {
      Icon: FaTwitter,
      link: "/",
    },
    {
      Icon: FaWhatsapp,
      link: "/",
    },
  ];

  const footerItems = [
    {
      title: "Navigate",
      subItems: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "Events",
          link: "/events",
        },
        {
          title: "Cart",
          link: "/cart",
        },
      ],
    },
    {
      title: "More",
      subItems: [
        {
          title: "About Us",
          link: "/about",
        },
        {
          title: "Contact Us",
          link: "/contact",
        },
      ],
    },
    {
      title: "Legal",
      subItems: [
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Terms & Conditions",
          link: "/terms-and-conditions",
        },
      ],
    },
  ];

  return (
    <footer
      className="mt-10 bg-slate-200"
      style={{
        boxShadow: "0px 5px 10px #888, 0px -5px 10px #888",
      }}
    >
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerItems.map(({ title, subItems }) => (
              <div key={title}>
                <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase">
                  {title}
                </h2>
                <ul className="font-medium text-gray-600">
                  {subItems.map(({ title, link }, index) => (
                    <li key={index} className="mb-4">
                      <a href={link} className="hover:underline">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 <p className="inline hover:underline">Events</p>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socialIcons.map(({ Icon, link }, index) => (
              <Link
                key={index}
                href={link}
                className="text-gray-500 hover:text-gray-900"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
