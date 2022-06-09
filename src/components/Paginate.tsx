import { Flex, Text } from "@chakra-ui/react";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}
const Paginate: React.FC<Props> = (props) => {
  const { postsPerPage, totalPosts, paginate, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Flex gap={10} justifyContent="center">
      {pageNumbers.map((number) => (
        <Text
          key={number}
          fontSize="xl"
          fontWeight={"bold"}
          _hover={{
            cursor: "pointer",
            color: "darkGreen",
          }}
          color={currentPage === number ? "blue" : "darkBlue"}
          onClick={() => {
            paginate(number);
          }}
        >
          {number}
        </Text>
      ))}
    </Flex>
  );
};

export default Paginate;
