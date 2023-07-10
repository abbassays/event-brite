import { GiTicket, GiPartyFlags } from "react-icons/gi";
import { PiUser,PiUsersThree } from "react-icons/pi";

export const AdminIcon = ({ item }: { item: string }) => {
  if (item === "Event") return <GiPartyFlags />;
  if (item === "Ticket") return <GiTicket />;
  if (item === "Organiser") return <PiUser />;
  if (item === "Staff Member") return <PiUsersThree />;

  return null;
};

export default AdminIcon;
