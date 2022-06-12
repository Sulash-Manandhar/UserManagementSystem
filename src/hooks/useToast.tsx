import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  type: string;
  message: string;
}
export const useToast = (type: string, message: string): any => {
  if (type === "success") {
    console.log("success");
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
    });
    <ToastContainer />;
  } else if (type === "error") {
    console.log("fail");

    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
    });
    <ToastContainer />;
  }
};
