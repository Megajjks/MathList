"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { ejerciciosList } from "@/data/ejerciciosList";
import { IExerciseArray, IExerciseObject } from "./const";
export default function EjerciciosTemplate({
  params,
}: {
  params: { slug: string };
}) {
  const [page, setPage] = useState<IExerciseObject>();

  useEffect(() => {
    getPageData(ejerciciosList);
  }, [params.slug]);

  const filterExerciseObj = (exerciseObj: IExerciseArray) =>
    exerciseObj.find(
      (excersice: IExerciseObject) => excersice.key === params.slug
    );

  const getPageData = (dataArray: IExerciseArray) => {
    const data = filterExerciseObj(dataArray);
    setPage(data);
  };

  return (
    <>
      <Navbar
        title="Mate App"
        LogoUrl="https://cdn-icons-png.flaticon.com/512/7407/7407078.png"
      />
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:text-center">
            {`Ejercicios con ${page?.name}`}
          </h1>
        </div>
      </main>
    </>
  );
}
