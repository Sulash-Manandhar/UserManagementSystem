import { useToast } from "@chakra-ui/react";
import React from "react";

export const ShowToast = (
  title: string,
  description: string,
  status: string
) => {
  const toast = useToast();
  console.log("Running toast");
  switch (status.toLowerCase()) {
    case "success":
      return toast({
        title: title,
        description: description,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    case "error":
      return toast({
        title: title,
        description: description,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });

    case "warning":
      return toast({
        title: title,
        description: description,
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    case "loading":
      return toast({
        title: title,
        description: description,
        status: "loading",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    case "info":
      return toast({
        title: title,
        description: description,
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    default:
      return toast({
        title: title,
        description: description,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
  }
};

export default ShowToast;
