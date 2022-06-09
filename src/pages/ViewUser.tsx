import { Avatar, Badge, Flex, Heading } from "@chakra-ui/react";
import { UserSchema } from "../Schema/MySchema";
import { useUserLimit } from "../hooks/useUserLimit";
import { useUserIdContext } from "../context/UserIdContext";
interface Props {
  currentPaginate: number;
  handlePageNavigation: (params: string) => void;
}
const ViewUser: React.FC<Props> = (props) => {
  const { currentPaginate, handlePageNavigation } = props;

  const userData = useUserLimit(
    "http://localhost:4001/users",
    currentPaginate,
    3
  );
  const { handleUserId } = useUserIdContext();

  const handleUserDetailNavigation = (id: number) => {
    handleUserId(id);
    handlePageNavigation("User_Details");
  };
  return (
    <Flex direction={"row"} alignItems={"center"} gap="20px">
      {userData.map((user: UserSchema) => (
        <Flex
          borderRadius="10px"
          w="30vh"
          bg="white"
          p="40px"
          direction="column"
          gap="15px"
          alignItems={"center"}
          key={user.id}
        >
          <Avatar
            size="2xl"
            name="Dan Abrahmov"
            src="https://picsum.photos/800/800"
          />
          <Heading size={"xm"} color="darkBlue">
            {user.username}
          </Heading>
          <Badge
            color={"white"}
            bg="blue"
            fontSize={"lg"}
            _hover={{ cursor: "pointer", bg: "darkBlue" }}
            onClick={() => handleUserDetailNavigation(user.id)}
          >
            View Profile
          </Badge>
        </Flex>
      ))}
    </Flex>
  );
};

export default ViewUser;
