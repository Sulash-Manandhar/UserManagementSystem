import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import UserIdProvider from "./context/UserIdContext";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home");

  const handlePageNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <UserIdProvider>
      <Box bg={"background"} h={"100vh"} w="100%">
        {currentPage === "Home" && (
          <Flex
            direction={"column"}
            gap={"50px"}
            w="100%"
            h="100%"
            align="center"
            p="20px"
          >
            <Home handlePageNavigation={handlePageNavigation} />
          </Flex>
        )}
        {currentPage === "Add_User" && (
          <AddUser handlePageNavigation={handlePageNavigation} />
        )}
        {currentPage === "User_Details" && (
          <UserDetails handlePageNavigation={handlePageNavigation} />
        )}
      </Box>
    </UserIdProvider>
  );
}

export default App;
