"use client";
import { ICardAppLayout } from "./consts";
import { CardApp } from "@/components/cardApp/cardApp";
import "./cardAppLayout.css";

export const CardAppLayout = ({ dataArray }: ICardAppLayout) => {
  return (
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
  );
};
