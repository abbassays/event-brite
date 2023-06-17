import { GiTicket, GiPartyFlags } from "react-icons/gi";
import { BiUser } from "react-icons/bi";

export const AdminIcon = ({ item }: { item: string }) => {
  if (item === "Event") return <GiPartyFlags />;
  if (item === "Ticket") return <GiTicket />;
  if (item === "Organiser") return <BiUser />;

  return null;
};

export default AdminIcon;
