import { CgProfile, CgPassword, CgHome, CgList } from "react-icons/cg";
import { GiTicket, GiPartyFlags } from "react-icons/gi";
import { PiUsersThree, PiUser } from "react-icons/pi";
import { TbHomeStats,TbSettingsDollar } from "react-icons/tb";
import { FaStripeS } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";

export const SidebarIcon = ({ item }: { item: string }) => {
  if (item === "Profile") return <CgProfile />;
  if (item === "Password") return <CgPassword />;
  if (item === "Billing Address") return <CgHome />;
  if (item === "My Orders") return <CgList />;
  if (item === "Stripe Details") return <FaStripeS />;
  if (item === "Payment Configuration") return <TbSettingsDollar />;

  if (item === "Dashboard") return <TbHomeStats />;
  if (item === "Events") return <GiPartyFlags />;
  if (item === "Tickets") return <GiTicket />;
  if (item === "Organisers") return <PiUser />;
  if (item === "Staff Members") return <PiUsersThree />;
  if (item === "Sales") return <BiSolidDollarCircle />;

  return null;
};

export default SidebarIcon;
