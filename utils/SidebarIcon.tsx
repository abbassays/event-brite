import { CgProfile, CgPassword, CgHome, CgList } from "react-icons/cg";
import { GiTicket, GiPartyFlags } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { TbHomeStats } from "react-icons/tb";

export const SidebarIcon = ({ item }: { item: string }) => {
  if (item === "Profile") return <CgProfile />;
  if (item === "Password") return <CgPassword />;
  if (item === "Billing Address") return <CgHome />;
  if (item === "My Orders") return <CgList />;
  if (item === "Event") return <GiPartyFlags />;
  if (item === "Ticket") return <GiTicket />;
  if (item === "Organiser") return <BiUser />;
  if (item === "Dashboard") return <TbHomeStats />;

  return null;
};

export default SidebarIcon;
