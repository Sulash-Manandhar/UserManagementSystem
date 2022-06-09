import axios from "axios";
import React, { useState, useEffect } from "react";
import { UserSchema } from "../Schema/MySchema";

export const useUserLimit = (link: string, page: number, limit: number) => {
  const [data, setData] = useState<UserSchema[]>([]);
  useEffect(() => {
    axios.get(`${link}?_page=${page}&_limit=${limit}`).then((res: any) => {
      setData(res.data);
    });
  });
  return data;
};
