import { Avatar, Badge, Flex, Text } from "@chakra-ui/react";
import { useUserIdContext } from "../context/UserIdContext";
import { UserWithId } from "../Schema/MySchema";

interface Props {
  userData: UserWithId[];
  handlePageNavigation: (params: string) => void;
}
const ViewUser: React.FC<Props> = ({ userData, handlePageNavigation }) => {
  const { handleUserId } = useUserIdContext();

  //@desc handle user navigation to user profile
  const handleUserDetailNavigation = (id: number) => {
    handleUserId(id);
    handlePageNavigation("User_Details");
  };

  return (
    <Flex gap={"40px"}>
      {userData.map((user) => (
        <Flex
          display={"column"}
          boxShadow="xl"
          p="10"
          rounded="md"
          bg="white"
          gap="10px"
          alignItems="center"
          textAlign={"center"}
          key={user.id}
        >
          <Avatar
            size="2xl"
            name={user.username}
            src="https://picsum.photos/200"
          />
          <Text
            size="sm"
            color="darkBlue"
            mt="10px"
            textTransform={"capitalize"}
          >
            {user.username}
          </Text>
          <Badge
            variant="solid"
            bg="blue"
            mt="4"
            fontSize={"lg"}
            rounded="md"
            p={2}
            _hover={{ bg: "darkBlue", cursor: "pointer" }}
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
