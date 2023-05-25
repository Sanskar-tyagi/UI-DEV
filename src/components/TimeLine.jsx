import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FaRegNewspaper } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const milestones = [
  {
    id: 1,
    categories: ["Article"],
    title: "Wrote first article on Medium",
    icon: FaRegNewspaper,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
    date: "MARCH 30, 2022",
  },
  {
    id: 2,
    categories: ["Web Dev", "OSS"],
    title: "First open source contribution",
    icon: BsGithub,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "July 30, 2022",
  },
  {
    id: 3,
    categories: ["Web Dev", "OSS"],
    title: "First open source contribution",
    icon: BsGithub,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "July 30, 2022",
  },
  {
    id: 4,
    categories: ["Web Dev", "OSS"],
    title: "First open source contribution",
    icon: BsGithub,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    date: "July 30, 2022",
  },
];

const Milestones = () => {
  return (
    <>
      <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
        <HStack
          mb={12}
          fontSize="md"
          flexDirection={"column"}
          alignItems={"flex-start"}
          w="max-content"
        >
          <HStack spacing={1} alignItems="center" justifyContent="center">
            <Text lineHeight={1}>
              Wrong with self-improvement & how we're fixing it.
            </Text>
          </HStack>
          <chakra.h3 fontSize="4xl" fontWeight="bold" textAlign="center">
            Self-improvement. Ugh.
          </chakra.h3>
        </HStack>

        <Swiper direction={"vertical"} slidesPerView={4} className="mySwiper">
          {milestones.map((milestone, index) => (
            <SwiperSlide key={index}>
              <Flex key={index} mb="10px">
                <LineWithDot />
                <Card {...milestone} />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

const Card = ({ title, description, date }) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      spacing={2}
      rounded="lg"
      alignItems="center"
      pos="relative"
    >
      <Box>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            as={Link}
            _hover={{ color: "#6441EF" }}
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {description}
          </Text>
        </VStack>
        <Text fontSize="sm">{date}</Text>
      </Box>
    </HStack>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid #6441EF"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Milestones;
