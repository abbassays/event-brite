import { IoLocationSharp } from "react-icons/io5";
import { GiTicket, GiPartyFlags } from "react-icons/gi";
import { PiUser, PiUsersThree } from "react-icons/pi";
import { BiDollar } from "react-icons/bi";

export const AdminIcon = ({ item }: { item: string }) => {
  if (item === "Event") return <GiPartyFlags />;
  if (item === "Ticket") return <GiTicket />;
  if (item === "Organiser") return <PiUser />;
  if (item === "Staff Member") return <PiUsersThree />;
  if (item === "Sale") return <BiDollar />;
  if (item === "Check-In") return <IoLocationSharp />;

  return null;
};

export default AdminIcon;
