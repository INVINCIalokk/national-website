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

  

const CardSection = () => {
  return (
    <Card className="grid w-2/3 max-w-[800px] max-h-400px mt-8 sm:grid-cols-2">
      <div className="flex flex-col justify-center pl-10">
        <h3>Since 2018</h3>
        <h1 className="text-primary text-2xl sm:text-5xl font-extrabold">NATIONAL ACADEMY</h1>
        <h2>Entrance is the key to success</h2>
        
      </div>
      <div className="flex flex-col items-center py-10 pr-4">
        <Image src={Pic} width={300}
        height={500}
        alt="You are smart"/>
        <Button variant={"destructive"} className="w-min mt-5">Contact Us</Button>
      </div>
    </Card>
  )
}

export default CardSection