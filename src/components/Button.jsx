import { Flex, Icon, chakra } from "@chakra-ui/react";

import { AiFillApple } from "react-icons/ai";
export default function Button() {
  return (
    <chakra.button
      w={{ base: "100%", sm: "auto" }}
      h={12}
      px={5}
      display={"flex"}
      justifyContent={"space-between;"}
      alignItems={"center"}
      color="white"
      rounded="md"
      mb={{ base: 2, sm: 0 }}
      bgGradient="linear(to-l, #0ea5e9,#2563eb)"
      _hover={{
        bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
        opacity: 0.9,
      }}
    >
      <Icon as={AiFillApple} h={9} w={9} />
      <Flex direction={"column"}>
        <chakra.span fontSize={"10px"}> Download on </chakra.span>
        <chakra.span>App Store </chakra.span>
      </Flex>
    </chakra.button>
  );
}
