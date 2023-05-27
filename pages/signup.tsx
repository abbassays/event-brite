import React from "react";
import SignUpForm from "../components/Auth/SignUpForm";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const signup = (props: Props) => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="mb-6">
          <Link href="/" className="flex items-center">
            <Image
              width={96}
              height={96}
              src="/images/logo.png"
              className="h-8 mr-3"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create and account
            </h1>
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
