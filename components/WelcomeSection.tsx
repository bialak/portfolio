import "@/app/globals.css";
import Typewriter from "@/components/Typewriter";

export default function WelcomeSection() {
  return (
    <div className="welcomeSection">
      <Typewriter
        text="Hello, My name is Klaudia Biała"
        delay={100}
      ></Typewriter>
    </div>
  );
}
