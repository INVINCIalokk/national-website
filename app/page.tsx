import Hero from "@/components/Hero/Hero"
import Image from "next/image";
import Lg from "@/public/light-bulb.svg"
import Ex from "@/public/exams.svg"
import Bt from "@/public/bootom.svg"
import Rg from "@/public/road-to-knowledge.svg"
import CoursesCard from "@/components/Courses/CoursesCard";
import ToppersCrousel from "@/components/Toppers/ToppersCrousel";
import { BentoGridDemo } from "@/components/Testimonial/Testemonials";
import { LampDemo } from "@/components/AboutUs/Aboutus";
import { ContactUs } from "@/components/ContactUs/contactUs";

export default function Home() {
  return (
    <>
      <div className="realtive bg-gradient-to-br from-indigo-400 to-indigo-200 h-hero">
        <Hero/>
        <div className="absolute top-64 left-10 opacity-50 -rotate-12">
          <Image src={Lg} width={140} height={100} alt="BULB"/>
        </div>
        <div className="absolute top-64 right-8 opacity-50 rotate-12">
          <Image src={Ex} width={250} height={100} alt="BULB"/>
        </div>
        <div className="absolute m-8 ml-48 bottom-0 opacity-50">
          <Image src={Bt} width={300} height={100} alt="BULB"/>
        </div>
        <div className="absolute m-8 ml-48 bottom-0 opacity-50">
          <Image src={Bt} width={300} height={100} alt="BULB"/>
        </div>
        <div className="flex justify-end mr-56 bottom-0 opacity-50">
          <div>
            <Image src={Rg} width={250} height={150} alt="BULB"/>
          </div>
        </div>
      </div>
      <div className="realtive bg-gradient-to-b from-indigo-800 to-indigo-950 h-auto">
        <CoursesCard/>
        <ToppersCrousel/>
      </div>
      <div>
        <BentoGridDemo/>
        <LampDemo/>
        <ContactUs/>
      </div>
    </>


  );
}
