import { CgProfile, CgPassword, CgHome, CgList } from "react-icons/cg";

export const SidebarIcon = ({ item }: { item: string }) => {
  if (item === "Profile") return <CgProfile />;
  if (item === "Password") return <CgPassword />;
  if (item === "Billing Address") return <CgHome />;
  if (item === "My Orders") return <CgList />;

  return null;
};

export default SidebarIcon;
