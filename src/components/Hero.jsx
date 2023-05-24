import {
  chakra,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import { AiFillApple, AiFillStar } from "react-icons/ai";
import Scene from "./Scene";

export default function Hero() {
  return (
    <Box sx={{ borderRadius: "10%" }} py={24} backgroundColor={"#EFECFF"}>
      <Stack
        mx={12}
        mt={5}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
      >
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          maxW="580px"
        >
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}
          >
            <Box
              py={1}
              px={2}
              lineHeight={1}
              rounded="full"
              color="white"
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
            >
              Ahead App
            </Box>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Text lineHeight={1}>See our recent updates</Text>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </HStack>
          <chakra.h1
            fontSize="7xl"
            lineHeight={1.2}
            fontWeight="bold"
            textAlign="left"
          >
            Master your life by mastering
            <br />
            <chakra.span color="teal"> ChakraUI</chakra.span>
          </chakra.h1>

          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: "100%", sm: "auto" }}
              h={12}
              px={4}
              display={"flex"}
              justifyContent={"space-between;"}
              alignItems={"center"}
              color="white"
              size="md"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
              _hover={{
                bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
                opacity: 0.9,
              }}
            >
              <Icon as={AiFillApple} h={10} w={10} ml={1} />
              <Flex direction={"column"}>
                <chakra.span fontSize={"10px"}> Download on </chakra.span>
                <chakra.span>App Store </chakra.span>
              </Flex>
            </chakra.button>
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent="center"
              bg={useColorModeValue("white", "gray.800")}
              w={{ base: "100%", sm: "auto" }}
              border="1px solid"
              borderColor="gray.300"
              p={3}
              lineHeight={1.28}
              rounded="md"
              boxShadow="md"
              as={Link}
            >
              <Flex>
                <Icon as={AiFillStar} color={"yellow.300"} h={5} w={5} ml={1} />
                <Icon as={AiFillStar} color={"yellow.300"} h={5} w={5} ml={1} />
                <Icon as={AiFillStar} color={"yellow.300"} h={5} w={5} ml={1} />
                <Icon as={AiFillStar} color={"yellow.300"} h={5} w={5} ml={1} />
                <Icon as={AiFillStar} color={"yellow.300"} h={5} w={5} ml={1} />
              </Flex>
              100+ reviews
            </Box>
          </HStack>
        </Stack>
        <Box width={"40%"}>
          <Scene></Scene>
        </Box>
      </Stack>
    </Box>
  );
}
