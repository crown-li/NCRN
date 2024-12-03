"use client";

import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrement, increment } from "../store/features/counterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <VStack direction="row" h="20">
      <Box>
        <Text fontSize="xl">Count: {count}</Text>
      </Box>
      <Box>
        <Button onClick={() => dispatch(decrement())} mr={2}>
          -
        </Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </Box>
    </VStack>
  );
}
