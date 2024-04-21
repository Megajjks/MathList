"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/navbar/navbar";
import { Input } from "@/components/ui/input";
import { CardAppLayout } from "@/components/cardAppLayout/cardAppLayout";
import { appList } from "@/data/appList";

export default function Home() {
  const t = useTranslations("home");
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
            {t("title")}
          </h1>
          <h2 className="text-center text-lg leading-7 [&:not(:first-child)]:mt-6">
            {t("subtitle")}
          </h2>
        </div>
        <div className="flex flex-col items-center w-full mt-5">
          <Input
            className="w-2/3"
            type="appfilter"
            placeholder={t("search-bar")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CardAppLayout dataArray={filteredApps} />
        </div>
      </main>
    </>
  );
}
