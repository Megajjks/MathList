"use client";
import { INavbar } from "./consts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/data/navBar";
import "./navbar.css";
import Link from "next/link";

export const Navbar = ({ title, LogoUrl }: INavbar) => {
  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 navbar--wrapper ">
      <div className="navbar--logo">
        <Avatar>
          <AvatarImage src={LogoUrl} />
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <h1 className="hidden font-bold sm:inline-block">{title}</h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {navItems.map((item, index) => (
              <Link key={index} href={item.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="navbar--cta">
        <ModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};
