import {
  Box,
  Stack,
  HStack,
  Text,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
// eslint-disable-next-line react/prop-types
const BlogCard = ({ input, shadow, color, avatar, heading }) => {
  const border = useColorModeValue("gray.400", "gray.600");
  return (
    <Container>
      <Stack
        background={color != "" ? color : "white"}
        w="19rem"
        spacing={4}
        p={5}
        border="1px solid"
        borderColor={shadow == true ? border : "white"}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.4)"
          ),
        }}
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Box pos="relative">
            {avatar != "" ? (
              <Avatar src={avatar} size="md" borderRadius={0} />
            ) : (
              <></>
            )}
          </Box>
        </HStack>
        {heading != "" ? <Text fontWeight={"medium"}>{heading} </Text> : <></>}
        <Text fontSize="md" color={color == "#6441F0" ? "white" : "gray.600"}>
          {input}
        </Text>
      </Stack>
    </Container>
  );
};

export default BlogCard;
