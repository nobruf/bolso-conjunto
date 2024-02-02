"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MonthSelector = () => {
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <div className="-p-2">
      <div className="flex justify-between items-center px-4 py-2">
        <Button variant="ghost" size="icon" onClick={handlePreviousMonth}>
          <ArrowLeft />
        </Button>
        <p>
          {new Intl.DateTimeFormat("pt-BR", {
            month: "long",
            year: "numeric",
          })
            .format(new Date(year, month))
            .replace(/^\w/, (c) => c.toUpperCase())}
        </p>
        <Button variant="ghost" size="icon" onClick={handleNextMonth}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default MonthSelector;
