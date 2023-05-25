import { Container, HStack, Heading, VStack } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ghost from "../assets/images/Kawai.png";
export default function About() {
  const data = {
    inputs: [
      "  You get angry and defensive, instead of staying open and working towards  common ground , instead of trusting yourself &      your abilities.",
      "  You question yourself and wonder when they'll realize you're an unqualified      imposter, instead of trusting yourself &      your abilities.",
      " You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself &      your abilities.",
    ],
    heading: [
      "You argue with a colleague ",
      "You get a promotion at work ",
      "You argue with a colleague ",
    ],
  };
  return (
    <VStack
      background={"#F3F1FF"}
      width={"100%"}
      borderRadius={"6%"}
      height={"110vh"}
      py={"10vh"}
    >
      <HStack width={"50vw"} mb={"5vh"} justifyContent={"space-between"}>
        <Heading>Work With Me!</Heading>
        <Heading color={"#613EED"} fontSize={"5xl"}>
          ahead
        </Heading>
      </HStack>
      <HStack justifyContent={"space-evenly"} width="70vw" mt={"10vh"}>
        <VStack>
          <BlogCard
            input={
              "At ahead our goal is to make self- improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!"
            }
            color={"white"}
            heading={"About"}
            avatar={ghost}
          ></BlogCard>
          <BlogCard
            heading={"Product"}
            input={
              "Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did..."
            }
            avatar={""}
            color={"#FEF6F0"}
            shadow={false}
          ></BlogCard>
        </VStack>
        <Swiper slidesPerView={3} direction={"vertical"} className="mySwiper">
          {data.inputs.map((input, index) => (
            <SwiperSlide key={index}>
              <BlogCard
                key={index}
                input={input}
                shadow={true}
                avatar={""}
                heading={data.heading[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
    </VStack>
  );
}
