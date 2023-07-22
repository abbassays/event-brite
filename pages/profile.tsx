import { useEffect, useState } from "react";

import { useCustomSession } from "@/context/customSession";
import { ProfileType } from "@/types";
import { allUsers } from "@/utils/json-database";

import Layout from "@/components/CustomUI/Layout";
import PageLoader from "@/components/CustomUI/PageLoader";
import SettingsSidebar from "@/components/CustomUI/SettingsSidebar";
import BillingAddress from "@/components/Profile/BillingAddressForm";
import ChangePasswordForm from "@/components/Profile/ChangePasswordForm";
import OrdersList from "@/components/Profile/OrdersList";
import ProfileForm from "@/components/Profile/ProfileForm";
import PaymentConfigForm from "@/components/Profile/PaymentConfigForm";
import { getSettingsSidebarItems } from "@/utils/GetListItems";

const ProfilePage = () => {
  /* fetch user id from session */
  const userId = "1";
  const [user, setUser] = useState<ProfileType>();

  const { customSession } = useCustomSession();

  const fetchUser = () => {
    /* function to fetch user details */
    const user = allUsers.find((user) => user.id === userId);
    setUser(user);
  };

  useEffect(() => {
    if (userId) fetchUser();
  }, [allUsers, userId]);

  const [selectedItem, setSelectedItem] = useState<string>("Profile");

  if (!user && !customSession) return <PageLoader />;

  return (
    <Layout title={`User Profile`}>
      <div className="flex justify-start">
        <SettingsSidebar
          items={getSettingsSidebarItems(customSession?.role || "")}
          selected={selectedItem}
          setselected={setSelectedItem}
        />

        <div className="flex flex-col w-full">
          {selectedItem === "Profile" && <ProfileForm user={user} />}
          {selectedItem === "Password" && <ChangePasswordForm />}
          {selectedItem === "Billing Address" && <BillingAddress user={user} />}
          {selectedItem === "My Orders" && <OrdersList userId={userId} />}
          {selectedItem === "Stripe Details" && (
            <PaymentConfigForm user={user} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
