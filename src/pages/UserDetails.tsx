import {
  Flex,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useUserIdContext } from "../context/UserIdContext";

const UserDetails = () => {
  const { userId } = useUserIdContext();
  console.log("Logged Output : userId", userId);

  return (
    <>
      <Flex
        borderRadius="10px"
        w="70%"
        bg="white"
        p="40px"
        direction="column"
        gap="15px"
        alignItems={"center"}
      >
        <Image
          alt="Dan Abrahmov"
          src="https://picsum.photos/800/400"
          borderRadius={10}
        />
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Flex>
    </>
  );
};

export default UserDetails;
