import { CgProfile, CgPassword, CgHome, CgList } from "react-icons/cg";
import { GiTicket, GiPartyFlags } from "react-icons/gi";
import { PiUsersThree, PiUser } from "react-icons/pi";
import { TbHomeStats } from "react-icons/tb";
import { FaStripeS } from "react-icons/fa";

export const SidebarIcon = ({ item }: { item: string }) => {
  if (item === "Profile") return <CgProfile />;
  if (item === "Password") return <CgPassword />;
  if (item === "Billing Address") return <CgHome />;
  if (item === "My Orders") return <CgList />;
  if (item === "Event") return <GiPartyFlags />;
  if (item === "Ticket") return <GiTicket />;
  if (item === "Organiser") return <PiUser />;
  if (item === "Dashboard") return <TbHomeStats />;
  if (item === "Staff Members") return <PiUsersThree />;
  if (item === "Stripe Details") return <FaStripeS />;

  return null;
};

export default SidebarIcon;
