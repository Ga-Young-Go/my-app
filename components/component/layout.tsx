/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/iGUdnGoLSng
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Layout() {
  return (
    <section className="w-full py-24 bg-white dark:bg-gray-800" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
                I'm always excited to discuss new projects and opportunities. Feel free to reach out to me using the
                form below.
              </p>
            </div>
            <form className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email address" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" required />
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
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
