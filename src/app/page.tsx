import TypeWritterTitle from "@/components/ui/TypewritterTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/dist/client/link";
import Image from "next/image";
import { TypeWritter } from "typewritter";

export default function Home() {
  return (
    
    <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center text-white">SophiaNotes</h1>
        <h2 className="font-semibold text-center text-5xl text-violet-600">AI note taking assistant.</h2>
        <br/>
        <h2 className="font-semibold text-center text-2xl text-white">
          <TypeWritterTitle/>
        </h2>
        <div className="mt-8"></div>
        
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-violet-600">Get Started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3}/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
  
}