import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar
        title="Mate App"
        LogoUrl="https://cdn-icons-png.flaticon.com/512/7407/7407078.png"
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Add colors. Make it yours.
          </h1>
          <span className="leading-7 [&:not(:first-child)]:mt-6">
            Hand-picked themes that you can copy and paste into your apps.
          </span>
        </div>
      </main>
    </>
  );
}
