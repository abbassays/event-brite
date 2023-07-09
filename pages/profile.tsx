import React, { useEffect, useState } from "react";

import Layout from "../components/CustomUI/Layout";
import Profile from "../components/Profile/Profile";
import ChangePasswordForm from "../components/Profile/ChangePasswordForm";
import BillingAddress from "../components/Profile/BillingAddressForm";
import OrdersList from "../components/Profile/OrdersList";
import Sidebar from "../components/CustomUI/Sidebar";

const ProfilePage = () => {
  /* fetch user id from session */
  const userId = "1";

  const [selectedItem, setSelectedItem] = useState<string>("Profile");

  const sideBarItems = ["Profile", "Password", "Billing Address", "My Orders"];

  return (
    <Layout title={`User Profile`}>
      <div className="flex justify-start">
        <Sidebar
          items={sideBarItems}
          selected={selectedItem}
          setselected={setSelectedItem}
        />

        <div className="flex flex-col w-full">
          {selectedItem === "Profile" && <Profile userId={userId} />}
          {selectedItem === "Password" && <ChangePasswordForm />}
          {selectedItem === "Billing Address" && (
            <BillingAddress userId={userId} />
          )}
          {selectedItem === "My Orders" && <OrdersList userId={userId} />}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
