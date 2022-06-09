import { Flex } from "@chakra-ui/react";
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
      <Flex
        bg={"background"}
        align="center"
        h={"100vh"}
        w="100%"
        direction={"column"}
        gap={"40px"}
        p={"20px"}
      >
        {currentPage === "Home" && (
          <Home handlePageNavigation={handlePageNavigation} />
        )}
        {currentPage === "Add_User" && <AddUser />}
        {currentPage === "User_Details" && <UserDetails />}
      </Flex>
    </UserIdProvider>
  );
}

export default App;
