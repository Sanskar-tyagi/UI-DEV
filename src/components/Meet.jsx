import {
  chakra,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import bg from "../assets/images/bg.png";
export default function Meet() {
  return (
    <Box
      py={14}
      height={"100vh"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundPosition="center"
      backgroundImage={`url(
         ${bg}
        )`}
    >
      <Stack
        mx={14}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Stack
          direction="column"
          spacing={6}
          py={10}
          px={10}
          justifyContent="center"
          maxW="680px"
        >
          <HStack
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}
          >
            <HStack
              spacing={3}
              px={4}
              alignItems="center"
              justifyContent="center"
            >
              <Text lineHeight={1}> Build out of Frustration</Text>
            </HStack>
          </HStack>
          <chakra.h1
            fontSize="5xl"
            lineHeight={1.2}
            fontWeight="bold"
            textAlign="left"
          >
            Meet The
            <chakra.span color="teal"> MasterUI</chakra.span>
          </chakra.h1>

          <HStack
            spacing={{ base: 0, sm: 6 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          ></HStack>
        </Stack>
        <Box
          flex="3"
          display={"flex"}
          flexDirection={"column"}
          height={"80vh"}
          justifyContent="center"
          alignItems=" center"
        >
          <Text
            px={14}
            fontWeight={"400"}
            fontSize={"lg"}
            maxW={"550px"}
            py={0}
          >
            A personalized pocket coach that provides bite- sized,
            science-driven tools to boost emotional intelligence.
          </Text>
          <br />
          <Text
            px={14}
            fontWeight={"400"}
            fontSize={"lg"}
            maxW={"550px"}
            py={0}
          >
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
