import FarmComponent from "@/views/FarmView/commons/FarmComponent/FarmComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Farm",
};
export default function Farm() {
  return <FarmComponent />;
}
