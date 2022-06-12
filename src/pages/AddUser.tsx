import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import AddUserForm from "../components/AddUserForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
interface Props {
  handlePageNavigation: (params: string) => void;
}

const AddUser: React.FC<Props> = (props) => {
  const { handlePageNavigation } = props;

  return (
    <Flex w="100%" h="100%" justifyContent={"space-between"}>
      <Flex
        w={"55%"}
        m="auto"
        h="100%"
        direction={"column"}
        justifyContent="space-around"
      >
        <Box>
          <Button
            bg="darkBlue"
            color={"white"}
            _hover={{ bg: "blue" }}
            onClick={() => handlePageNavigation("Home")}
          >
            <AiOutlineArrowLeft />
            <Text ml="1"> Go Back</Text>
          </Button>
        </Box>
        <Box>
          <Heading as="h1" size={"xl"} mb="1">
            Sign Up Now!
          </Heading>
          <Text size={"md"} color={"grey"}>
            Get access to our amazing features
          </Text>
        </Box>

        <AddUserForm />
      </Flex>
      <Box w={"40%"}>
        <Image
          src="https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cover image"
          h="100vh"
          w="auto"
          boxSize="100%"
        />
      </Box>
    </Flex>
  );
};

export default AddUser;
