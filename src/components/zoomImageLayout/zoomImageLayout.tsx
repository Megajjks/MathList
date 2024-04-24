"use client";
import { useTranslations } from "next-intl";
import { IZoomImageLayout } from "./consts";
import "./zoomImageLayout.css";
import Img from "../../../public/exampleimg.jpg";
import Zoom from "next-image-zoom";

export const ZoomImageLayout = ({ imgArray }: IZoomImageLayout) => {
  const t = useTranslations("excercise");
  return (
    <div className="zoomImageLayout--wrapper">
      <h3 className="text-lg font-semibold leading-none tracking-tight">
        {t("examples")}
      </h3>
      <div className="zoomImage--container">
        {imgArray?.map((example, index) => (
          <Zoom
            key={index}
            src={example.path}
            alt={example.alt}
            width={1000}
            height={1000}
          />
        ))}
      </div>
    </div>
  );
};
