"use client";

import { Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

export const Start = () => {
  const [result, setResult] = useState<string>("");

  const handleStart = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getStart");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.text();
      setResult(result);
    } catch (error) {
      setResult((error as Error).message);
    }
  };

  return (
    <div>
      <Heading size="2xl" letterSpacing="tight">
        {result}
      </Heading>
      <Button
        aria-label="fetch"
        onClick={handleStart}
        style={{ width: "100%", marginTop: 20 }}
      >
        开始
      </Button>
    </div>
  );
};
