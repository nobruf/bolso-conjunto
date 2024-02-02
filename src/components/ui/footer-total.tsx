import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./card";
import { Separator } from "./separator";

const FooterTotal = () => {
  return (
    <Card className="bg-primary-foreground  rounded-none flex flex-col justify-between w-full">
      <CardHeader className="p-2">
        <CardTitle className="flex justify-between items-center font-normal">
          Total a pagar
          <p className="text-xl">R$0,00</p>
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex bg-primary/5 justify-between p-2 items-center">
        Saldo a pagar
        <p className="text-xl">R$0,00</p>
      </CardFooter>
    </Card>
  );
};

export default FooterTotal;
