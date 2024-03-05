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
    <Card className="grid max-w-[900px] mt-8 sm:grid-cols-2 bg-gradient-to-br from-indigo-200 to-indigo-100">
      <div className="flex flex-col justify-center pl-10 z-10">
        <h3>Since 2018</h3>
        <h1 className="text-primary text-2xl sm:text-6xl font-extrabold">NATIONAL ACADEMY</h1>
        <h2>Entrance is the key to success</h2>
        
      </div>
      <div className="flex flex-col items-center pb-4 ">
        <Card className="shadow-md mt-6 p-6 mb-4 bg-gradient-to-br from-indigo-800 to-indigo-950">
          <Image src={one} width={200}
          height={400}
          alt="You are smart"/>
        </Card>
        <Button variant={"default"} className="mb-4">
          <Contact2 className="mr-2" />
          Contact Us
        </Button>
      </div>
    </Card>
  )
}

export default CardSection