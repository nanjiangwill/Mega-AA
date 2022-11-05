import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toaster() {
  return (
    <div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
