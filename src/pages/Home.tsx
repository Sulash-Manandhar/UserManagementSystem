import React, { useState } from "react";
import Header from "../components/Header";
import Paginate from "../components/Paginate";
import { UserSchema } from "../Schema/MySchema";
import ViewUser from "./ViewUser";
import { useFetchUser } from "../hooks/useFetchUser";

interface Props {
  handlePageNavigation: (params: string) => void;
}

const Home: React.FC<Props> = (props) => {
  const { handlePageNavigation } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const userData: UserSchema[] = useFetchUser();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header handlePageNavigation={handlePageNavigation} />
      <ViewUser
        userData={currentPosts}
        handlePageNavigation={handlePageNavigation}
      />
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={userData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
