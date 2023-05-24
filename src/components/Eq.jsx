import { Box, Stack, Text } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function Eq() {
  const data = {
    inputs: [
      "People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.",
      " They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.",
    ],
  };
  return (
    <Stack
      height={"40vh"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"row"}
    >
      <Box width={"15%"}>
        <Text
          fontSize="4xl"
          lineHeight={1.2}
          fontWeight="bold"
          textAlign="left"
        >
          EQ beats IQ{" "}
        </Text>
      </Box>
      <Stack justifyContent={"center"} display={"flex"} flexDirection={"row"}>
        {data.inputs.map((input) => (
          <BlogCard key={input} input={input} shadow={false} avatar={""} />
        ))}
      </Stack>
    </Stack>
  );
}
