import Hero from "@/components/Hero/Hero"
import Image from "next/image";
import Lg from "@/public/light-bulb.svg"
import Ex from "@/public/exams.svg"
export default function Home() {
  return (
    <>
      <div className="realtive bg-gradient-to-br from-indigo-100 to-white h-hero">
        <Hero/>
        <div className="absolute top-64 left-10 opacity-50 -rotate-12">
          <Image src={Lg} width={140} height={100} alt="BULB"/>
        </div>
        <div className="absolute top-64 right-16 opacity-50 rotate-12">
          <Image src={Ex} width={300} height={100} alt="BULB"/>
        </div>
      </div>
      {/* <Hero/> */}
    </>


  );
}
