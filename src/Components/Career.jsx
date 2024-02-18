import React from "react";
import Card from "./Card";

const Career = ({ career }) => {
  return (
    <>
      {career.map((item) => {
        return <Card item={item} />;
      })}
    </>
  );
};

export default Career;
