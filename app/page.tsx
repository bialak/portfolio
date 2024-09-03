import "@/app/globals.css";
import WelcomeSection from "@/components/WelcomeSection";
import ToolBar from "@/components/ToolBar";

export const metadata = {
  title: "Portfolio",
  description: "Here you will learn a few things about me and my projects",
};

export default function Home() {
  return (
    <div>
      <ToolBar></ToolBar>
      <WelcomeSection></WelcomeSection>
    </div>
  );
}
