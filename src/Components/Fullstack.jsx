import React from "react";
import Card from "./Card";

const Fullstack = ({ fullStack }) => {
  return (
    <>
      {fullStack.map((item) => {
        return (
          <>
            <Card item={item} />
          </>
        );
      })}
    </>
  );
};

export default Fullstack;
