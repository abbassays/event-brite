import {
  FaMusic,
  FaHeart,
  FaGlassMartiniAlt,
  FaBriefcase,
  FaTheaterMasks,
} from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { MdHolidayVillage, MdRadio } from "react-icons/md";

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Music":
      return FaMusic;
    case "Sports & Fitness":
      return GiRunningShoe;
    case "Health":
      return FaHeart;
    case "Food & Drink":
      return FaGlassMartiniAlt;
    case "Business":
      return FaBriefcase;
    case "Performing & Arts":
      return FaTheaterMasks;
    case "Holiday":
      return MdHolidayVillage;
    case "Hobbies":
      return MdRadio;
    default:
      return null;
  }
  
};
