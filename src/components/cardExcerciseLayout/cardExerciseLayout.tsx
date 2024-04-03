"use client";
import { ICardExcerciseLayout } from "./consts";
import { CardExercise } from "../cardExercise/cardExercise";
import "./cardExerciseLayout.css";

export const CardExerciseLayout = ({ dataArray }: ICardExcerciseLayout) => {
  return dataArray ? (
    <div className="cardExerciseLayout--Wrapper">
      {dataArray.map((card, index) => (
        <CardExercise key={index} type={card.type} excercises={card.exercise} />
      ))}
    </div>
  ) : (
    <h1 className="text-lg text-center p-8">
      No hay ejercicios por el momento 😔
    </h1>
  );
};
