import {
  Avatar,
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Button from "./Button";
import avatar from "../assets/images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
export default function Footer() {
  return (
    <VStack pb={24}>
      <VStack alignItems={"center"}>
        <Avatar src={avatar} size="lg" borderRadius={0} />
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          ahead!
        </Text>
      </VStack>
      <HStack
        justifyContent={"space-between"}
        style={{ marginBottom: "40px" }}
        width={"40vw"}
      >
        <HStack>
          <Icon as={CiLocationOn} color={"black"} h={5} w={5} ml={1}></Icon>
          <Text>India!</Text>
        </HStack>
        <HStack mx={10}>
          <Icon as={MdMarkEmailRead} color={"black"} h={5} w={5} ml={1}></Icon>
          <Text>sanskar@gmail.com!</Text>
        </HStack>
      </HStack>
      <Button></Button>
      <Text style={{ marginTop: "40px" }}>
        © 2019 company, Inc. All rights reserved
      </Text>
    </VStack>
  );
}
