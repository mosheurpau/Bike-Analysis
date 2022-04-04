import React from "react";
import { Image } from "react-bootstrap";
import notFoundImg from "../../Images/NotFun.jpg";
const NotFound = () => {
  return (
    <div>
      <Image src={notFoundImg} class="w-100" alt="Responsive image"></Image>
    </div>
  );
};

export default NotFound;
