import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button"
import Image from "next/image"
import Pic from "@/public/section-r-pic.svg"
import one from "@/public/1.svg"
import { Contact2 } from 'lucide-react';


  

const CardSection = () => {
  return (
    <Card className="grid max-w-[900px] h-[450px] mt-16 sm:grid-cols-2 bg-indigo-950">
      <div className="flex flex-col justify-center pl-10 z-10">
        <h3 className="text-white">Since 2018</h3>
        <h1 className="text-primary text-2xl sm:text-6xl font-extrabold">NATIONAL ACADEMY</h1>
        <h2 className="text-white">Entrance is the key to success</h2>
        <div className="flex justify-center">
        <Button variant={"default"} className="mx-10 mt-10 mr-24 p-6 font-semibold text-xl">
          <Contact2 className="mr-2" />
          Contact Us
        </Button>
        </div>
        
      </div>
      <div className="flex flex-col items-center justify-center pb-4 ">
        <Card className="shadow-md mt-6 p-6 mb-4 bg-gradient-to-br from-indigo-800 to-indigo-950">
          <Image src={one} width={250}
          height={400}
          alt="You are smart"/>
        </Card>
      </div>
    </Card>
  )
}

export default CardSection