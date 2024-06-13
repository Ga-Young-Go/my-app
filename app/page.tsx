import Image from "next/image";
import { Layout } from "@/components/component/layout";
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-white dark:bg-gray-800" id="contact">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
              고가영의 포토폴리오
            </p>
          </div>
          <form className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="고가영" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="gy030316@gmail.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="고가영입니다" required />
            </div>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
        <div className="flex items-center justify-center">
        <img
         alt="Contact"
         className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
         height="550"
         src="https://i.pinimg.com/236x/45/ef/ac/45eface3102b47c58c80fe40224104bc.jpg"
         width="550"
         />
        </div>
      </div>
    </div>
  </section>)
}

