import circle1 from "@/images/circles/circle1.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src={circle1} alt="kolko"></Image>
      <div className="title">Hello, My name is Klaudia Biała. </div>
    </>
  );
}
