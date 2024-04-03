"use client";
import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import { Input } from "@/components/ui/input";
import { CardAppLayout } from "@/components/cardAppLayout/cardAppLayout";
import { appList } from "@/data/appList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps =
    searchTerm.trim() === ""
      ? appList
      : appList.filter((app) =>
          app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <>
      <Navbar
        title="Mate App"
        LogoUrl="https://cdn-icons-png.flaticon.com/512/7407/7407078.png"
      />
      <main className="flex min-h-screen flex-col items-center sm:p-24 p-4">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            ¡Potencia tus habilidades matemáticas!
          </h1>
          <h2 className="text-center text-lg leading-7 [&:not(:first-child)]:mt-6">
            Descubre apps para dominar cada problema. ¡Explora ya!
          </h2>
        </div>
        <div className="flex flex-col items-center w-full mt-5">
          <Input
            className="w-2/3"
            type="appfilter"
            placeholder="Escribe el nombre de tu app."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CardAppLayout dataArray={filteredApps} />
        </div>
      </main>
    </>
  );
}
