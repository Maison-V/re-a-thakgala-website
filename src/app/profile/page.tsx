import type { Metadata } from "next";
import ProfilePageContent from "./ProfilePageContent";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "RE A Thakgala Trading Enterprise company profile — civil engineering, construction and supply & trade company based in South Africa.",
};

export default function ProfilePage() {
  return <ProfilePageContent />;
}
