import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <BrushIcon className="h-6 w-6" />
        <span className="sr-only">Illustrator Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Work
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Jenna Doe
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Jenna is a talented illustrator who specializes in whimsical and vibrant digital art. Her work is
                inspired by nature, fantasy, and the beauty of the everyday.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                alt="Illustration 1"
                className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">Whimsical Forest</h3>
                <p className="text-sm">Digital Illustration</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                alt="Illustration 2"
                className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">Enchanted Meadow</h3>
                <p className="text-sm">Digital Illustration</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                alt="Illustration 3"
                className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">Celestial Dreamscape</h3>
                <p className="text-sm">Digital Illustration</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                alt="Illustration 4"
                className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">Floral Fantasy</h3>
                <p className="text-sm">Digital Illustration</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                alt="Illustration 5"
                className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">Underwater Oasis</h3>
                <p className="text-sm">Digital Illustration</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                alt="Illustration 6"
                className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">Autumn Reverie</h3>
                <p className="text-sm">Digital Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="grid items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let&apos;s Collaborate</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                If you&apos;re interested in working with Jenna or would like to inquire about her services, please fill
                out the form below.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <Input className="max-w-lg" placeholder="Name" type="text" />
                <Input className="max-w-lg" placeholder="Email" type="email" />
                <Textarea className="max-w-lg" placeholder="Message" rows={4} />
                <Button className="w-full" type="submit">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Jenna Doe. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
      </nav>
    </footer>
  </div>

  );
}
function BrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}



