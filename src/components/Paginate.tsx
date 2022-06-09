import { Flex, Text } from "@chakra-ui/react";
import React from "react";
interface Props {
  paginateNumber: number[];
  handlePaginateChange: (params: number) => void;
}
const Paginate: React.FC<Props> = (props) => {
  let { paginateNumber, handlePaginateChange } = props;

  return (
    <Flex gap={2} alignItems="center">
      {paginateNumber.map((item) => (
        <Text
          key={item}
          _hover={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            handlePaginateChange(item);
          }}
        >
          {item}
        </Text>
      ))}
    </Flex>
  );
};

export default Paginate;
