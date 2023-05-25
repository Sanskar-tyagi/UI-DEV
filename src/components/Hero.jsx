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
  Image,
} from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import { AiFillApple, AiFillStar } from "react-icons/ai";
import Scene from "./Scene";
export default function Hero() {
  return (
    <Box
      sx={{ borderRadius: "10%" }}
      py={24}
      backgroundColor={"#EFECFF"}
      background={`url(
        "https://assets.website-files.com/638ff800599a0427a59d547f/639166b5f088823230aed540_gradient_1.jpg"
      )`}
    >
      <Stack
        mx={14}
        mt={5}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
      >
        <Stack
          direction="column"
          spacing={6}
          px={10}
          justifyContent="center"
          maxW="680px"
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
              py={2}
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
            spacing={{ base: 0, sm: 6 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
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
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent="center"
              bg={useColorModeValue("white", "gray.800")}
              w={{ base: "100%", sm: "auto" }}
              border="1px solid"
              borderColor="gray.300"
              px={3}
              py={2}
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
        <Box flex="3" className="dot" position="relative" width={"40%"}>
          <Scene></Scene>
          <Image
            className="float"
            width="270px"
            height="550px"
            object-fit="contain"
            position="absolute"
            top="-5"
            bottom="0"
            borderRadius={"1.9em"}
            left="230px"
            right="0"
            margin="0"
            src={
              "https://assets.website-files.com/638ff800599a0427a59d547f/6393f030fcb1045459eb4780_app_1-p-500.jpg"
            }
            alt=""
          />
        </Box>
      </Stack>
      <>
        <Image
          position={"absolute"}
          top={"14vh"}
          right={"12vw"}
          src="https://assets.website-files.com/63be6b95d526b7b72dcb1d66/63c668f84b209dd2c0dd8120_Path3.png"
          alt=""
        />
        <Image
          position={"absolute"}
          top={"14vh"}
          right={"42vw"}
          src="https://assets.website-files.com/63be6b95d526b7b72dcb1d66/63c668fb65ab0c02ae2e92b6_Shape%207.png"
          alt=""
        />
        <Image
          position={"absolute"}
          top={"55vh"}
          right={"12vw"}
          src="https://assets.website-files.com/63be6b95d526b7b72dcb1d66/63c788ee1500088ead20ec6a_Path%20(6).png"
          alt=""
        />
        <Image
          position={"absolute"}
          top={"48vh"}
          right={"42vw"}
          src="https://assets.website-files.com/63be6b95d526b7b72dcb1d66/63c668f5199d461998784c89_Path%204.png"
          alt=""
        />
      </>{" "}
    </Box>
  );
}
