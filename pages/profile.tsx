import React, { useEffect, useState } from "react";

import { BillingAddressType, ProfileType, UserType } from "@/types";
import { allUsers } from "@/utils/json-database";

import Layout from "../components/CustomUI/Layout";
import Profile from "../components/Profile/Profile";
import ChangePasswordForm from "../components/Profile/ChangePasswordForm";
import BillingAddress from "../components/Profile/BillingAddressForm";
import OrdersList from "../components/Profile/OrdersList";
import Sidebar from "../components/CustomUI/Sidebar";
import PageLoader from "@/components/CustomUI/PageLoader";

const ProfilePage = () => {
  /* fetch user id from session */
  const userId = "1";
  const [user, setUser] = useState<ProfileType>();

  const fetchUser = () => {
    /* function to fetch user details */
    const user = allUsers.find((user) => user.id === userId);
    setUser(user);
  };

  useEffect(() => {
    if (userId) fetchUser();
  }, [allUsers, userId]);

  const [selectedItem, setSelectedItem] = useState<string>("Profile");

  const sideBarItems = ["Profile", "Password", "Billing Address", "My Orders"];

  if (!user) return <PageLoader />;

  return (
    <Layout title={`User Profile`}>
      <div className="flex justify-start">
        <Sidebar
          items={sideBarItems}
          selected={selectedItem}
          setselected={setSelectedItem}
        />

        <div className="flex flex-col w-full">
          {selectedItem === "Profile" && <Profile user={user} />}
          {selectedItem === "Password" && <ChangePasswordForm />}
          {selectedItem === "Billing Address" && (
            <BillingAddress user={user} />
          )}
          {selectedItem === "My Orders" && <OrdersList userId={userId} />}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
