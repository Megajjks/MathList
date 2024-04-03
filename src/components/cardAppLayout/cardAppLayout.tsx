"use client";
import { ICardAppLayout } from "./consts";
import { CardApp } from "@/components/cardApp/cardApp";
import "./cardAppLayout.css";

export const CardAppLayout = ({ dataArray }: ICardAppLayout) => {
  return dataArray.length > 0 ? (
    <div className="cardAppLayout--Wrapper">
      {dataArray.map((card, index) => (
        <CardApp
          key={index}
          title={card.title}
          avatarUrl={card.avatarUrl}
          avatarFallback={card.avatarFallback}
          description={card.description}
          appUrl={card.appUrl}
          excercisePath={card.excercisePath}
        />
      ))}
    </div>
  ) : (
    <h1 className="text-lg text-center p-8">
      Sin coincidencias con lo buscado 😔
    </h1>
  );
};
