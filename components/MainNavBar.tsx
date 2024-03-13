import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const MainNavBar = () => {
  return (
    <header className="flex sticky top-0 border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  justify-between items-center px-14 py-1 w-full z-50">
          <Link href="/" className="flex items-center text-xl sm:text-2xl font-bold text-primary space-x-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <h1>NATIONAL ACADMEY</h1>
          </Link>
          <nav className="hidden md:flex justify-center items-center space-x-2 ">
          <>
            {links.map(({ href, text }) => (
              <Link key={href} href={href} className="text-sm font-medium text-primary bg-gray-50 p-2 rounded-lg hover:text-blue-950">{text}</Link>
            ))}
          </>
          <Button className="text-base">
            Learn
            <ChevronRight/>
          </Button>
          </nav>
        
    </header>
  )
}


const links = [
  { href: "/", text: "Home" },
  { href: "/features", text: "Courses" },
  { href: "/pricing", text: "Toppers" },
  { href: "/about", text: "Testemonials" },
  { href: "/get-started", text: "About us" },
  { href: "/get-started", text: "Contact us" },
]
