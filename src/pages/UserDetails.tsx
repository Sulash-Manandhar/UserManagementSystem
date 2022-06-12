import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import DeleteUserAccount from "../components/DeleteUserAccount";
import EditUserForm from "../components/EditUserForm";
import { useUserIdContext } from "../context/UserIdContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  handlePageNavigation: (params: string) => void;
}

const UserDetails: React.FC<Props> = (props) => {
  const { handlePageNavigation } = props;
  const { userId } = useUserIdContext();

  //@desc delete user account
  //@route(delete) /users
  const deleteUserAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let confirm = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirm) {
      axios
        .delete(`http://localhost:4001/users/${userId}`)
        .then((res) => {
          if (res.status === 200) {
            window.alert("Your account has been deleted");
            toast.success("Delete", {
              position: toast.POSITION.TOP_CENTER,
            });

            handlePageNavigation("Home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Flex
        borderRadius="10px"
        w="100%"
        h={"100%"}
        bg="white"
        direction="column"
        gap="15px"
        p="3"
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
        {/* User profile  */}
        <Flex
          alignItems={"center"}
          gap="4"
          borderBottom={"2px solid teal"}
          p="2"
        >
          <Avatar
            src="https://picsum.photos/200"
            size="2xl"
            name="Segun Adebayo"
            boxShadow={"md"}
          />
          <WrapItem gap={2}>
            <Button colorScheme="teal">Update</Button>
            <Button colorScheme="gray">Remove</Button>
          </WrapItem>
        </Flex>

        {/* User Edit Form  */}
        <EditUserForm />
        <DeleteUserAccount deleteFunction={deleteUserAccount} />
      </Flex>
    </>
  );
};

export default UserDetails;
