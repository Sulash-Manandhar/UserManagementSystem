import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";

import Header from "../components/Header";
import Paginate from "../components/Paginate";
import { useUserLimit } from "../hooks/useUserLimit";
import { UserSchema } from "../Schema/MySchema";
import ViewUser from "./ViewUser";

interface Props {
  handlePageNavigation: (params: string) => void;
}
const Home: React.FC<Props> = (props) => {
  const { handlePageNavigation } = props;
  let paginateNumber = [1, 2, 3, 4];
  const [currentPaginate, setCurrentPaginate] = useState(1);

  const handlePaginateChange = (value: number) => {
    setCurrentPaginate(value);
  };

  return (
    <>
      <Header handlePageNavigation={handlePageNavigation} />
      <ViewUser
        currentPaginate={currentPaginate}
        handlePageNavigation={handlePageNavigation}
      />
      <Paginate
        paginateNumber={paginateNumber}
        handlePaginateChange={handlePaginateChange}
      />
    </>
  );
};

export default Home;
