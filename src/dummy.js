import { CiCircleList } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
export const ClientList = [
  { label: "Client1", value: "1" },
  { label: "Client2", value: "2" },
  { label: "Client3", value: "3" },
];
export const RateType = [
  { label: "Project Hourly Rate", value: "1" },
  { label: "Project Monthly Rate", value: "2" },
  { label: "Project Hourly Rate", value: "3" },
];

export const permissionList = [
  {
    title: "Everyone",
    description:
      "All Users can now to see it , but geusts cannot access the projects.",
    icon: <CiCircleList size={"20"} rotate={"90"} />,
    value: "all",
  },
  {
    title: "Only Admin's",
    description: "Only Admins can manage everything.",
    icon: <FaRegUserCircle size={"20"} />,
    value: "admin",
  },
  {
    title: "Only to Specific people",
    description: "Only some specific people can able to see it.",
    icon: <GoPeople size={"20"} />,
    value: "specific",
  },
];
