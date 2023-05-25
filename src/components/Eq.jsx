import { Box, Stack, Text } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import PropTypes from "prop-types";

export default function Eq({ data, headings, span }) {
  const input = data;

  return (
    <Stack
      height={"60vh"}
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
          {headings}
          <Text color={"teal.300"}>{span}</Text>
        </Text>
      </Box>
      <Stack justifyContent={"center"} display={"flex"} flexDirection={"row"}>
        {input.inputs.map((input) => (
          <BlogCard key={input} input={input} shadow={false} avatar={""} />
        ))}
      </Stack>
    </Stack>
  );
}
Eq.propTypes = {
  data: PropTypes.object.isRequired,
  headings: PropTypes.string,
  span: PropTypes.string,
};
