import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";

interface Props {
  deleteFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DeleteUserAccount: React.FC<Props> = (props) => {
  const { deleteFunction } = props;

  return (
    <Flex
      justifyContent={"space-between"}
      borderBottom={"2px solid teal"}
      pb="5"
    >
      <Box>
        <Heading as="h1" size={"md"}>
          Delete Account
        </Heading>
        <Text>
          By deleting your account, you will lose all your related information.
        </Text>
      </Box>
      <Button
        color={"white"}
        bg="tomato"
        _hover={{ bg: "#ff2c06" }}
        onClick={deleteFunction}
      >
        Delete Account
      </Button>
    </Flex>
  );
};

export default DeleteUserAccount;
