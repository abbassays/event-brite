import React, { useEffect, useState } from "react";

import { UserType } from "../types";

import Layout from "../components/UI/Layout";
import Profile from "../components/Profile/Profile";
import ChangePassword from "../components/Profile/ChangePassword";
import BillingAddress from "../components/Profile/BillingAddress";
import OrdersList from "../components/Profile/OrdersList";
import Sidebar from "../components/Profile/Sidebar";

const userData: UserType = {
  id: "1",
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 1000 1234",
  avatar: "/images/avatar.png",
};

const ProfilePage = () => {
  const [user, setUser] = useState<UserType>();
  const [selectedItem, setSelectedItem] = useState<string>("Profile");

  const sideBarItems = ["Profile", "Password", "Billing Address", "My Orders"];

  const fetchUser = () => {
    /* Replace this code with your code to fetch user */
    setUser(userData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Layout title={`Profile ${user?.name}`}>
      <div className="flex justify-start">
        <Sidebar
          items={sideBarItems}
          selected={selectedItem}
          setselected={setSelectedItem}
        />

        <div className="flex flex-col w-full">
          {selectedItem === "Profile" && <Profile {...user} />}
          {selectedItem === "Password" && <ChangePassword />}
          {selectedItem === "Billing Address" && (
            <BillingAddress userId={user.id} />
          )}
          {selectedItem === "My Orders" && <OrdersList userId={user.id} />}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
