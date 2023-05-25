import { Stack } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import e1 from "../assets/images/Emojis/emoji (1).png";
import e2 from "../assets/images/Emojis/emoji (2).png";
import e3 from "../assets/images/Emojis/emoji (3).png";
import e4 from "../assets/images/Emojis/emoji (4).png";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
export default function Slider() {
  const data = {
    inputs: [
      "  You get angry and defensive, instead of staying open and working towards  common ground , instead of trusting yourself &      your abilities.",
      "  You question yourself and wonder when they'll realize you're an unqualified      imposter, instead of trusting yourself &      your abilities.",
      " You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself &      your abilities.",
      "  You question yourself and wonder when they'll realize you're an unqualified      imposter, instead of trusting yourself &      your abilities.",
      " You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself &      your abilities.",
      "  You question yourself and wonder when they'll realize you're an unqualified      imposter, instead of trusting yourself &      your abilities.",
    ],
    heading: [
      "You argue with a colleague ",
      "You get a promotion at work ",
      "You argue with a colleague ",
      "You get a promotion at work ",
      "You argue with a colleague ",
      "You get a promotion at work ",
      "You argue with a colleague ",
      "You get a promotion at work ",
      "You argue with a colleague ",
      "You get a promotion at work ",
    ],
    color: [
      "#EFEAFE",
      "#6441F0",
      "#FFEFD7",
      "#FFFAED",
      "#F2F8F8",
      "#EFEAFE",
      "#6441F0",
      "#FFEFD7",
      "#F2F8F8",
    ],
    avatar: [e1, e2, e3, e4, e3, e4],
  };
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const test = () => {
      setds({
        delay: 1000,
        disableOnInteraction: true,
        stopOnLastSlide: true,
      });
    };

    ScrollTrigger.create({
      trigger: "#test",
      onEnter: test,
      //onLeave: myLeaveFunc,
      //onEnterBack: myEnterFunc,
      //onLeaveBack: myLeaveFunc
    });
  }, []);
  const [ds, setds] = useState(false);
  return (
    <Stack
      className="swiper-container"
      id="test"
      justifyContent={"center"}
      py={15}
      height={"60vh"}
      display={"flex"}
      flexDirection={"row"}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={ds}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.inputs.map((input, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              key={index}
              input={input}
              shadow={false}
              color={data.color[index]}
              avatar={data.avatar[index]}
              heading={data.heading[index]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
