import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdLogout, MdSettings } from "react-icons/md";
import { useRouter } from "next/router";

import { useCustomSession } from "@/context/customSession";
import { SessionType } from "@/types";
import { loggedInUsers } from "@/utils/loggedInUsers";

import Button from "../Button";
import { getOrganiserById } from "@/utils/json-database";

const AccountManager = () => {
  const { customSession, selectedOrg, setCustomSession } = useCustomSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const users = [
    loggedInUsers.admin1,
    loggedInUsers.organiser1,
    loggedInUsers.staffMember1,
    loggedInUsers.customer1,
  ].filter(
    (session) =>
      session.role !== customSession?.role || customSession.role === "STAFF"
  );

  return (
    <div className="flex flex-col justify-center items-center relative overflow-visible">
      <div
        className="bg-slate-100 w-8 md:w-12 h-8 md:h-12 relative my-auto shadow-md rounded-full overflow-hidden cursor-pointer flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={"/images/avatar.png"} alt="avatar" fill />
      </div>

      {isOpen && (
        <div className="absolute top-20 right-0 z-50 bg-white shadow-md rounded-md p-2 w-max text-gray-600">
          <div className="flex justify-between gap-4 bg-blue-100  p-2 rounded-md">
            <div className="bg-slate-100 w-20 h-20 relative mt-2 shadow-md rounded-full overflow-hidden cursor-pointer">
              <Image src={"/images/avatar.png"} alt="avatar" fill />
            </div>
            <div className="pt-6">
              <h1 className="text-xl font-medium">
                {customSession?.user?.name}
              </h1>
              {customSession?.role === "STAFF" && (
                <p className="text-gray-400 font-light">{selectedOrg?.name}</p>
              )}

              <p className="text-gray-400 font-light">{customSession?.email}</p>

              <Link href={"/profile"}>
                <Button
                  variant="tertiary"
                  className="mt-3 flex items-center gap-2"
                >
                  <MdSettings />
                  <p>Settings</p>
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-2 p-2">
            {users.map((session: SessionType) => (
              <div
                key={session.role}
                className="cursor-pointer border-b py-2"
                onClick={() => {
                  if (session.role !== "STAFF") {
                    setCustomSession(session);

                    if (session.role === "CUSTOMER") router.push("/");
                    else {
                      router.push("/dashboard");
                      router.reload();
                    }
                  }
                }}
              >
                <h1 className="text-xl font-medium">{session.user.name}</h1>
                {session.role === "STAFF" && (
                  <>
                    <h1 className="font-medium text-gray-400">Switch to:</h1>
                    {session.user.organisations
                      .filter(
                        (organisation) => organisation.id !== selectedOrg?.id
                      )
                      .map((organisation) => (
                        <h1
                          key={organisation.id}
                          className="font-medium bg-zinc-100 p-2 mb-2 rounded-md text-gray-500"
                          onClick={() => {
                            setCustomSession(session, organisation);
                            router.push("/dashboard");
                            router.reload();
                          }}
                        >
                          {organisation.name}
                        </h1>
                      ))}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end p-2">
            <Button
              variant="secondary"
              className="flex justify-center items-center"
              onClick={() => {
                setCustomSession(null, null);
                router.reload();
              }}
            >
              <MdLogout className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManager;
