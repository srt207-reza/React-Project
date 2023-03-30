import React from "react";
import { Button } from "@chakra-ui/react";
import { UseDirection } from "../../Context/LocaleProvider";

export default function CustomButton({ className, text, children, onClick }) {
  const Direction = UseDirection();

  return (
    <Button className={className} onClick={onClick}>
      {Direction === "rtl" ? (
        <>
          {text}
          {children}
        </>
      ) : (
        <>
          {children}
          {text}
        </>
      )}
    </Button>
  );
}
