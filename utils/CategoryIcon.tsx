import {
  FaMusic,
  FaHeart,
  FaGlassMartiniAlt,
  FaBriefcase,
  FaTheaterMasks,
} from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { MdHolidayVillage, MdRadio } from "react-icons/md";

export const CategoryIcon = ({ category }: { category: string }) => {
  if (category === "Music") return <FaMusic />;
  if (category === "Sports & Fitness") return <GiRunningShoe />;
  if (category === "Health") return <FaHeart />;
  if (category === "Food & Drink") return <FaGlassMartiniAlt />;
  if (category === "Business") return <FaBriefcase />;
  if (category === "Performing & Arts") return <FaTheaterMasks />;
  if (category === "Holiday") return <MdHolidayVillage />;
  if (category === "Hobbies") return <MdRadio />;

  return null;
};

export default CategoryIcon;
