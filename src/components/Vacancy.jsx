import {
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function Vacancy() {
  const data = {
    inputs: {
      list: [
        "Full-time position",
        " Berlin or remote",
        "€65-85k, 0.5-1.50% equity share options",
      ],
      list2: [
        " Full-time position",
        "  Berlin or remote",
        "€40-55k, 0.25-0.50% equity share options",
      ],
      list3: [
        "Full-time position",
        " Berlin or remote",
        "€20-24k, 0.5-1.50% equity share options",
      ],
    },
    headings: [
      "Senior Full-Stack Engineer",
      " Senior Designer",
      "Superstar Intern",
    ],
  };
  return (
    <div>
      <VStack
        alignItems={"flex-start"}
        height={"80vh"}
        py={"15vh"}
        px={"20vw"}
        width={"60vw"}
      >
        <Heading fontSize={"5xl"} width={"max-content"} py={"5vh"}>
          Open vacanies
        </Heading>
        <HStack spacing={6}>
          {Object.keys(data.inputs).map((inputKey, index) => (
            <Stack
              backgroundColor={"#FEFBEC"}
              key={index}
              background={""}
              w="19rem"
              spacing={4}
              p={7}
              rounded="md"
              margin="0 auto"
            >
              <Text fontSize={"xl"} fontWeight={"bold"}>
                {data.headings[index]}
              </Text>
              <UnorderedList>
                {data.inputs[inputKey].map((item, idx) => (
                  <ListItem key={idx}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Stack>
          ))}
        </HStack>
      </VStack>
    </div>
  );
}
