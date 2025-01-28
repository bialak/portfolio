import "@/app/globals.css";

import WelcomeSection from "@/components/Sections/WelcomeSection";

export const metadata = {
  title: "Portfolio",
  description: "Here you will learn a few things about me and my projects",
};

export default function Home() {
  return <WelcomeSection />;
}
