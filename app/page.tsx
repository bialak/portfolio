import "@/app/globals.css";
import WelcomeSection from "@/components/WelcomeSection";
import {
  Explorer,
  Extensions,
  RunAndDebug,
  Search,
  SourceControl,
} from "@/components/icons/index";

export const metadata = {
  title: "Portfolio",
  description: "Here you will learn a few things about me and my projects",
};

export default function Home() {
  return (
    <div>
      <div className="leftBar">
        <Explorer />
        <Search />
        <SourceControl />
        <RunAndDebug />
        <Extensions />
      </div>
      <WelcomeSection></WelcomeSection>
    </div>
  );
}
