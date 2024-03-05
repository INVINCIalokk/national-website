import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const MainNavBar = () => {
  return (
    <header className="flex sticky top-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-indigo-200 justify-between items-center px-16 py-3 w-full z-50">
          <Link href="/" className="flex items-center text-xl sm:text-2xl font-bold text-primary space-x-5">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <h1>NATIONAL ACADMEY</h1>
          </Link>
          <nav className="hidden md:flex justify-center items-center space-x-10 ">
          <Link href="/" className="hover:text-secondary-foreground/50 text-secondary-foreground">
            Home
          </Link>
          <Link href="/features" className="hover:text-gray-600 text-gray-700">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-gray-600 text-gray-700">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-gray-600 text-gray-700">
            About Us
          </Link>
          <Link href="/get-started" className="hover:text-gray-600 text-gray-700">
             Started
          </Link>
          <Button>
            Learn
            <ChevronRight/>
          </Button>
          </nav>
        
    </header>
  )
}
