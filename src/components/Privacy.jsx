import {
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  Box,
  Center,
  Button,
  Image,
} from "@chakra-ui/react";
import sign from "../assets/images/sign.png";
const Privacy = () => {
  return (
    <Container maxW="7xl" h={"80vh"} pt={"20vh"} mx="auto">
      <Center>
        <VStack spacing={4} px={2} alignItems={{ base: "center", sm: "ceter" }}>
          <Stack justifyContent="center" alignItems="center">
            <Text fontSize="md" fontWeight={"medium"}>
              We take privacy seriously
            </Text>
          </Stack>
          <Heading fontSize={"3xl"} fontWeight={"bold"}>
            Before you get started
          </Heading>
          <Text
            textAlign="center"
            fontSize={"2xl"}
            width={"64%"}
            fontWeight={"400"}
          >
            "We won't share your answers with anyone (and won't ever tell you
            which friends said what about you)"
          </Text>
          <Stack direction={"row"} alignItems={" center"}>
            <Text fontWeight={"medium"}> with love,</Text>{" "}
            <Image src={sign}></Image>
          </Stack>

          <Flex
            alignItems="center"
            direction={"column"}
            gap={2}
            justify="center"
            w="100%"
          >
            <Box textAlign="center">
              {" "}
              <Button
                background="black"
                variant="solid"
                colorScheme="blackAlpha"
                rounded="full"
                color="white"
                fontWeight={"light"}
                size="md"
              >
                start a test
              </Button>
            </Box>
            <Text textAlign="center" fontWeight={"light"}>
              Take only 5 min test
            </Text>
          </Flex>
        </VStack>
      </Center>
    </Container>
  );
};

export default Privacy;
