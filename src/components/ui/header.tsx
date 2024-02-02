"use client";
import {
  Home,
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  Percent,
  PlusIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex justify-between p-[1rem] rounded-none">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Organize sua vida!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLoginClick}
              >
                <LogInIcon />
                Fazer Login
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLogoutClick}
              >
                <LogOutIcon />
                Desconectar
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon />
                  Inicio
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Home />
                  Dashboard
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon />
                  Contas
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="font-bold text-primary">Bolso</span> Conjunto
        </h1>
      </Link>

      <Button size="icon" variant="ghost">
        <div className="relative">
          <PlusIcon />
        </div>
      </Button>
    </Card>
  );
};

export default Header;
