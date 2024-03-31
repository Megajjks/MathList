"use client";
import { ICardApp } from "./consts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import "./cardApp.css";

export const CardApp = ({
  title,
  avatarUrl,
  avatarFallback,
  description,
  appUrl,
  excercisePath,
}: ICardApp) => {
  const router = useRouter();

  const handleOnPrimaryBtn = () => {
    window.open(appUrl, "_blank");
  };
  const handleOnSecundaryBtn = () => {
    router.push(`/${excercisePath}`);
  };

  return (
    <Card className="card-app--wrapper">
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="card--app--content">
        <CardHeader className="p-0">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        {description && (
          <CardContent className="p-0">
            <CardDescription>{description}</CardDescription>
          </CardContent>
        )}
        <CardFooter className="p-0 action-bar">
          <Button onClick={handleOnPrimaryBtn}>Abrir</Button>
          {excercisePath && (
            <Button onClick={handleOnSecundaryBtn} variant="outline">
              Ejercicios
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
