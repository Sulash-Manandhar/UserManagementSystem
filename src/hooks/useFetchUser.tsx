import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserSchema } from "../Schema/MySchema";

export const useFetchUser = () => {
  const [userData, setUserDate] = useState<UserSchema[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4001/users");
      setUserDate(result.data);
    };
    fetchData();
  }, []);

  return userData;
};
