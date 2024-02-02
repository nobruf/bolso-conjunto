import { AlertTriangle } from "lucide-react";
import React from "react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

function HeaderAlert() {
  return (
    <Alert
      variant={"destructive"}
      className="p-2 flex justify-center items-center rounded-none"
    >
      <AlertTitle className="flex gap-1">
        <AlertTriangle className="h-4 w-4" />
        Atenção você possui <strong>2</strong> contas atrasadas!
      </AlertTitle>
    </Alert>
  );
}

export default HeaderAlert;
