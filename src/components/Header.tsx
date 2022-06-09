import { Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  handlePageNavigation: (params: string) => void;
}
const Header: React.FC<Props> = (props) => {
  const { handlePageNavigation } = props;

  return (
    <Flex justify="flex-end" w="100%">
      <Flex w="65%">
        <Heading color={"black"}>User Management System</Heading>
        <Spacer />
        <Button
          bg="green"
          color={"white"}
          _hover={{ bg: "darkGreen" }}
          onClick={() => handlePageNavigation("Add_User")}
        >
          <AiOutlinePlus />
          <Text ml={"5px"}>ADD</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
