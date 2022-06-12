import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Paginate from "../components/Paginate";
import { UserWithId } from "../Schema/MySchema";
import ViewUser from "./ViewUser";

interface Props {
  handlePageNavigation: (params: string) => void;
}

const Home: React.FC<Props> = (props) => {
  const { handlePageNavigation } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(3);
  const [totalNumberOfUser, setTotalNumberOfUser] = useState<number>(0);
  const [userData, setUserDate] = useState<UserWithId[]>([
    {
      id: 0,
      name: "",
      username: "",
      email: "",
      sex: "",
      address: {
        street: "",
        city: "",
      },
      phone: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:4001/users?_page=${currentPage}&_limit=${postsPerPage}`
      );
      setUserDate(result.data);
      console.log(result.headers["x-total-count"]);
      setTotalNumberOfUser(parseInt(result.headers["x-total-count"]) as number);
    };
    fetchData();
  }, [currentPage, postsPerPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header handlePageNavigation={handlePageNavigation} />
      <ViewUser
        userData={userData}
        handlePageNavigation={handlePageNavigation}
      />
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={totalNumberOfUser}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
