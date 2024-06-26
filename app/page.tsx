import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
            자기소개
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            작업물
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            연락
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  고가영(Ko Ga Young)
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                 2D픽셀아트&배경 일러스트
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
                  src="/1.jpg"
                  width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">전체타일</h3>
                  <p className="text-sm">타일</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  alt="Illustration 2"
                  className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                  height="400"
                  src="/2.jpg"
                  width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">던전 계단</h3>
                  <p className="text-sm">계단</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  alt="Illustration 3"
                  className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                  height="400"
                  src="/3.jpg"
                  width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">전체 맵</h3>
                  <p className="text-sm">던전1</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  alt="Illustration 4"
                  className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                  height="400"
                  src="/4.jpg"
                  width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">전체 맵</h3>
                  <p className="text-sm">던전2</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  alt="Illustration 5"
                  className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                  height="400"
                  src="/5.jpg"
                  width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">베이스캠프</h3>
                  <p className="text-sm">캠프</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  alt="Illustration 6"
                  className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-105"
                  height="400"
                  src="/6.jpg"
                  width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">타이틀화면</h3>
                  <p className="text-sm">아르테시아</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">연락주세요</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                언제든 편하게 연락 남겨주세요
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input className="max-w-lg" placeholder="이름" type="text" />
                  <Input className="max-w-lg" placeholder="이메일" type="email" />
                  <Textarea className="max-w-lg" placeholder="메세지" rows={4} />         
                  <Button className="w-full max-w-lg" type="submit">
                    전송하기
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-4 lg:px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm text-gray-500 hover:underline dark:text-gray-400" href="#">
              
            </Link>
            <Link className="text-sm text-gray-500 hover:underline dark:text-gray-400" href="#">
              
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

const BrushIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21l-4-4" />
    <path d="M17.74 13.74a6 6 0 00-8.48 0L7 16H5.5A4.5 4.5 0 001 20.5 2.5 2.5 0 003.5 23a4.5 4.5 0 004.5-4.5V17l2.26-2.26a6 6 0 008.48 0 6 6 0 000-8.48 6 6 0 00-8.48 0L11 7" />
  </svg>
);