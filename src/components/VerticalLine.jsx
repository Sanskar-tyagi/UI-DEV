import {
  Box,
  HStack,
  chakra,
  Stack,
  Text,
  OrderedList,
} from "@chakra-ui/react";
import { ListItem, VStack } from "@chakra-ui/react";

export default function VerticalLine() {
  return (
    <div>
      <Stack
        display={"flex"}
        borderRadius={"4%"}
        height={"100vh"}
        background={"#EEF8FE"}
        flexDirection={"column"}
        alignItems={"center"}
        pt={"20vh"}
      >
        <HStack
          mb={12}
          fontSize="md"
          flexDirection={"column"}
          alignItems={"center"}
          w="max-content"
        >
          <HStack spacing={1} alignItems="center" justifyContent="center">
            <Text lineHeight={1} fontSize={"lg"}>
              Let your friends, family, and co-workers (anonymously) rate your
              social skills.
            </Text>
          </HStack>
          <chakra.h3
            fontSize="45px"
            style={{ margin: "0px" }}
            fontWeight="bold"
            textAlign="center"
          >
            Ever wondered what others think of you?
          </chakra.h3>
        </HStack>
        <Stack width={"70vw"} style={{ marginBottom: "6rem" }}>
          <OrderedList
            listStyleType={"none"}
            display="flex"
            flexDirection={"row-reverse"}
            alignItems="center"
          >
            <ListItem position="relative" marginBottom={["6", 0]}>
              <VStack display="flex" flexDirection={"row-reverse"}>
                <VStack>
                  <Box
                    backgroundColor="yellow.200"
                    zIndex="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="6"
                    height="6"
                    borderColor="yellow.400"
                    borderRadius="full"
                    borderWidth={["none", "8"]}
                  >
                    <Text fontWeight="light">1</Text>
                  </Box>
                </VStack>
                <Box
                  display={"flex"}
                  width="90%"
                  backgroundColor="gray.200"
                  height="0.5"
                />
              </VStack>
              <Box marginTop="3" paddingRight={["0", "8"]}>
                <Text
                  fontSize="base"
                  fontWeight="normal"
                  textColor={["gray.500", "gray.400"]}
                >
                  Answer questions on your social skills
                </Text>
              </Box>
            </ListItem>
            <ListItem position="relative" marginBottom={["6", 0]}>
              <VStack display="flex" flexDirection={"row"}>
                <VStack>
                  <Box
                    backgroundColor="yellow.200"
                    zIndex="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="6"
                    height="6"
                    borderColor="yellow.400"
                    borderRadius="full"
                    borderWidth={["none", "8"]}
                  >
                    <Text fontWeight="light">2</Text>
                  </Box>
                </VStack>
                <Box
                  display={"flex"}
                  width="90%"
                  backgroundColor="gray.200"
                  height="0.5"
                />
              </VStack>
              <Box marginTop="3" paddingRight={["0", "8"]}>
                <Text
                  fontSize="base"
                  fontWeight="normal"
                  textColor={["gray.500", "gray.400"]}
                >
                  Let others anonymously answer the same questions about you
                </Text>
              </Box>
            </ListItem>
            <ListItem position="relative" marginBottom={["6", 0]}>
              <VStack display="flex" flexDirection={"row"}>
                <VStack>
                  <Box
                    backgroundColor="yellow.200"
                    zIndex="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="6"
                    height="6"
                    borderColor="yellow.400"
                    borderRadius="full"
                    borderWidth={["none", "8"]}
                  >
                    <Text fontWeight="light">1</Text>
                  </Box>
                </VStack>
                <Box
                  display={"flex"}
                  width="90%"
                  backgroundColor="gray.200"
                  height="0.5"
                />
              </VStack>
              <Box marginTop="3" paddingRight={["0", "8"]}>
                <Text
                  fontSize="base"
                  fontWeight="normal"
                  textColor={["gray.500", "gray.400"]}
                >
                  Find out where you and others see things the same way - and
                  where not!
                </Text>
              </Box>
            </ListItem>
          </OrderedList>
        </Stack>
        <Stack
          padding={"5rem"}
          background={"white"}
          width={"60vw"}
          borderRadius={"6%"}
        >
          <OrderedList
            listStyleType={"none"}
            display="flex"
            flexDirection={"row"}
            alignItems=" flex-start;"
          >
            <ListItem position="relative" marginBottom={["6", 0]}>
              <VStack alignItems={"flex-start"} flexDirection={"row"}>
                <VStack>
                  <Box
                    backgroundColor="yellow.200"
                    zIndex="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="6"
                    height="6"
                    borderColor="yellow.400"
                    borderRadius="full"
                    borderWidth={["none", "8"]}
                  ></Box>
                </VStack>
                <Box
                  display={"flex"}
                  width="150px"
                  backgroundColor="gray.200"
                  height="0.5"
                />
              </VStack>
              <Box
                marginTop="3"
                py={2}
                px={4}
                mx={4}
                borderRadius={"8%"}
                bg="yellow.500"
              >
                <Text fontSize="base" fontWeight="normal" textColor={["white"]}>
                  You
                </Text>
              </Box>
            </ListItem>
            <ListItem position="relative" marginBottom={["6", 0]}>
              <VStack alignItems={"flex-start"} flexDirection={"row"}>
                <VStack>
                  <Box
                    zIndex="10"
                    backgroundColor="#0ea5e9"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="6"
                    height="6"
                    borderColor="yellow.400"
                    borderRadius="full"
                    borderWidth={["none", "8"]}
                  ></Box>
                </VStack>
                <Box
                  display={"flex"}
                  width="150px"
                  backgroundColor="gray.200"
                  height="0.5"
                />
              </VStack>
              <Box
                marginTop="3"
                py={2}
                px={4}
                mx={4}
                borderRadius={"8%"}
                bg=" #0ea5e9"
              >
                <Text fontSize="base" fontWeight="normal" textColor={["white"]}>
                  Anonymonos 1
                </Text>
              </Box>
            </ListItem>
            <ListItem position="relative" marginBottom={["6", 0]}>
              <VStack alignItems={"flex-start"} flexDirection={"row"}>
                <VStack>
                  <Box
                    backgroundColor="#2563eb"
                    zIndex="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="6"
                    height="6"
                    borderColor="yellow.400"
                    borderRadius="full"
                    borderWidth={["none", "8"]}
                  ></Box>
                </VStack>
                <Box
                  display={"flex"}
                  width="150px"
                  backgroundColor="gray.200"
                  height="0.5"
                />
              </VStack>
              <Box
                marginTop="3"
                py={2}
                px={4}
                mx={4}
                borderRadius={"8%"}
                bg="#2563eb"
              >
                <Text fontSize="base" fontWeight="normal" textColor={["white"]}>
                  Anonymonos 2
                </Text>
              </Box>
            </ListItem>
            <ListItem position="relative" marginBottom={["6", 0]}>
              <VStack alignItems={"flex-start"} flexDirection={"row"}>
                <VStack>
                  <Box
                    backgroundColor="teal.200"
                    zIndex="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="6"
                    height="6"
                    borderColor="yellow.400"
                    borderRadius="full"
                    borderWidth={["none", "8"]}
                  ></Box>
                </VStack>
              </VStack>
              <Box
                marginTop="3"
                py={2}
                px={4}
                mx={4}
                borderRadius={"8%"}
                background="teal.400"
              >
                <Text fontSize="base" fontWeight="normal" textColor={["white"]}>
                  Anonymonos 3
                </Text>
              </Box>
            </ListItem>
          </OrderedList>
        </Stack>
      </Stack>
    </div>
  );
}
